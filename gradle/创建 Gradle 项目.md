# 创建 Gradle 项目

## 脚手架

借助于 spring 脚手架创建一个 gradle 项目。

<img src="./assets/wx_20220827171242.png"  />

![](./assets/wx_20220827171523.png)

## 命令行

创建一个文件夹，使用cmd进入文件夹中，执行gradle init命令，前提是需要配置好环境变量。

![](./assets/wx_20220827172355.png)

## Gradle 中的常用指令

|   常用 gradle 命令    |            作用            |
| :-------------------: | :------------------------: |
|     gradle clean      |       清空build目录        |
|    gradle classes     |   编译业务代码和配置文件   |
|      gradle test      | 编译测试代码，生成测试报告 |
|     gradle  build     |          构建项目          |
| gradle  build -x test |        跳过测试构建        |

需要注意的是：gradle 的指令要在含有 build.gradle 的目录执行。
