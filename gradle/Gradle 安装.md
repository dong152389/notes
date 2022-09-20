# Gradle 安装

## Gradle 安装说明

先看Spring官网的说明。6.8以下的版本是不可以使用的。具体的参考文档：[Getting Started (spring.io)](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started)

![](./assets/wx_20220827170034.png)

## 配置环境变量

和Maven的配置一样，首先配置一个为GRADLE_HOME的key，选择Gradle的根目录，然后在Path中配置bin目录即可。

![](./assets/wx_20220827170530.png)

**<font color="red">重要：</font>**再配置一个<font color="blue"> GRALE_USER_HOME </font> 环境变量

![](./assets/wx_20220827170830.png)

> GRALE_USER_HOME 相当于配置 Gradle 本地仓库位置和 Gradle 。
