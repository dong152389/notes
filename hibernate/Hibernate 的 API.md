# Hibernate的API

## Configuration:Hibernate的配置对象

Configuration 类的作用是对Hibernate  进行配置，以及对它进行启动。在Hibernate 的启动过程中，Configuration  类的实例首先定位映射文档的位置，读取这些配置，然后创建一个SessionFactory对象。虽然Configuration  类在整个Hibernate 项目中只扮演着一个很小的角色，但它是启动hibernate 时所遇到的第一个对象.

## 作用

* 加载核心配置文件

  * hibernate.properties

    * ```java
      Configuration cfg = new Configuration();
      ```

  * hibernate.cfg.xml

    * ```java
      Configuration cfg = new Configuration().configure();
      ```

  * 加载映射文件(把hibernate.cfg.xml中的映射删除,在demo01.java中加入)

    * ```java
      //1加载hibernate的核心配置文件
      Configuration configuration = new Configuration().configure();
      //手动加载映射
      configuration.addResource("hibernate_01_demo/Customer.hbm.xml");
      ```

## SessionFactory:Session工厂

SessionFactory接口负责初始化Hibernate。它充当数据存储源的代理，并负责创建Session对象。这里用到了[工厂模式](https://baike.baidu.com/item/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F)。需要注意的是SessionFactory并不是轻量级的，因为一般情况下，一个项目通常只需要一个SessionFactory就够，当需要操作多个数据库时，可以为每个数据库指定一个SessionFactory。

**SessionFactory内部维护了Hibernate的连接池和Hibernate的二级缓存是线程安全对象.一个项目创建一个即可**

## 配置连接池

1. 将 c3p0的配置信息放入到核心配置文件中

```xml
<!-- 配置C3P0连接池 -->
<property name="connection.provider_class">org.hibernate.connection.C3P0ConnectionProvider</property>
<!--在连接池中可用的数据库连接的最少数目 -->
<property name="c3p0.min_size">5</property>
<!--在连接池中所有数据库连接的最大数目  -->
<property name="c3p0.max_size">20</property>
<!--设定数据库连接的过期时间,以秒为单位,
  如果连接池中的某个数据库连接处于空闲状态的时间超过了timeout时间,就会从连接池中清除 -->
<property name="c3p0.timeout">120</property>
<!--每3000秒检查所有连接池中的空闲连接 以秒为单位-->
<property name="c3p0.idle_test_period">3000</property>
```

2. 引入c3p0的jar包

## 抽取工具类

```java
package hibernate_01_demo.utils;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * ' Hibernate的工具类
 * 
 * @author Administrator
 *
 */
public class HibernateUtils {
	public static final Configuration cfg;
	public static final SessionFactory sf;
	static {
		cfg = new Configuration().configure();
		sf = cfg.buildSessionFactory();
	}

	public static Session openSession() {
		return sf.openSession();
	}

}
```

## **Session**:类似Connection对象

[Session](https://baike.baidu.com/item/Session)接口负责执行被持久化对象的[CRUD](https://baike.baidu.com/item/CRUD)操作(CRUD的任务是完成与数据库的交流，包含了很多常见的SQL语句)。但需要注意的是[Session对象](https://baike.baidu.com/item/Session%E5%AF%B9%E8%B1%A1)是非[线程安全](https://baike.baidu.com/item/%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8)的。同时，Hibernate的[session](https://baike.baidu.com/item/session)不同于JSP应用中的HttpSession。这里当使用session这个术语时，其实指的是Hibernate中的session，而以后会将HttpSession对象称为用户session。

Session代表的是Hibernate与数据链接的对象.不是线程安全,不能把Session定义成public,与数据库交互的桥梁.

## Session中的API

### 保存方法

* Serializable save(Obeject obj)

### 查询方法

* T get(Class,Serializable)
* T load(Class,Serializable)
* get方法和load方法的区别
  * get采用的是立即加载,执行到这行代码的时候,就会马上发送SQL语句查询,返回对象本身,查询一个找不到的对象的时候返回null
  * load采用的延时加载,执行到这行代码的时候,不会发送SQL语句,当真正使用这个对象的时候的才会加载,返回代理对象,查询一个找不到的对象的时候返回异常

### 修改方法

* void update(Object obj);

  * 两个方法:

    * 直接创建对象,进行修改(这样做会把原有的数据都清空)
    * 先查询,在修改(推荐)

  * ```java
    @Test
     	public void xiugai(){
     		Session session = HibernateUtils.openSession();
     		Transaction transaction = session.beginTransaction();
     		//直接创建对象,修改
    //		Customer customer = new Customer();
    //		customer.setCust_id(1l);
    //		customer.setCust_name("爱爱丸");
    //		session.update(customer);
    		//先查询再修改
    		Customer customer = session.get(Customer.class, 1l);
    		customer.setCust_name("阿魏酸");
    		session.update(customer);
    		transaction.commit();
    		session.close();
    	}
    ```

### 删除方法

* void delete(Obeject obj);

  * 两个方法:

  * 直接创建对象,进行删除

  * 先查询,在删除(推荐)

  * ```java
    @Test
     	public void shanchu() {
     		Session session = HibernateUtils.openSession();
     		Transaction transaction = session.beginTransaction();
     
    //		// 直接创建对象,删除
    //		Customer customer = new Customer();
    //		customer.setCust_id(1l);
    //		session.delete(customer);
    		//先查询再删除(推荐)----可以级联删除
    		Customer customer = session.get(Customer.class, 2l);
    		session.delete(customer);
    		transaction.commit();
    		session.close();
    	}
    ```

  * 第二种可以级联删除,比如 用户下的订单,删除用户时可以将订单信息一起删除

### 保存或者更新

* void saveOrUpdate(Object obj);

  * 不设置ID时就是保存,设置ID的时候就是更新

  * ```java
    public void demo05() {
     		Session session = HibernateUtils.openSession();
     		Transaction transaction = session.beginTransaction();
     		Customer customer = new Customer();
     		customer.setCust_name("阿苏");
     		customer.setCust_id(3l);
     		session.saveOrUpdate(customer);
     		transaction.commit();
     		session.close();
     	}
    ```

### 查询所有

* 接收HQL

  * ```java
    // 接收HQL
    		 Query query = session.createQuery("from Customer");
    		 List<Customer> list = query.list();
    		 for (Customer customer : list) {
    		 System.out.println(customer.toString());
    		 }
    ```

* 接收SQL

  * ```java
    // 接收 SQL
    		SQLQuery createSQLQuery = session.createSQLQuery("select * from cst_customer");
    		List<Object[]> list2 = createSQLQuery.list();
    		for (Object[] object : list2) {
    			System.out.println(Arrays.toString(object));
    		}
    ```

## Transaction

Transaction 接口是一个可选的API，可以选择不使用这个接口，取而代之的是Hibernate 的设计者自己写的底层事务处理代码。Transaction 接口是对实际事务实现的一个抽象，这些实现包括JDBC的事务、JTA 中的UserTransaction、甚至可以是CORBA 事务。之所以这样设计是能让开发者能够使用一个统一事务的操作界面，使得自己的项目可以在不同的环境和容器之间方便地移植。

## Hibernate中的事务

**begin:开始事务**

**commit:提交事务**

**rollback:回滚**

