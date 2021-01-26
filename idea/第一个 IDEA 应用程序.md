# 第一个 IDEA 应用程序

## 新建 Java Web 项目

打开 `IDEA` -> `Create New Project`

![img](../assets/img/Lusifer1528017464.png)

选择 `Java` -> `Java EE` -> `Web Application`

![img](../assets/img/Lusifer1528017638.png)

## 选择工作空间

项目命名后选择存放的工作空间，项目就创建完成了

![img](../assets/img/Lusifer1528018627.png)

## 配置 JDK

选择 `File` -> `Project Structure...`

![img](../assets/img/Lusifer1528018777.png)

选择 JDK 的安装路径即可

![img](../assets/img/Lusifer1528018883.png)

## 配置 Tomcat

选择 `Run` -> `Edit Configurations...`

![img](../assets/img/Lusifer1528019007.png)

选择 `+` 号 -> `Tomcat Server` -> `Local`

![img](../assets/img/Lusifer1528019058.png)

选择 Tomcat 的安装路径即可

![img](../assets/img/Lusifer1528019181.png)

## 配置 Tomcat 本地部署

继续上一步，选择 `Deployment` -> `+` 号 -> `Artifact...`

![img](../assets/img/Lusifer1528019373.png)

![img](../assets/img/Lusifer1528019572.png)

选择 `Server` 配置自动更新

![img](../assets/img/Lusifer1528020264.png)

## 测试运行

选择需要运行的项目，点击 `运行` 图标

![img](../assets/img/Lusifer1528020413.png)

浏览器打开：http://localhost:8080 显示如下

```text
$END$
```