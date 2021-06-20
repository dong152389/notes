# Spring Boot 整合 PageHelper

## 概述

PageHelper 是 Mybatis 的分页插件，支持多数据库、多数据源。可以简化数据库的分页查询操作，整合过程也极其简单，只需引入依赖即可。

## 引入依赖

在 `pom.xml` 文件中引入 `pagehelper-spring-boot-starter` 依赖

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.5</version>
</dependency>
```

**PS：** 具体使用方法在 `测试 MyBatis 操作数据库` 章节中进行介绍，本章节仅为准备环节。