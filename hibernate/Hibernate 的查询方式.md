# Hibernate的查询方式

## Hibernate提供了5种查询方式

## OID查询

根据对象的OID(主键)进行检索

* get()
* load()

## 对象导航检索

根据一个对象查询到其关联的对象

User user = session.get(User.class,1l);

Customer customer = user.getCustomer();

## HQL检索

HQL查询:Hibernate的查询语言 需要 使用createQuery();来接受HQL语句

## 简单查询

```java
	@Test
	// HQL简单查询
	public void demo02() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		String HQL = "from Customer";
		Query query = session.createQuery(HQL);
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer);
		}

		transaction.commit();
	}
```

## 排序查询

```java
	@Test
	// 排序查询
	public void demo04() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		// 升序
		// String HQL = "from Customer order by cust_id asc";
		// 降序
		String HQL = "from Customer order by cust_id desc";

		Query query = session.createQuery(HQL);
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer);
		}
		transaction.commit();
	}
```

## 条件查询

```java
	@Test
	// 条件查询
	public void demo05() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();

		// 按位置绑定
		/*
		 * String HQL = "from Customer where cust_id = ? and cust_name like ?";
		 * Query query = session.createQuery(HQL); query.setParameter(0, 1l);
		 * query.setParameter(1, "李%"); List<Customer> list = query.list(); for
		 * (Customer customer : list) { System.out.println(customer.toString());
		 * }
		 */
		// 按名称绑定
		String HQL = "from Customer where cust_id = :aaa and cust_name like :bbb";
		Query query = session.createQuery(HQL);
		query.setParameter("aaa", 1l);
		query.setParameter("bbb", "刘%");
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer);
		}

		transaction.commit();
	}

```

## 投影查询

```java
@Test
	// 投影查询
	// 查询对象的某个或者某些属性
	public void demo06() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		/*
		 * String HQL = "select c.cust_name from Customer c"; Query query =
		 * session.createQuery(HQL); //单个属性 List<Object> list = query.list();
		 * for (Object object : list) { System.out.println(object.toString()); }
		 */
		// 多个属性
		/*
		 * String HQL = "select c.cust_name,c.cust_id from Customer c"; Query
		 * query = session.createQuery(HQL); List<Object []> list =
		 * query.list(); for (Object [] object : list) {
		 * System.out.println(Arrays.toString(object)); }
		 */

		// 查询多个属性,封装到属性
		String HQL = "select new Customer(cust_id,cust_name) from Customer";
		Query query = session.createQuery(HQL);
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer);
		}
		transaction.commit();
	}
```

## 分组统计查询

```java
@Test
	// 分组统计查询
	public void demo08() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
//		String HQL = "select count(*) from LinkMan";
//		Query query = session.createQuery(HQL);
//		Long value = (Long) query.uniqueResult();
		String HQL = "select cust_source,count(*) from Customer group by cust_source having count(*) >= 2 ";
		Query query = session.createQuery(HQL);
		List<Object []> list = query.list();
		for (Object [] customer : list) {
			System.out.println(Arrays.toString(customer));
		}
		transaction.commit();
	}
```

## 分页查询

```java
@Test
	// 分页查询
	public void demo07() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		String HQL = "from LinkMan";
		Query query = session.createQuery(HQL);
		query.setFirstResult(0);
		query.setMaxResults(10);
		List<LinkMan> list = query.list();
		for (LinkMan linkMan : list) {
			System.out.println(linkMan.toString());
		}
		transaction.commit();
	}

```

## **SQL的多表查询**

* sql的多表查询

  * 连接查询

    * 交叉连接

      * ```sql
        select * from A ,B
        ```

    * 内连接:inner join (inner可以省略)

      * 隐式内连接
        * select * from a,b where a.cid= b.cid
      * 显示内连接
        * select * from a inner join b on a.cid=b.cid

    * 外连接outter join

      * 左外连接:left outter join
        * 左边的全部 以及公共部分
        * select * from a left outer join b a.aid =b.bid
      * 右外连接:rigiht outter join

        * 右边标的全部以及公共部分

        * select * from a right outer join b a.aid =b.bid

  * 子查询

## HQL的多表查询

