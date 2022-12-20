# 整合 Thymeleaf

## 添加依赖

~~~xml
<dependency>
    <groupId>com.github.theborakompanioni</groupId>
    <artifactId>thymeleaf-extras-shiro</artifactId>
    <version>2.1.0</version>
</dependency>
~~~

## 修改配置类

~~~java
//用于解析 thymeleaf 中的 shiro:相关属性
@Bean
public ShiroDialect shiroDialect(){
 return new ShiroDialect();
}
~~~

## 常用属性

~~~html
<!-- guest 标签 -->
<shiro:guest>
</shiro:guest>
<!-- 用户没有身份验证时显示相应信息，即游客访问信息 -->

<!-- user 标签 -->
<shiro:user>
</shiro:user>
<!-- 用户已经身份验证/记住我登录后显示相应的信息 -->

<!-- authenticated 标签 -->
<shiro:authenticated>
</shiro:authenticated>
<!-- 用户已经身份验证通过，即 Subject.login 登录成功，不是记住我登录的 -->

<!-- notAuthenticated 标签 -->
<shiro:notAuthenticated>
</shiro:notAuthenticated>
<!-- 用户已经身份验证通过，即没有调用 Subject.login 进行登录，包括记住我自动登录的也属于未进行身份验证 -->

principal 标签
<shiro: principal/>
<shiro:principal property="username"/>
相当于((User)Subject.getPrincipals()).getUsername()。
lacksPermission 标签
<shiro:lacksPermission name="org:create">
</shiro:lacksPermission>
如果当前 Subject 没有权限将显示 body 体内容。
hasRole 标签
<shiro:hasRole name="admin">
</shiro:hasRole>
如果当前 Subject 有角色将显示 body 体内容。
hasAnyRoles 标签
<shiro:hasAnyRoles name="admin,user">
</shiro:hasAnyRoles>
如果当前 Subject 有任意一个角色（或的关系）将显示 body 体内容。
lacksRole 标签
<shiro:lacksRole name="abc">
</shiro:lacksRole>
如果当前 Subject 没有角色将显示 body 体内容。
hasPermission 标签
<shiro:hasPermission name="user:create">
</shiro:hasPermission>
如果当前 Subject 有权限将显示 body 体内容
~~~

