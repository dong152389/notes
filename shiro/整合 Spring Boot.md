# 整合 Spring Boot

## 框架整合

**1、创建项目**

**2、添加依赖**

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.13.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>springboot-shiro</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>springboot-shiro</name>
    <description>springboot-shiro</description>
    <properties>
        <java.version>8</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.apache.shiro</groupId>
            <artifactId>shiro-spring-boot-web-starter</artifactId>
            <version>1.10.1</version>
        </dependency>

        <!--mybatis-plus-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.2</version>
        </dependency>
        <!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.30</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
~~~

**3、添加配置文件**

添加配置文件 application.yml，添加基础配置。

~~~yaml
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  mapper-locations: classpath:mapper/*.xml
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.25.10:3306/shirodb?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowMultiQueries=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=Asia/Shanghai&nullCatalogMeansCurrent=true&allowPublicKeyRetrieval=true
    username: root
    password: 111111
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    time-zone: GMT+8
  thymeleaf:
    cache: false
shiro:
  loginUrl: /login
server:
  port: 8888
~~~

**4、添加启动类**

~~~java
@SpringBootApplication
public class SpringbootShiroApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringbootShiroApplication.class, args);
    }
}
~~~

## 登录认证实现

访问数据库获取用户信息，实现登录认证。

### 创建表结构

~~~sql
CREATE DATABASE IF NOT EXISTS `shirodb` CHARACTER SET utf8mb4;
USE `shirodb`;
CREATE TABLE `user` (
     `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
     `name` VARCHAR(30) DEFAULT NULL COMMENT '用户名',
     `pwd` VARCHAR(50) DEFAULT NULL COMMENT '密码',
     `rid` BIGINT(20) DEFAULT NULL COMMENT '角色编号',
 PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

INSERT INTO `shirodb`.`user`(`id`, `name`, `pwd`, `rid`) VALUES (2, 'dfd', '3a68179043820325eb69b21597630d04cb87aa1859054fa35fb51e2ed4300b23', NULL);
~~~

### 创建相关的类

（1）创建实体类

~~~java
/**
 * 用户表
 */
@TableName(value = "`user`")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    public static final String COL_ID = "id";
    public static final String COL_NAME = "name";
    public static final String COL_PWD = "pwd";
    public static final String COL_RID = "rid";
    /**
     * 编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    /**
     * 用户名
     */
    @TableField(value = "`name`")
    private String name;
    /**
     * 密码
     */
    @TableField(value = "pwd")
    private String pwd;
    /**
     * 角色编号
     */
    @TableField(value = "rid")
    private Long rid;
}
~~~

（2）创建Mapper

~~~java
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
~~~

（3）创建Service

~~~java
public interface UserService extends IService<User>{
    public User getUserByName(String name);
}

//impl
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Autowired
    private UserMapper userMapper;

    /**
     * 根据用户名查询用户信息
     * @param name  用户名
     * @return  {@link User}
     */
    @Override
    public User getUserByName(String name) {
        User user = userMapper.selectOne(new QueryWrapper<User>().eq(User.COL_NAME, name));
        return user;
    }
}

~~~

（4）自定义Realm

~~~java
/**
 * 自定义登录认证
 */
@Component
public class CustomRealm extends AuthorizingRealm {
    @Autowired
    private UserService userService;

    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        return null;
    }

    //认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        //1 获取身份信息
        String principal = token.getPrincipal().toString();
        User user = userService.getUserByName(principal);
        if (null != user) {
            //判断密码是否正确
            return new SimpleAuthenticationInfo(principal, user.getPwd(),
                    ByteSource.Util.bytes("salt"), getName());
        }
        return null;
    }
}
~~~

（5）编写配置类

~~~java
@Configuration
public class ShiroConfig {
    @Autowired
    private CustomRealm customRealm;

    @Bean
    public DefaultShiroFilterChainDefinition shiroFilterChainDefinition() {
        DefaultShiroFilterChainDefinition chainDefinition = new DefaultShiroFilterChainDefinition();
        //设置不认证可以访问的资源
        chainDefinition.addPathDefinition("/user/login", "anon");
        chainDefinition.addPathDefinition("/login", "anon");
        //设置需要进行登录认证的拦截范围
        chainDefinition.addPathDefinition("/**", "authc");
        return chainDefinition;
    }

