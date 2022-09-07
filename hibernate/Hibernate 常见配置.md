# Hibernate常见配置

## 配置xml提示

### mapping提示配置

配置文件中引入的规则

```dtd
http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd
```

是从网上加载,如果电脑没有联网怎么办呢?

我们需要配置一下xml

1. 打开eclipse中的设置

2. 搜索xml ca

![](C:\Users\Fengdong.Duan\Desktop\my-notes\hibernate\img\3.png)

![](C:\Users\Fengdong.Duan\Desktop\my-notes\hibernate\img\4.png)



3. 首先在key中输入我们从规则中复制下来的网址
4. key type要选择uri
5. localtion选择我们的hibernate-mapping-3.dtd文件

### configuration提示配置

与上述同理

## Hibernate映射配置

### 映射的配置

* class标签的配置
  * 属性
    * name:类的全路径
    * table:表名(类与表名一致,table可以省略)
    * catalog:数据库名

* id标签的配置
  * 属性
    * name:类中的属性名
    * column:表中的字段名(属性名名与column一致可以省略)
    * length:长度
    * type:类型
* property标签的配置
  * 属性
    * name:类中的属性名
    * column:表中的字段名
    * length:长度
    * type:类型
    * not-null:设置非空
    * unique:设置唯一

## Hibernate核心的配置

### Hibernate的核心配置方式

* 一种方式:属性文件的方式

  * hibernate.properties

    * ```xml
      <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
      ```

    * 属性文件的方式不能引入映射文件(手动编写代码加载文件)

### 核心配置

1. 必须的配置
   1.  连接数据库的基本配置
       1. 驱动名称
       2. 链接名称
       3. 用户名
       4. 密码
   2.  方言
2. 可选的配置
   1. 显示sql:hibernate.show_sql
   2. 格式化sql:hibernate.format_sql
   3. 自动建表:hibernate.hbmm2ddl.auto
      1. note:不使用hibernate自动建表
      2. create:如果有表删除,然后建立,如果没有就建立
      3. create-drop:如果数据中有表,删除原有表,执行操作,删除这个表,没有就建立执行操作后再删除(做测试用)
         1. 必须在代码中把工厂也释放了
      4. **update**:如果数据库中有表,就使用原表,然后更新表结构
      5. **vaildate**:如果没有表,不会创建表.只会使用表(但是会校验映射和表结构是否一致)
3. 映射文件的引入

```xml
<mapping resource="hibernate_01_demo/Customer.hbm.xml"/>
```
