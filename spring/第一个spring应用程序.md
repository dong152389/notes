# 第一个 Spring 应用程序

## POM

创建一个工程名为 `hello-spring` 的项目，`pom.xml` 文件如下：

```text
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.funtl</groupId>
    <artifactId>hello-spring</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.3.17.RELEASE</version>
        </dependency>
    </dependencies>
</project>
```

主要增加了 `org.springframework:spring-context` 依赖

## 创建接口与实现

### 创建 `UserService` 接口

```text
package com.funtl.hello.spring.service;

public interface UserService {
    public void sayHi();
}
```

### 创建 `UserServiceImpl` 实现

```text
package com.funtl.hello.spring.service.impl;

import com.funtl.hello.spring.service.UserService;

public class UserServiceImpl implements UserService {
    public void sayHi() {
        System.out.println("Hello Spring");
    }
}
```

## 创建 Spring 配置文件

在 `src/main/resources` 目录下创建 `spring-context.xml` 配置文件，从现在开始类的实例化工作交给 Spring 容器管理（IoC），配置文件如下：

```text
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="userService" class="com.funtl.hello.spring.service.impl.UserServiceImpl" />
</beans>
```

- `<bean />`：用于定义一个实例对象。一个实例对应一个 bean 元素。
- `id`：该属性是 Bean 实例的唯一标识，程序通过 id 属性访问 Bean，Bean 与 Bean 间的依赖关系也是通过 id 属性关联的。
- `class`：指定该 Bean 所属的类，注意这里只能是类，不能是接口。

## 测试 Spring IoC

创建一个 `MyTest` 测试类，测试对象是否能够通过 Spring 来创建，代码如下：

```text
package com.funtl.hello.spring;

import com.funtl.hello.spring.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTest {

    public static void main(String[] args) {
        // 获取 Spring 容器
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring-context.xml");
        
        // 从 Spring 容器中获取对象
        UserService userService = (UserService) applicationContext.getBean("userService");
        userService.sayHi();
    }
}
```