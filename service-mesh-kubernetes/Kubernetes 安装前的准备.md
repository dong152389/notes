# Kubernetes 安装前的准备

## 概述

本次安装采用 Ubuntu Server X64 18.04 LTS 版本安装 kubernetes 集群环境，集群节点为 1 主 2 从模式，此次对虚拟机会有些基本要求，如下：

- OS：Ubuntu Server X64 18.04 LTS（16.04 版本步骤相同，再之前则不同）
- CPU：最低要求，1 CPU 2 核
- 内存：最低要求，2GB
- 磁盘：最低要求，20GB

创建三台虚拟机，分别命名如下：

- Ubuntu Server 18.04 X64 Kubernetes Master 	192.168.25.141
- Ubuntu Server 18.04 X64 Kubernetes Slave1      192.168.25.142
- Ubuntu Server 18.04 X64 Kubernetes Slave2      192.168.25.143

## 配置网络

当关机后再启动虚拟机有时 IP 地址会自动更换，导致之前的配置不可用；配置完 Kubernetes 网络后虚拟机还会出现无法联网的情况，后经研究发现是 DNS 会被自动重写所致，Ubuntu Server 18.04 LTS 版本的 IP 和 DNS 配置也与之前的版本配置大相径庭，故在此说明下如何修改 IP 和 DNS

### 修改固定 IP

编辑 `vi /etc/netplan/50-cloud-init.yaml` 配置文件，注意这里的配置文件名未必和你机器上的相同，请根据实际情况修改。修改内容如下：

```yaml
network:
    ethernets:
        ens33:
          addresses: [192.168.25.141/24]
          gateway4: 192.168.25.2
          nameservers:
            addresses: [192.168.25.2]
    version: 2
```

使配置生效 `netplan apply`

### 修改 DNS

#### 方法一

- 停止 `systemd-resolved` 服务：`systemctl stop systemd-resolved`
- 修改 DNS：`vi /etc/resolv.conf`，将 `nameserver` 修改为如 `114.114.114.114` 可以正常使用的 DNS 地址

#### 方法二

```bash
vi /etc/systemd/resolved.conf
```

把 DNS 取消注释，添加 DNS，保存退出，重启即可

![img](./img/Lusifer_20190602201826.png)



对虚拟机系统的配置：

- 关闭交换空间：`sudo swapoff -a`
- 避免开机启动交换空间：注释 `/etc/fstab` 中的 `swap`
- 关闭防火墙：`ufw disable`

## 使用 APT 安装 Docker

### 安装

```bash
#由于apt官方库里的docker版本可能比较旧，所以先卸载可能存在的旧版本：

sudo apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc

#如果出现如下状况
E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)
E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?

#说明有文件被锁定了

#删除锁定文件
sudo rm /var/lib/dpkg/lock-frontend       

sudo rm /var/lib/dpkg/lock

#继续执行

dpkg -l | grep docker

dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P # 删除无用的相关的配置文件

sudo apt-get autoremove docker-ce-*

sudo rm -rf /etc/systemd/system/docker.service.d
 
sudo rm -rf /var/lib/docker

#更新apt包索引：

sudo apt-get update


#安装以下包以使apt可以通过HTTPS使用存储库（repository）：

sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common


#添加Docker官方的GPG密钥：

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -


#这个时间点（2018.06.09），Ubuntu 18.04 LTS (Bionic Beaver) 对应的docker package is not available，所以只能通过下面的语句安装stable存储库

add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu artful stable" 

#不能使用下面的语句，我就踩了很多坑，很多博客都推荐下面的语句，这样就会导出docker-ce安装不上

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"


#再更新一下apt包索引：

sudo apt-get update


#这里安装的最新版，其实是安装你电脑上可用的最新版，查看系统可用的版本：

apt-cache madison docker-ce


#选择要安装的docker18.06.3-ce，通过上面命令查询出来

sudo apt-get install docker-ce=18.06.3~ce~3-0~ubuntu


#验证docker
#查看docker服务是否启动：

systemctl status docker


#若未启动，则启动docker服务：

sudo systemctl enable docker
sudo systemctl start docker

#测试经典的hello world：

sudo docker run hello-world
```

### 验证

```bash
docker version
Client:
 Version:           18.06.3-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        d7080c1
 Built:             Wed Feb 20 02:28:10 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.3-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       d7080c1
  Built:            Wed Feb 20 02:26:34 2019
  OS/Arch:          linux/amd64
  Experimental:     false
```

### 配置加速器

对于使用 **systemd** 的系统，请在 `/etc/docker/daemon.json` 中写入如下内容（如果文件不存在请新建该文件）

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

> 注意，一定要保证该文件符合 JSON 规范，否则 Docker 将不能启动。

验证加速器是否配置成功：

```bash
sudo systemctl restart docker
docker info
...
# 出现如下语句即表示配置成功
Registry Mirrors:
 https://registry.docker-cn.com/
...
```

## 修改主机名

在同一局域网中主机名不应该相同，所以我们需要做修改，下列操作步骤为修改 **18.04** 版本的 Hostname，如果是 16.04 或以下版本则直接修改 `/etc/hostname` 里的名称即可

**查看当前 Hostname**

```bash
# 查看当前主机名
hostnamectl
# 显示如下内容
   Static hostname: ubuntu
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 33011e0a95094672b99a198eff07f652
           Boot ID: dc856039f0d24164a9f8a50c506be96d
    Virtualization: vmware
  Operating System: Ubuntu 18.04.2 LTS
            Kernel: Linux 4.15.0-48-generic
      Architecture: x86-64
```

**修改 Hostname**

```bash
# 使用 hostnamectl 命令修改，其中 kubernetes-master 为新的主机名
hostnamectl set-hostname kubernetes-master
```

**修改 cloud.cfg**

如果 `cloud-init package` 安装了，需要修改 `cloud.cfg` 文件。该软件包通常缺省安装用于处理 cloud

```bash
# 如果有该文件
vi /etc/cloud/cloud.cfg

# 该配置默认为 false，修改为 true 即可
preserve_hostname: true
```

**验证**

```bash
root@kubernetes-master:~# hostnamectl
   Static hostname: kubernetes-master
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 33011e0a95094672b99a198eff07f652
           Boot ID: 8c0fd75d08c644abaad3df565e6e4cbd
    Virtualization: vmware
  Operating System: Ubuntu 18.04.2 LTS
            Kernel: Linux 4.15.0-48-generic
      Architecture: x86-64
```