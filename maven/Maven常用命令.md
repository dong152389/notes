# Maven 常用命令

本章节只提供 Maven 使用时的一些基本命令

## 清除产生的项目

```text
mvn clean
```

## 编译源代码

```text
mvn compile
```

## 打包

```text
mvn package
```

## 只打包不测试（跳过测试）

```text
mvn -dmaven.test.skip=true
```

## 装到本地仓库

```text
mvn install
```

## 源码打包

```text
mvn source:jar
或
mvn source:jar-no-fork
```