    @Bean
    public DefaultWebSecurityManager webSecurityManager() {
        //1 创建 defaultWebSecurityManager 对象
        DefaultWebSecurityManager defaultWebSecurityManager = new DefaultWebSecurityManager();
        //2 创建认证对象，并设置认证策略
        ModularRealmAuthenticator modularRealmAuthenticator = new ModularRealmAuthenticator();
        modularRealmAuthenticator.setAuthenticationStrategy(new AllSuccessfulStrategy());
        //2 创建加密对象，并设置相关属性
        HashedCredentialsMatcher matcher = new HashedCredentialsMatcher();
        //2.1 采用 md5 加密
        matcher.setHashAlgorithmName(Sha256Hash.ALGORITHM_NAME);
        //2.2 迭代加密次数
        matcher.setHashIterations(3);
        //3 将加密对象存储到 myRealm 中
        customRealm.setCredentialsMatcher(matcher);
        //4 将 myRealm 存入 defaultWebSecurityManager 对象
        defaultWebSecurityManager.setRealm(customRealm);
        //5 返回
        return defaultWebSecurityManager;
    }

    @Bean
    public AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor() {
        AuthorizationAttributeSourceAdvisor sourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        sourceAdvisor.setSecurityManager(webSecurityManager());
        return sourceAdvisor;
    }
}
~~~

（6）编写Controller

~~~java
@Controller
@RequestMapping("user")
public class UserController {

    @PostMapping("login")
    @ResponseBody
    public String userLogin(@RequestParam("username") String username, @RequestParam("password") String password) {
        //1 获取 Subject 对象
        Subject subject = SecurityUtils.getSubject();
        //2 封装请求数据到 token 对象中
        AuthenticationToken token = new UsernamePasswordToken(name, pwd);
        //3 调用 login 方法进行登录认证
        try
        {
            subject.login(token);
            return "登录成功";
        } catch(AuthenticationException e)
        {
            e.printStackTrace();
            System.out.println("登录失败");
            return "登录失败";
        }
    }
}
~~~

（7） 测试

~~~
http://localhost:8888/user/login?username=dfd&password=dfd
~~~

### 整合前端页面

（1）添加页面login.html

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shiro 登录认证</title>
</head>
<body>
<h1>Shiro 登录认证</h1>
<br>
<form action="/user/login" method="post">
    <div>用户名：<input name="username" type="text" value=""></div>
    <div>密码：<input name="password" type="password" value=""></div>
    <div><input type="submit" value="登录"></div>
</form>
</body>
</html>
~~~

（2）添加页面main.html

~~~html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Shiro 登录认证后主页面</title>
</head>
<body>
<h1>Shiro 登录认证后主页面</h1>
<br>
登录用户为：<span th:text="${session.user}"></span>
</body>
~~~

（3）添加 Controller 方法，改造认证方法

~~~java
@Controller
public class IndexLogin {
    //跳转登录页面
    @GetMapping("login")
    public String login() {
        return "login";
    }
}
~~~

~~~java
@Controller
@RequestMapping("user")
public class UserController {

    @PostMapping("login")
    public String userLogin(@RequestParam("username") String username, @RequestParam("password") String password, HttpSession session) {
        //1 获取 Subject 对象
        Subject subject = SecurityUtils.getSubject();
        //2 封装请求数据到 token 对象中
        AuthenticationToken token = new UsernamePasswordToken(username, password);
        //3 调用 login 方法进行登录认证
        try {
            subject.login(token);
            session.setAttribute("user", token.getPrincipal().toString());
            return "main";
        } catch (AuthenticationException e) {
            e.printStackTrace();
            session.setAttribute("fail", e.getMessage());
            return "fail";
        }
    }
}
~~~

（4）启动，访问测试

![image-20221219145424370](C:\Users\Fengdong.Duan\Desktop\my-notes\shiro\assets\image-20221219145424370.png)

![image-20221219145553217](C:\Users\Fengdong.Duan\Desktop\my-notes\shiro\assets\image-20221219145553217.png)

## 多个 Realm 的认证策略设置

### 多个 Realm 实现原理

