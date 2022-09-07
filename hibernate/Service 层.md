# Service 层

## Hibernate解决service的事务管理

```java
public static Session getCurrentSession(){
    return sf.getCurrentSession();	
}
```

```java
public void demo01(){
    Session session = HibernateUtils.getCurrentSession();
    Transaction transaction = session.beginTransaction();
    Customer customer = new Customer();
    customer.setCust_name("爱爱丸");
    session.saveOrUpdate(customer);

    transaction.commit();
}
```
