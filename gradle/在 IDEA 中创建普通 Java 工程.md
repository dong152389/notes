# 在 IDEA 中创建普通 Java 工程

第一步：创建由 Gradle 构建的项目

![](./assets/Snipaste_2022-08-31_14-32-56.png)

第二步： 修改本地 Gradle 目录（可以加快下载项目依赖 jar 包的速度）。

![](./assets/Snipaste_2022-08-31_14-36-19.png)

> 说明：
>
> 1. 在 Terminal 中执行以 gradlew 开头命令和操作图形化的 IDEA 使用 Gradle 版本不一定是同一个版本。
> 2. 目前只能是在创建项目时重新设置本地 gradle,创建新项目需要重新去改。
> 3. 当 我 们 在 gradle.build 文 件 添 加 依 赖 之 后 ， 这 些 依 赖 会 在 下 载 到GRADLE_USER_HOME/caches/modules-2/files-2.1目录下面,所以这里的 GRADLE_USER_HOME 相当于 Gradle 的本地仓库,当然也可以如下方式找到 jar 包位置。  