​		当应用程序配置多个 Realm 时，例如：用户名密码校验、手机号验证码校验等等。 Shiro 的 ModularRealmAuthenticator 会使用内部的 AuthenticationStrategy 组件判断认 证是成功还是失败。

​		AuthenticationStrategy 是一个无状态的组件，它在身份验证尝试中被询问 4 次（这 4 次交互所需的任何必要的状态将被作为方法数）：

1. 在所有 Realm 被调用之前。
2. 在调用 Realm 的 getAuthenticationInfo 方法之前。
3. 在调用 Realm 的 getAuthenticationInfo 方法之后。
4. 在所有 Realm 被调用之后。

认证策略的另外一项工作就是聚合所有 Realm 的结果信息封装至一个 AuthenticationInfo 实例中，并将此信息返回，以此作为 Subject 的身份信息。

Shiro 中定义了 3 种认证策略的实现：

| AuthenticationStrategy class | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| AtLeastOneSuccessfulStrategy | 只要有一个（或更多）的 Realm 验证成功，那么认证将视为成功    |
| FirstSuccessfulStrategy      | 第一个 Realm 验证成功，整体认证将视为成功，且后续 Realm 将被忽略 |
| AllSuccessfulStrategy        | 所有 Realm 成功，认证才视为成功                              |

ModularRealmAuthenticator 内置的认证策略默认实现是 AtLeastOneSuccessfulStrategy 方式。可以通过配置修改策略

### 多个 Realm 代码实现

复制一份相同的 Realm，命名为 CustomRealm2。修改ShiroConfig

~~~java
@Configuration
public class ShiroConfig {
    @Autowired
    private CustomRealm customRealm;
    @Autowired
    private CustomRealm2 customRealm2;

    @Bean
    public DefaultShiroFilterChainDefinition shiroFilterChainDefinition() {
        DefaultShiroFilterChainDefinition chainDefinition = new DefaultShiroFilterChainDefinition();
        //设置不认证可以访问的资源
        chainDefinition.addPathDefinition("/user/login", "anon");
        chainDefinition.addPathDefinition("/login", "anon");
        //设置需要进行登录认证的拦截范围
        chainDefinition.addPathDefinition("/**", "authc");
        return chainDefinition;
    }

    @Bean
    public DefaultWebSecurityManager webSecurityManager() {
        //1 创建 defaultWebSecurityManager 对象
        DefaultWebSecurityManager defaultWebSecurityManager = new DefaultWebSecurityManager();
        //2 创建认证对象，并设置认证策略
        ModularRealmAuthenticator modularRealmAuthenticator = new ModularRealmAuthenticator();
        modularRealmAuthenticator.setAuthenticationStrategy(new AllSuccessfulStrategy());
        //2 创建加密对象，并设置相关属性
        HashedCredentialsMatcher matcher = new HashedCredentialsMatcher();
        //2.1 采用 md5 加密
        matcher.setHashAlgorithmName(Sha256Hash.ALGORITHM_NAME);
        //2.2 迭代加密次数
        matcher.setHashIterations(3);
        //3 将加密对象存储到 myRealm 中
        customRealm.setCredentialsMatcher(matcher);
        //4 将 myRealms 存入 defaultWebSecurityManager 对象
        defaultWebSecurityManager.setRealms(Arrays.asList(customRealm2, customRealm));
        //5 返回
        return defaultWebSecurityManager;
    }

    @Bean
    public AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor() {
        AuthorizationAttributeSourceAdvisor sourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        sourceAdvisor.setSecurityManager(webSecurityManager());
        return sourceAdvisor;
    }

}
~~~

## Remember Me 功能 

Shiro 提供了记住我（RememberMe）的功能，比如访问一些网站时，关闭了浏览器，下次再打开时还是能记住你是谁，下次访问时无需再登录即可访问。

**1、基本流程**

1. 首先在登录页面选中 RememberMe 然后登录成功；如果是浏览器登录，一般会 把 RememberMe 的 Cookie 写到客户端并保存下来
2. 关闭浏览器再重新打开；会发现浏览器还是记住你的。
3. 访问一般的网页服务器端，仍然知道你是谁，且能正常访问。
4. 但是，如果我们访问电商平台时，如果要查看我的订单或进行支付时，此时还 是需要再进行身份认证的，以确保当前用户还是你。