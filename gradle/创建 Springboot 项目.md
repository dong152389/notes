# 创建 Springboot 项目

Spring Boot Gradle 插件在 Gradle 提供 Spring Boot 支持。它允许您打包可执行 jar 或 war 归档文件，运行 SpringBoot 应用程序，并使用 Spring-Boot-dependencies 提供的依赖管理。相关文档请参考：[Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#running-your-application)。

## 引入 springboot 插件

该插件发布在 Gradle 的插件门户网站上，可以使用插件块来应用

~~~groovy
plugins {
    id 'org.springframework.boot' version '2.3.7.RELEASE' //维护springboot版本号,不单独使用,和下面两个插件一起用
    id 'io.spring.dependency-management' version '1.0.10.RELEASE'
    //进行依赖管理,在引入其它boot依赖时省略版本号、 解决jar包冲突问题
    id 'java'
}
~~~

## 引入所需要的依赖

~~~groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter'
    implementation 'org.springframework.boot:spring-boot-starter-web' //省略版本,原生bom支持,插件management提供
    testImplementation('org.springframework.boot:spring-boot-starter-test') {
    	exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
    }
} 
test {
	useJUnitPlatform()
}
~~~

## 执行 gradle bootRun 指令

* 要想运行当前 Springboot 项目，直接执行 gradle bootRun 指令或者 idea 右侧按钮即可。
* 当然如果想让当前项目打成可执行 jar 包，只需执行： gradle bootJar 指令即可。
* <font color="#ec7c30">Cloud 项目创建也可以借助于脚手架创建，与 Boot 项目类似。</font>

## 拓展 spring-boot-gradle-plugin 插件

~~~groovy
buildscript {
    repositories {
    	maven { url 'https://maven.aliyun.com/repository/public' }
    } 
    dependencies {
    	classpath 'org.springframework.boot:spring-boot-gradle-plugin:2.4.1'
    }
}


apply plugin: 'org.springframework.boot'
apply plugin: 'io.spring.dependency-management'
~~~