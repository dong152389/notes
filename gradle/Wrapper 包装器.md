# Wrapper 包装器

Gradle Wrapper 实际上就是对 Gradle 的一层包装，用于解决实际开发中可能会遇到的不同的项目需要不同版本的 Gradle 问题。例如：把自己的代码共享给其他人使用，可能出现如下情况: 

* 对方电脑没有安装 gradle 。
* 对方电脑安装过 gradle，但是版本太旧了 。

这时候，我们就可以考虑使用 Gradle Wrapper 了。这也是官方建议使用 Gradle Wrapper 的原因。实际上有了 Gradle Wrapper 之后，我们本地是可以不配置 Gradle 的，下载 Gradle 项目后，使用 gradle 项目自带的 wrapper 操作也是可以的。

## 如何使用Gradle Wrapper

项目中的gradlew、gradlew.cmd脚本用的就是 wrapper 中规定的 gradle 版本。
而我们上面提到的 gradle 指令用的是本地 gradle ，所以 gradle 指令和 gradlew 指令所使用的 gradle 版本有可能是不一样的。
gradlew、gradlew.cmd的使用方式与 gradle 使用方式完全一致，<font color="red">只不过把gradle指令换成了gradlew指令</font>。  

当然，我们也可在终端执行 gradlew 指令时，指定指定一些参数,来控制 Wrapper 的生成，比如依赖的版本等。

|          参数名           |                 说明                  |
| :-----------------------: | :-----------------------------------: |
|     --gradle-version      |      用于指定使用的 Gradle 版本       |
| --gradle-distribution-url | 用于指定下载 Gradle 发行版的 URL 地址 |

具体操作如下：

~~~
gradle wrapper --gradle-version=4.4：升级wrapper版本号,只是修改gradle.properties中wrapper版本，未实际下载
gradle wrapper --gradle-version 5.2.1 --distribution-type all：关联源码用
~~~

## GradleWrapper 的执行流程

1. 当我们第一次执行 ./gradlew build 命令的时候，gradlew 会读取 gradle-wrapper.properties 文件的配置信息。
2. 准确的将指定版本的 gradle 下载并解压到指定的位置(GRADLE_USER_HOME目录下的wrapper/dists目录中)。
3. 并构建本地缓存(GRADLE_USER_HOME目录下的caches目录中)，下载再使用相同版本的gradle就不用下载了。
4. 之后执行的 ./gradlew 所有命令都是使用指定的 gradle 版本。

![执行流程](./assets/Snipaste_2022-08-29_13-57-29.png)

gradle-wrapper.properties 文件解读：

| 字段名           | 说明                                                   |
| :--------------- | :----------------------------------------------------- |
| distributionBase | 下载的 Gradle 压缩包解压后存储的主目录                 |
| distributionPath | 相对于 distributionBase 的解压后的 Gradle 压缩包的路径 |
| zipStoreBase     | 同 distributionBase，只不过是存放 zip 的压缩包的       |
| zipStorePath     | 同 distributionPath，只不过是存放 zip 的压缩包的       |
| distributionUrl  | Gradle 发行版压缩包的下载地址                          |

> 前面提到的 <font color="red">GRALE_USER_HOME 环境变量</font>用于这里的 Gradle Wrapper 下载的特定版本的 gradle 存储目录。如果我们没有配置过 GRALE_USER_HOME 环境变量，<font color="red">默认在当前用户目录下的 .gradle 文件夹中</font>。

## 那什么时候选择使用 gradle wrapper，什么时候选择使用本地 gradle?  

* 下载别人的项目或者使用操作以前自己写的不同版本的 gradle 项目时：用Gradle wrapper，也即：gradlew。
* 新建一个项目时：使用 gradle 指令即可。 