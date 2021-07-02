# 基于 Docker 安装 Apollo

## 下载 Docker Quick Start 配置文件

下载地址：https://github.com/ctripcorp/apollo/tree/master/scripts/docker-quick-start

## Compose

```yaml
version: '2'

services:
  apollo-quick-start:
    image: nobodyiam/apollo-quick-start
    container_name: apollo-quick-start
    depends_on:
      - apollo-db
    ports:
      - "8080:8080"
      - "8070:8070"
    links:
      - apollo-db
    environment:
      # 解决容器部署本地无法连接的问题
      eureka.instance.homePageUrl: http://192.168.10.146:8080

  apollo-db:
    image: mysql:5.7
    container_name: apollo-db
    environment:
      TZ: Asia/Shanghai
      MYSQL_ALLOW_EMPTY_PASSWORD: 'yes'
    depends_on:
      - apollo-dbdata
    ports:
      - "13306:3306"
    volumes:
      - ./sql:/docker-entrypoint-initdb.d
    volumes_from:
      - apollo-dbdata

  apollo-dbdata:
    image: alpine:latest
    container_name: apollo-dbdata
    volumes:
      - /var/lib/mysql
```

## 启动 Apollo 配置中心

在 `docker-quick-start` 目录下执行 `docker-compose up -d`，第一次执行会触发下载镜像等操作，需要耐心等待一些时间。

搜索所有 `apollo-quick-start` 开头的日志，看到以下日志说明启动成功：

```text
apollo-quick-start    | ==== starting service ====
apollo-quick-start    | Service logging file is ./service/apollo-service.log
apollo-quick-start    | Started [45]
apollo-quick-start    | Waiting for config service startup.......
apollo-quick-start    | Config service started. You may visit http://localhost:8080 for service status now!
apollo-quick-start    | Waiting for admin service startup......
apollo-quick-start    | Admin service started
apollo-quick-start    | ==== starting portal ====
apollo-quick-start    | Portal logging file is ./portal/apollo-portal.log
apollo-quick-start    | Started [254]
apollo-quick-start    | Waiting for portal startup.......
apollo-quick-start    | Portal started. You can visit http://localhost:8070 now!
```

- 注1：数据库的端口映射为 `13306`，所以如果希望在宿主机上访问数据库，可以通过 `localhost:13306`，用户名是 `root，密码留空。
- 如要查看更多服务的日志，可以通过 `docker exec -it apollo-quick-start bash` 登录， 然后到 `/apollo-quick-start/service` 和 `/apollo-quick-start/portal` 下查看日志信息。

## 运行成功效果图

通过 http://192.168.10.131:8070/signin 访问 Apollo 配置中心

- 登录账号：apollo
- 登录密码：admin

![img](./img/Lusifer_20181023235604.png)

![img](./img/Lusifer_20181023235658.png)