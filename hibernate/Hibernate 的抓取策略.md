# Hibernate的抓取策略(优化)

## 延迟加载:lazy(懒加载)

执行到该行代码的时候不会直接发送sql语句,只有真正使用这个对象的时候才会记载

## 延迟加载的分类

* 类级别的延迟加载

  * 指的是通过load方法查询某个对象的时候,是否采用延时session.load(Customer.class,1l)
  * 通过在`<class>`标签上配置lazy="true",但是这个只能对普通属性有效 ,关联属性不生效
  * 失效
    * lazy="false"
    * 将持久化类使用final修饰
    * Hibernate.initialize();

* 关联级别的延迟加载

  * 指的是在查询到某个对象的时候,查询与其关联的对象,是否采用延迟加载

  ```java
   Customer customer = session.get(Customer.class,1l);
  customer.getLinkMans();
  通过客户获取联系人的时候,联系人对象是否通过延时加载
  ```

  * 抓取策略往往会和关联级别的延迟加载一起使用,优化语句

## 抓取策略

## 抓取策略的概述

通过一个对象抓取到关联对象需要发送sql语句,sql语句如何发,发送成什么样的格式来配置的策略

* 通过`<set>`,`<many-to-one>`上面进行fetch属性进行设置

## set上的fetch和lazy

* fetch:抓取策略:控制sql的格式
  * select:默认值,发送普通的select语句,查询关联对象
  * join:发送一条迫切左外连接查询关联对象
  * subselect:发送一条子查询查询其关联对象
* lazy:延迟加载,控制查询关联对象的时候是否延迟加载
  * true:默认值,查询关联对象的时候,采用延迟加载
  * false:查询关联对象的时候不采用延迟加载
  * extra:极其懒惰
* 在实际的开发中,一般都采用默认值,如果有需求,大多修改fetch

## many-to-one上的fetch和lazy

- fetch:抓取策略:控制sql的格式
  - select:默认值,发送普通的select语句,查询关联对象
  - join:发送一条迫切左外连接查询关联对象
- lazy:延迟加载,控制查询关联对象的时候是否延迟加载
  - proxy:默认值
  - false:查询关联对象不采用延迟
  - no-proxy:(不会使用)

## Hibernate的批量抓取

* 获取客户的时候同时批量抓取联系人
  * 按照通常的方法先查询客户,然后去遍历客户的姓名,再去遍历每个客户的联系人姓名,这样的话会发送5条Sql语句导致性能极低,所以解决这一问题需要在`<set>`标签中配置betch-size = (客户的数量),这样的话只会发送2条Sql语句,优化了Hibernate的性能

```xml
<set name="linkMans" batch-size="4">
```

```java
@Test
	/**
	 * 获取客户的时候同时批量抓取联系人
	 */
	public void demo01() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		
		List<Customer> list = session.createQuery("from Customer").list();
		for (Customer customer : list) {
			System.out.println(customer.getCust_name());
			for (LinkMan linkMan : customer.getLinkMans()) {
				System.out.println(linkMan.getLkm_name());
			}
		}
		transaction.commit();
	}
```

* 获取联系人的时候同时批量抓取客户
  * 同样的方法但是在配置文件中 many-to-one没有betch-size这个属性,所以我们还需要在Customer配置文件中配置,在class标签内配置betch-size属性

```xml
<class name="com.dfd.hibernate.domain.Customer" batch-size="3" table="cst_customer">
```

```java
	@Test
	/**
	 * 获取联系人的时候批量获取客户
	 * 还得在客户这边配置
	 */
	public void demo02() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		
		List<LinkMan> list = session.createQuery("from LinkMan").list();
		for (LinkMan linkMan : list) {
			System.out.println(linkMan.getLkm_name());
			System.out.println(linkMan.getCustomer().getCust_name());
		}
		transaction.commit();
	}
```

