# Gradle 插件

## 使用插件的原因

简单的说,通过应用插件我们可以

* 促进代码重用、 减少功能类似代码编写、 提升工作效率。
* 促进项目更高程度的模块化、 自动化、 便捷化。
* 可插拔式的的扩展项目的功能。

## 插件的作用

在项目构建过程中做很多事情，把插件应用到项目中，通常可以完成:

1. 可以添加任务【task】到项目中，从而帮助完成测试、编译、打包等。
2. 可以添加依赖配置到项目中。
3. 可以向项目中拓展新的扩展属性、方法等。
4. 可以对项目**进行一些约定**，如应用 Java 插件后，约定 src/main/java 目录是我们的源代码存在位置，编译时编译这个目录下的 Java 源代码文件。

## 插件的分类和使用

![](./assets/Snipaste_2022-09-27_15-25-16.png)

<font color="#ec7d35">**第一种：脚本插件**</font>

脚本插件的本质就是一个脚本文件，使用脚本插件时通过 apply from:将脚本加载进来就可以了，后面的脚本文件可以是本地的也可以是网络上的脚本文件，下面定义一段脚本，我们在 build.gradle 文件中使用它，具体如：

~~~groovy
//version.gradle文件
ext {
    username = "东东"
    cfgs = [compileSdkVersion: JavaVersion.VERSION_1_8]
    spring = [version: '5.0.0']
}
~~~

下面将将在构建文件中使用这个脚本文件，具体如下：

~~~groovy
//build.gradle文件
//map作为参数
apply from: 'version.gradle'
task taskVersion {
    doLast {
        println "姓名为：${username},JDK版本是${cfgs.compileSdkVersion},版本号是${spring.version}"
    }
}
~~~

<font color="grey">意义</font>：脚本文件模块化的基础，可按功能把我们的脚本进行拆分一个个公用、职责分明的文件，然后在主脚本文件引用，比如：将很多共有的库版本号一起管理、应用构建版本一起管理等。  

<font color="#ec7d35">**第二种：对象插件之内部插件[核心插件]**</font>
二进制插件[对象插件]就是实现了 org.gradle.api.Plugin 接口的插件，每个 Java Gradle 插件都有一个 plugin id。

![](./assets/Snipaste_2022-09-27_15-36-59.png)

可通过如下方式使用一个 Java 插件：  

~~~groovy
apply plugin : 'java' //map具名参数方式
~~~

或者：  

~~~groovy
//也可以使用闭包作为project.apply方法的一个参数
apply{
	plugin 'java'
}
~~~

通过上述代码就将 Java 插件应用到我们的项目中了，对于 Gradle 自带的核心插件都有唯一的 plugin id，其中 java 是Java 插件的 plugin id,这个 plugin id 必须是唯一的，可使用应用包名来保证 plugin id 的唯一性。这里的 java 对应的具体类型是 `org.gradle.api.plugins.JavaPlugin`，所以可以使用如下方式使用 Java 插件。 

~~~groovy
//使用方式1： Map具名参数,全类名
apply plugin:org.gradle.api.plugins.JavaPlugin
//org.gradle.api.plugins默认导入： 使用方式2
apply plugin:JavaPlugin
apply plugin: 'java' //核心插件，无需事先引入， 使用方式3:插件的id
~~~

Gradle 中提供的二进制插件【核心插件】，可参考：[Gradle Plugin Reference](https://docs.gradle.org/current/userguide/plugin_reference.html)。

<font color="#ec7d35">**第三种：对象插件之第三方插件**</font>

如果是使用第三方发布的二进制插件，一般需要配置对应的仓库和类路径

~~~groovy
//使用传统的应用方式，必须要放在文件的开始
buildscript {
    ext {
        springBootVersion = "2.3.3.RELEASE"
    }
    repositories {
        mavenLocal()
        jcenter()
    } // 此处先引入插件
    dependencies {
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}
//再应用插件
apply plugin: 'org.springframework.boot' //社区插件,需要事先引入，不必写版本号
~~~

但是如果是第三方插件已经被托管在 https://plugins.gradle.org/ 网站上，就可以不用在 buildscript 里配置 classpath依赖了，直接使用新出的 plugins DSL 的方式引用。

~~~groovy
plugins {
    id 'org.springframework.boot' version '2.4.1'
}
~~~

> 注意：
>
> 1. 如果使用老式插件方式 buildscript{}要放在 build.gradle 文件的最前面,而新式 plugins{}没有该限制。
> 2. 托管在网站 gradle 插件官网的第三方插件有两种使用方式，一是传统的 buildscript 方式，一种是 plugins DSL 方式 。  

<font color="#ec7d35">**第四种：对象插件之用户自定义插件**</font>

~~~groovy
interface GreetingPluginExtension {
    Property<String> getMessage()

    Property<String> getGreeter()
}

class GreetingPlugin implements Plugin<Project> {
    void apply(Project project) {
        def extension = project.extensions.create('greeting', GreetingPluginExtension)
        project.task('hello') {
            doLast {
                println "${extension.message.get()} from ${extension.greeter.get()}"
            }
        }
    }
}

apply plugin: GreetingPlugin
// Configure the extension using a DSL block
greeting {
    message = 'Hi'
    greeter = 'Gradle'
}
~~~

参考地址：[Developing Custom Gradle Plugins](https://docs.gradle.org/current/userguide/custom_plugins.html)
我们直接执行 hello 任务 `./gradle hello` 即可，这种方式实现的插件我们一般不使用，因为这种方式局限性太强，只能本
Project，而其他的 Project 不能使用。  

  