# Hibernate多对多的关系

## 创建表

* 用户表
* 角色表
* 中间表

## 创建实体

- 用户表
- 角色表

因为是多对多的关系，所以在两个表中都放上对方的集合

```java
//用户表
private Long user_id;
	private String user_code;
	private String user_name;
	private String user_password;
	private String user_state;
	//设置多对多的关系:表示一个用户选择多个角色
	//放置Role的实体
	private Set<Role> roles = new HashSet<Role>();
```

````java
//角色表
private Long role_id;
	private String role_name;
	private String role_memo;
	private Set<User> users = new HashSet<User>();
````

## 配置文件

在配置文件中 我们需要用到many-to-many标签

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC 
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
	<class name="hibernate_02.po.User" table="sys_user">
		<!-- 建立OID与主键的映射 -->
		<id name="user_id" column="user_id">
			<generator class="native" />
		</id>
		<property name="user_code" column="user_code" />
		<property name="user_name" column="user_name" />
		<property name="user_password" column="user_password" />
		<property name="user_state" column="user_state" />
		<!-- 
			table:放的是中间表的名称
		
		 -->
		<set name="roles" table="sys_user_role">
		<!-- 
			key
			 column:中间表外键的名称
		 -->
			<key column="user_id" />
			<!-- 
				many-to-many
					class   :对方类的全路径
					column  :对方对象在中间表中外键的名称
			 -->
			<many-to-many class="hibernate_02.po.Role" column="role_id" />
		</set>
	</class>
</hibernate-mapping>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC 
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
	<class name="hibernate_02.po.Role" table="sys_role">
		<!-- 建立OID与主键的映射 -->
		<id name="role_id" column="role_id">
			<generator class="native" />
		</id>
		<property name="role_name" column="role_name" />
		<property name="role_memo" column="role_memo" />
		<set name="users" table="sys_user_role" inverse="true">
			<key column="role_id"  />
			<many-to-many class="hibernate_02.po.User" column="user_id" />
		</set>
	</class>
</hibernate-mapping>
```

## 测试

在测试的时候,使用双向的关系,直接保存的话一定会报出异常,所以我们需要放弃一方的权利,放弃被动的方的权利,因为用户是选择角色,所以我们要放弃角色放的权限,在Role.hbm.xml文件中set标签中添加**inverse="true"**,再来测试.就可以保存成功了

```java
/**
	 * 保存多条记录:有相应的关系
	 */
public void demo01() {
    Session session = HibernateUtils.getCurrentSession();
    Transaction transaction = session.beginTransaction();

    // 创建2个用户
    User user1= new User();
    user1.setUser_name("啊啊");
    User user2 = new User();
    user2.setUser_name("宝宝");
    // 创建三个角色
    Role role1 = new Role();
    role1.setRole_name("变态");
    Role role2 = new Role();
    role2.setRole_name("神经病");
    Role role3 = new Role();
    role3.setRole_name("sb");

    //设置双向关系
    user1.getRoles().add(role1);
    user1.getRoles().add(role3);
    user2.getRoles().add(role1);
    user2.getRoles().add(role3);
    role1.getUsers().add(user1);
    role3.getUsers().add(user2);

    //保存操作
    session.save(user1);
    session.save(user2);
    session.save(role1);
    session.save(role3);

    transaction.commit();
}
```

## 只保存一方是否可行?

## 用户级联角色

* 首先要在用户的配置文件中set标签中添加**cascade="save-update"** 

```java
/**
	 * 保存多条记录:有相应的关系
	 * 只保存一边是否可以?
	 * 保存用户级联角色，修改配置文件
	 */
	public void demo02() {
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();

		// 创建1个用户
		User user1 = new User();
		user1.setUser_name("阿瓦");
		// 创建1个角色
		Role role1 = new Role();
		role1.setRole_name("晚上");

		// 设置双向关系
		user1.getRoles().add(role1);
		role1.getUsers().add(user1);

		// 保存操作
		session.save(user1);

		transaction.commit();
	}
```

## 角色级联用户

* 首先要在角色的配置文件中set标签中添加**cascade="save-update"** ,而且要把放弃权限的标签放到用户的配置文件中去

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC 
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
	<class name="hibernate_02.po.User" table="sys_user">
		<!-- 建立OID与主键的映射 -->
		<id name="user_id" column="user_id">
			<generator class="native" />
		</id>
		<property name="user_code" column="user_code" />
		<property name="user_name" column="user_name" />
		<property name="user_password" column="user_password" />
		<property name="user_state" column="user_state" />
		<!-- 
			table:放的是中间表的名称
		
		 -->
		<set name="roles" table="sys_user_role" cascade="save-update" inverse="true">
		<!-- 
			key
			 column:中间表外键的名称
		 -->
			<key column="user_id" />
			<!-- 
				many-to-many
					class   :对方类的全路径
					column  :对方对象在中间表中外键的名称
			 -->
			<many-to-many class="hibernate_02.po.Role" column="role_id" />
		</set>
	</class>
</hibernate-mapping>
```

## Hibernate多对多删除(基本用不上)

* 首先修改配置文件中cascade=delete
  * 如果是用户级联角色就将inverse=true放入角色的配置文件中去
  * 如果是角色级联用户就将inverse=true放入用户的配置文件中去

```java
	 /***
	  * 级联删除
	  * 删除用户级联角色
	  */
	 public void demo04(){
			Session session = HibernateUtils.getCurrentSession();
			Transaction transaction = session.beginTransaction();
			//查询1号用户
			User user = session.get(User.class, 1l);
			session.delete(user);
			transaction.commit();
		}
	 @Test
	 /***
	  * 级联删除
	  * 删除角色级联用户
	  */
	 public void demo05(){
			Session session = HibernateUtils.getCurrentSession();
			Transaction transaction = session.beginTransaction();
			//查询角色
			Role role = session.get(Role.class, 2l);
			session.delete(role);
			transaction.commit();
		}
```

## Hibernate多对多的其他操作

### 给用户选择角色

* 先查询在添加

```java
public void demo06(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		
		//给1号用户多选2号角色
		//查询一号用户
		User user = session.get(User.class, 1l);
		//查询二号用户
		Role role = session.get(Role.class, 3l);
		//添加
		user.getRoles().add(role);
		
		transaction.commit();
```

### 给用户改选角色

* 你要修改那个角色就先查询那个角色 ,然后从集合中移除,再将新的添加进来

```java
/**
	 * 给用户改选角色
	 */
	public void demo07(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		
		//给2号用户的2号角色改选3号角色
		//查询2号用户
		User user = session.get(User.class, 2l);
		//查询二号角色
		//查询三号角色
		Role role2 = session.get(Role.class, 2l);
		Role role3 = session.get(Role.class, 3l);
		//移除
		user.getRoles().remove(role2);
		//添加
		user.getRoles().add(role3);
		
		transaction.commit();
	}
```

### 给用户删除角色

* 需要删除那个角色,先查询出来,从集合中移除

```java
/**
	 * 给用户删除角色
	 */
	public void demo08(){
		Session session = HibernateUtils.getCurrentSession();
		Transaction transaction = session.beginTransaction();
		
		//给2号用户删除1号角色
		//查询2号用户
		User user = session.get(User.class, 2l);
		//查询一号角色
		Role role = session.get(Role.class, 1l);
		user.getRoles().remove(role);
		transaction.commit();
	}
```

**这些操作的都是中间表中的内容,原表不会发生变化**

**多对多操作的就是集合**