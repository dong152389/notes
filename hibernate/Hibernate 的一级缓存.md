# Hibernate的一级缓存

## 什么是缓存

将数据存入到内存中,使用的时候直接从缓存中获取,不用通过存存储源.

## Hibernate的一级缓存

Hibernate框架中提供了优化手段:缓存,抓取策略.Hibernate中提供了二种缓存机制;一级缓存,二级缓存.

HIbernate的一级缓存;称为是Session级别的缓存,一级缓存生命周期与Session一致(是由Seesion中的一些java集合构成的)

一级缓存是自带的不可拆卸的

二级缓存是SessionFactory级别的需要配置

````java
//一级缓存存在
@Test
public void demo02(){
    Session session = HibernateUtils.openSession();
    Transaction transaction = session.beginTransaction();
    Customer customer = session.get(Customer.class, 1l);
    System.out.println(customer);
    Customer customer2 = session.get(Customer.class, 1l);
    System.out.println(customer2);
    System.out.println(customer == customer2);
    transaction.commit();
    session.close();
}
````

## 一级缓存的结构

## 一级缓存中特殊区域:快照区