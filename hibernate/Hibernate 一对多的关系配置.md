# Hibernate一对多的关系配置

## 首先创建两个实体

一个客户可以对应多个联系人,但是一个联系人只能对应一个客户,
 通过ORM的方式表示:一个客户对应多个联系人,放置多的一方的集合Hibernate默认使用的是Set集合.

* 客户

  * ```java
    private Long cust_id;
    	private String cust_name;
    	private String cust_source;
    	private String cust_industry;
    	private String cust_level;
    	private String cust_phone;
    	private String cust_mobile;
    	// 通过ORM的方式表示:一个客户对应多个联系人
    	// 放置多的一方的集合
    	// Hibernate默认使用的是Set集合
    	private Set<LinkMan> linkMans = new HashSet<LinkMan>();
    ```

 通过ORM方式表示:一个联系人只能属于某一个客户,放置的是一的一方的对象

* 联系人

  * ```java
    private Long lkm_id;
    	private String lkm_name;
    
    	private String lkm_gender;
    	private String lkm_phone;
    	private String lkm_mobile;
    	private String lkm_email;
    	private String lkm_qq;
    	private String lkm_position;
    	private String lkm_memo;
    	// 通过ORM方式表示:一个联系人只能属于某一个客户
    	// 放置的是一的一方的对象
    	private Customer customer;
    ```


## 在配置文件中

* Customer.hbm.xml

  * ```xml
    <hibernate-mapping>
    	<!-- 建立类与表的映射 -->
    	<class name="hibernate_02.po.Customer" table="cst_customer">
    		<!-- 类中的属性与表中的主键对应 -->
    		<id name="cust_id" column="cust_id">
    			<generator class="native" />
    		</id>
    		<!-- 奖励类中的其他属性与表中的列对应 -->
    		<property name="cust_name" column="cust_name" />
    		<property name="cust_source" column="cust_source" />
    		<property name="cust_industry" column="cust_industry" />
    		<property name="cust_level" column="cust_level" />
    		<property name="cust_phone" column="cust_phone" />
    		<property name="cust_mobile" column="cust_mobile" />
    		<!-- 自动创建表 -->
    		<!-- 配置一对多的映射:放置多的一方的集合 -->
    		<!-- set标签 : name : 多的一方的属性名 -->
    		<set name="linkMans">
    			<!-- key 多的一方的外键名称 -->
    			<key column="lkm_cust_id" />
    			<!-- one-to-many class : 多的一方类的全路径 -->
    			<one-to-many class="hibernate_02.po.LinkMan" />
    		</set>
    	</class>
    </hibernate-mapping>
    ```

* LinkMan.hbm.xml

  * ```xml
    <hibernate-mapping>
    	<!-- 建立类与表的映射 -->
    	<class name="hibernate_02.po.LinkMan" table="cst_linkman" >
    		<!-- 类中的属性与表中的主键对应 -->
    		<id name="lkm_id" column="lkm_id">
    			<generator class="native" />
    		</id>
    		<!-- 奖励类中的其他属性与表中的列对应 -->
    		<property name="lkm_name" column="lkm_name" />
    		<property name="lkm_gender" column="lkm_gender" />
    		<property name="lkm_phone" column="lkm_phone" />
    		<property name="lkm_mobile" column="lkm_mobile" />
    		<property name="lkm_email" column="lkm_email" />
    		<property name="lkm_qq" column="lkm_qq" />
    		<property name="lkm_position" column="lkm_position" />
    		<property name="lkm_memo" column="lkm_memo" />
    		<!-- 配置多对一的关系:放置的是多的一方对象 -->
    		<!-- 
    			name :属性名
    			class : 全路径
    			column : 在多的一方表上外键的名称(表中)
    		 -->
    		 <many-to-one name="customer" class="hibernate_02.po.Customer" column="lkm_cust_id" />
    		<!-- 自动创建表 -->
    		
    	</class>
    
    </hibernate-mapping>
    ```

## Hibernate一对多的只保存一边

```java
	// 只保存一边是否可以
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		Customer customer = new Customer();
		customer.setCust_name("我试试");
		LinkMan linkMan = new LinkMan();
		linkMan.setLkm_name("玩儿");
		customer.getLinkMans().add(linkMan);
		linkMan.setCustomer(customer);
		
		//只保存一边不可以,报一个瞬时对象异常:持久态对象关联了一个瞬时对象
		session.save(customer);
		transaction.commit();
	}
```

## 一对多的级联操作

* 级联是有方向性的

  * 操作一的一方的时候,是否操作到多的一方
  * 操作多的一方的时候,是否操作到一的一方

* 级联保存或更新

  * 当操作的主体是客户的时候需要在客户的配置文件中添加一个参数cascade

  * ```xml
    <set name="linkMans" cascade="save-update">
    ```

  * 当操作的主体是联系人的时候需要在联系人的配置文件中添加一个参数cascade

  * ```xml
    <many-to-one name="customer" class="hibernate_02.po.Customer" column="lkm_cust_id" cascade="save-update" />
    ```

## 