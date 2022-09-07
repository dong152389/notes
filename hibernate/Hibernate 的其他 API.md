# Hibernate 的其他 API

## Query

* Query接口用于就收HQL,查询多个对象
  * HQL:查询语言,与SQL及其相似

```java
//查询全部
public void demo02(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		//通过Session获得Query接口
		String sql = " from Customer";
		Query query = session.createQuery(sql);
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}
		transaction.commit();
	}
```

```java
//模糊查询
public void demo03(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		//通过Session获得Query接口
		String hql = " from Customer where cust_name like ? ";
		Query query = session.createQuery(hql);
		//从0开始
		query.setParameter(0, "晚%");
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer.toString());
		}
		transaction.commit();
	}
```

````java
//分页查询
public void demo04(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		//通过Session获得Query接口
		String hql = " from Customer";
		Query query = session.createQuery(hql);
		//开始条数 从0开始
		query.setFirstResult(2);
		query.setMaxResults(2);
		List<Customer> list = query.list();
		for (Customer customer : list) {
			System.out.println(customer);
		}
		transaction.commit();
	}
````

## Criteria

* 更加面向对象的一种查询

```java
//Cirteria查询全部
	@Test
	public void demo05(){
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

```java
//Cirteria模糊查询
		@Test
		public void demo06(){
			Session session = HibernateUtils.getCurrentSession();
			Transaction transaction = session.beginTransaction();
			Criteria criteria = session.createCriteria(Customer.class);
//			criteria.add(Restrictions.like("cust_name", "晚%"));
			criteria.add(Restrictions.like("cust_name", "啊",MatchMode.END));
			
			List<Customer> list = criteria.list();
			for (Customer customer : list) {
				System.out.println(customer.toString());
			}
			transaction.commit();
		}
```

````java
	//Cirteria分页查询
				@Test
				public void demo07(){
					Session session = HibernateUtils.getCurrentSession();
					Transaction transaction = session.beginTransaction();
					Criteria criteria = session.createCriteria(Customer.class);
					criteria.setFirstResult(0);
					criteria.setMaxResults(2);
					List<Customer> list = criteria.list();
					for (Customer customer : list) {
						System.out.println(customer.toString());
					}
					transaction.commit();
				}
````

## SQLQuery

* 加载sql语句
  * 太复杂的可能要用到 ,一般都使用前两个