# NoSQL 数据库简介

## 技术发展

技术的分类

* 解决功能性的问题：Java、Jsp、RDBMS、Tomcat、HTML、Linux、JDBC、SVN
* 解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、Mybatis
* 解决性能的问题：NoSQL、Java线程、Hadoop、Nginx、MQ、ElasticSearch

### Web1.0 时代

Web1.0的时代，数据访问量很有限，用一夫当关的高性能的单点服务器可以解决大部分问题。

![image-20221013172517393](.\assets\image-20221013172517393.png)

### Web2.0 时代

随着Web2.0的时代的到来，用户访问量大幅度提升，同时产生了大量的用户数据。加上后来的智能移动设备的普及，所有的互联网平台都面临了巨大的性能挑战。

![image-20221013172846608](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221013172846608.png)

### 解决CPU及内存压力

![image-20221013172918394](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221013172918394.png)

### 解决IO压力

![image-20221013172942744](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221013172942744.png)

## NoSQL 数据库

### NoSQL 数据库概述

NoSQL(NoSQL = **Not Only SQL** )，意即“不仅仅是SQL”，泛指**非关系型的数据库**。 

NoSQL 不依赖业务逻辑方式存储，而以简单的key-value模式存储。因此大大的增加了数据库的扩展能力。

* 不遵循SQL标准。
* 不支持ACID。
* 远超于SQL的性能。

### NoSQL 适用场景

* 对数据高并发的读写
* 海量数据的读写
* 对数据高可扩展性的

### NoSQL 不适用场景

* 需要事务支持
* 基于sql的结构化查询存储，处理复杂的关系,需要**<font color="red">即席</font>**查询。
* <font color="red">（用不着sql 的和用了sql也不行的情况，请考虑用NoSql）</font>

### Memcache

* 很早出现的NoSql数据库
* 数据都在内存中，一般**不持久化**
* 支持简单的key-value模式，**支持类型单一**
* 一般是作为**缓存数据库**辅助持久化的数据库

### Redis

### MongoDB