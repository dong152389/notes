# 基于 Redis 实现分布式锁

## 演示超卖现象

首先需要将maven依赖添加到项目中

~~~xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
~~~

然后在application文件中配置Redis相关信息，因为我使用的Sentinel。

~~~yaml
mybatis-plus:
  mapper-locations: classpath:mapper/*.xml
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.25.10:3306/lock?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&serverTimezone=Asia/Shanghai
    username: root
    password: 111111
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    time-zone: GMT+8
  redis:
    sentinel:
      master: mymaster
      nodes:
        - 192.168.25.10:26379
        - 192.168.25.10:26380
        - 192.168.25.10:26381
      password: 111111
     # 必须配置Redis的密码，否则会抛出连接Redis失败的异常。
    password: 111111
server:
  port: 8888
~~~

~~~java
@Service
@Slf4j
public class StockServiceImpl extends ServiceImpl<StockMapper, Stock> implements StockService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Override
    public void deduct() {
        String stock = redisTemplate.opsForValue().get("stock");
        if (stock != null && !stock.equals("")) {
            int res = Integer.parseInt(stock);
            if (res > 0) {
                //扣减库存
                redisTemplate.opsForValue().set("stock", String.valueOf(--res));
            }
        }
    }
}
~~~

![image-20230104151507112](./assets/image-20230104151507112.png)

![image-20230104151608721](./assets/image-20230104151608721.png)

可以看到吞吐量非常的高。但是出现了超卖现象。

## 解决方案

可以用上一章所学的乐观锁的方式解决Redis的超卖。

[**Redis 乐观锁**](/redis/Redis%20事务—锁机制.html#乐观锁)

~~~java
@Service
@Slf4j
public class StockServiceImpl extends ServiceImpl<StockMapper, Stock> implements StockService {
    @Autowired
    private StockMapper stockMapper;
    @Autowired
    private StringRedisTemplate redisTemplate;

    @Override
    public void deduct() {
        redisTemplate.execute(new SessionCallback<Object>() {
            //operations 指代的就是RedisTemplate 对象
            public Object execute(RedisOperations operations) throws DataAccessException {
                operations.watch("stock");
                String stock = operations.opsForValue().get("stock").toString();
                if (stock != null && !stock.equals("")) {
                    int res = Integer.parseInt(stock);
                    if (res > 0) {
                        operations.multi();
                        //扣减库存
                        operations.opsForValue().set("stock", String.valueOf(--res));
                        List exec = operations.exec();
                        if (null == exec || 0 == exec.size()) {
                            try {
                                TimeUnit.MILLISECONDS.sleep(50);
                                deduct();
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                        return exec;
                    }
                }
                return null;
            }
        });
    }
}
~~~

![image-20230104162309060](./assets/image-20230104162309060.png)

![image-20230104162453510](./assets/image-20230104162453510.png)

超卖问题得以解决，但是吞吐量下降明显。这种方式**不推荐使用**。

## Redis 分布式锁

### 基本实现

借助于redis中的命令setnx(key, value)，key不存在就新增，存在就什么都不做。同时有多个客户端发送setnx命令，只有一个客户端可以成功，返回1（true）；其他的客户端返回0（false）。

![](./assets/16066261922.png)

1. 多个客户端同时获取锁（setnx）。
2. 获取成功，执行业务逻辑，执行完成释放锁（del）。
3. 其他客户端等待重试。



