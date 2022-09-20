# 在 IDEA 中创建普通 WEB 项目

> 在新版本的 IDEA 中是无法直接创建 WEB 工程的，需要先创建一个普通工程然后再手动修改为 WEB 工程。

以 SSM 框架为例

1. 按照普通工程创建完毕后，在 build.gradle 文件里的 plugins 中添加`id 'war'`，然后在 main 文件夹内创建 webapp 目录。
2. 刷新 Gradle 工程。

~~~groovy
/*完整代码*/
plugins {
    id 'java'
    id 'war'
}

group 'com.gradle.demo'
version '1.0-SNAPSHOT'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework:spring-beans:4.1.7.RELEASE'
    implementation 'org.springframework:spring-web:4.1.7.RELEASE'
    implementation 'org.springframework:spring-webmvc:4.1.7.RELEASE'
    implementation 'org.springframework:spring-tx:4.1.7.RELEASE'
    implementation 'org.springframework:spring-test:4.0.5.RELEASE'
    implementation 'org.springframework:spring-jdbc:4.1.7.RELEASE'

    implementation 'org.mybatis:mybatis-spring:1.2.3'
    implementation 'org.mybatis:mybatis:3.3.0'

    implementation 'mysql:mysql-connector-java:8.0.29'
    implementation 'com.alibaba:druid:1.0.15'

    implementation "com.fasterxml.jackson.core:jackson-databind:2.2.3"
    implementation "com.fasterxml.jackson.core:jackson-annotations:2.2.3"
    implementation "com.fasterxml.jackson.core:jackson-core:2.2.3"

    implementation 'org.aspectj:aspectjweaver:1.8.6'
    implementation 'log4j:log4j:1.2.17'
    implementation 'org.slf4j:slf4j-api:1.7.25'
    implementation 'jstl:jstl:1.2'
    compileOnly 'javax.servlet:servlet-api:2.5'
    /* junit5测试只加依赖是不可以的 */
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.8.1'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.8.1'
}

test {
    /* 还必须要加上下面的代码 */
    useJUnitPlatform()
}
~~~