* HQL的多表查询

  * 连接查询

    - 交叉连接

    - 内连接:

      - 普通内连接

      ```java
      Session session = HibernateUtils.getCurrentSession();
      		Transaction transaction = session.beginTransaction();
      		//普通内连接
      		String HQL = "from Customer c inner join c.linkMans";
      		Query query = session.createQuery(HQL);
      		List<Object []> list = query.list();
      		for (Object[] objects : list) {
      			System.out.println(Arrays.toString(objects));
      		}
      		transaction.commit();
      	}
      ```

      - 迫切内连接

      ````java
      	@Test
      	public void demo02() {
      		Session session = HibernateUtils.getCurrentSession();
      		Transaction transaction = session.beginTransaction();
      		//迫切内连接
      		//fetch 通知Hibernate将另一个对象的数据 封装到该对象中
      		String HQL = "select distinct  c from  Customer c inner join fetch c.linkMans";
      		Query query = session.createQuery(HQL);
      		List<Customer> list = query.list();
      		for (Customer objects : list) {
      			System.out.println(objects);
      		}
      		transaction.commit();
      	}
      ````

    - 外连接

      - 左外连接:

      ```java
      @Test
      	public void demo04() {
      Session session = HibernateUtils.getCurrentSession();
      		Transaction transaction = session.beginTransaction();
      		//左外连接
      		String HQL = "from  Customer c left outer join  c.linkMans ";
      		Query query = session.createQuery(HQL);
      		List<Object []> list = query.list();
      		for (Object []  objects : list) {
      			System.out.println(Arrays.toString(objects));
      		}
      		transaction.commit();
      	}
      ```

      - 右外连接:

      ```java
      @Test
      	public void demo05() {
      Session session = HibernateUtils.getCurrentSession();
      		Transaction transaction = session.beginTransaction();
      //右外外连接
      		String HQL = "from  Customer c right outer join  c.linkMans ";
      		Query query = session.createQuery(HQL);
      		List<Object []> list = query.list();
      		for (Object []  objects : list) {
      			System.out.println(Arrays.toString(objects));
      		}
      		transaction.commit();
      	}
      ```

      - 迫切左外连接

      ```java
      @Test
      	public void demo03() {
      Session session = HibernateUtils.getCurrentSession();
      		Transaction transaction = session.beginTransaction();
      //迫切左外连接
      		String HQL = "select distinct c from  Customer c left outer join fetch c.linkMans ";
      Query query = session.createQuery(HQL);
      		List<Customer> list = query.list();
      		for (Customer objects : list) {
      			System.out.println(objects);
      		}
      		transaction.commit();
      	}
      ```


## 迫切连接和普通连接的区别是

迫切连接是把数据封装到一个Customer(自定)中

普通连接是把数据封装到一个Object对象中去

## QBC检索

* 简单查询

```java
@Test
	// 简单查询
	public void demo01() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		Criteria criteria = session.createCriteria(Customer.class);
		List<Customer> list = criteria.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}

		transaction.commit();
	}
```

* 排序查询

````java
@Test
	// 排序查询
	public void demo02() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		Criteria criteria = session.createCriteria(Customer.class);
		// 升序
		criteria.addOrder(Order.asc("cust_id"));
		List<Customer> list = criteria.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}

		transaction.commit();
	}

````

* 分页查询

```java
@Test
	// 分页查询
	public void demo03() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		Criteria criteria = session.createCriteria(LinkMan.class);
		criteria.setFirstResult(0);
		criteria.setMaxResults(10);
		List<LinkMan> list = criteria.list();
		for (LinkMan linkMan : list) {
			System.out.println(linkMan.toString());
		}
		transaction.commit();
	}

```

* 条件查询

```java
@Test
	// 条件查询查询
	public void demo04() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		//
		Criteria criteria = session.createCriteria(Customer.class);
		// 设置条件
		/*
		 * = eq <> ne > gt >= ge < lt <= le
		 */
		criteria.add(Restrictions.eq("cust_source", "阿伟"));
		criteria.add(Restrictions.like("cust_name", "王%"));
		List<Customer> list = criteria.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}
		transaction.commit();
	}

```

* 统计查询

```java
@Test
	// 统计查询
	public void demo05() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		Criteria criteria = session.createCriteria(Customer.class);

		/**
		 * add : 普通的条件 where 后面条件 addOrder : 排序 set Projection :聚合函数 和group by
		 * having
		 */
		criteria.setProjection(Projections.rowCount());
		Long count = (Long) criteria.uniqueResult();
		System.out.println(count);
		transaction.commit();
	}
```

* 离线条件查询

```java
	@Test
	// 离线条件查询
	public void demo06() {
		DetachedCriteria detachedCriteria = DetachedCriteria.forClass(Customer.class);
		detachedCriteria.add(Restrictions.like("cust_name", "王%"));
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		//绑定session
		Criteria criteria = detachedCriteria.getExecutableCriteria(session);
		List<Customer> list = criteria.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}
		transaction.commit();
	
	}
```

## SQL检索

Hibernate使用sql语句需要createSQLQuery来接受sql语句

```java
	public void demo01() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		String SQL ="SELECT * FROM cst_customer";
		SQLQuery sqlQuery = session.createSQLQuery(SQL);
		sqlQuery.addEntity(Customer.class);
		List<Customer> list = sqlQuery.list();
		for (Customer customer : list) {
			System.out.println(customer.toString() );
		}
		transaction.commit();
	}
```

