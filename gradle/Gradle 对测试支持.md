# Gradle 对测试支持

测试任务自动检测并执行测试源集中的所有单元测试。测试执行完成后会生成一个报告。支持 JUnit 和 TestNG 测试 。

## 默认测试目录及标准输出

![](./assets/Snipaste_2022-08-31_15-28-22.png)

## Junit 使用

Gradle 对于 Junit4.x 支持

~~~groovy
dependencies {
	testImplementation group: 'junit' ,name: 'junit', version: '4.12'
} 
test {
	useJUnit()
}
~~~

Gradle 对于 Junit5.x 版本支持

~~~groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.8.1'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.8.1'
} 
test {
	useJUnitPlatform()
}
~~~

>无论是 Junt4.x 版本还是 Junit5.x 版本，只需在 build.gradle 目录下执行 gradle test 指令，gradle 就会帮执行所有的加了@Test 注解的测试，并生成测试报告。  

## 包含和排除特定测试

~~~groovy
test {
    enabled true
    useJUnit()
    include 'com/**'
    exclude 'com/abc/**'
}
~~~

gradle 在 junit 中的批量测试,可以设置包含或者排除某些特定测试。