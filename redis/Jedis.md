# Jedis

## Jedis所需要的jar包

~~~xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>3.2.0</version>
</dependency>
~~~

## 连接 Redis 注意事项

禁用Linux的防火墙：Linux(CentOS7)里执行命令

**systemctl stop/disable firewalld.service**  

redis.conf中注释掉`bind 127.0.0.1` ，然后 `protected-mode no`

## Jedis 常用操作

### 创建测试程序

~~~java
package com.redis;

import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Demo01 {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("192.168.25.100", 6379);
        String pong = jedis.ping();
        System.out.println("连接成功：" + pong);
        jedis.close();
    }
}
~~~

### 测试相关数据类型

~~~java
package com.redis;

import redis.clients.jedis.Jedis;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Demo01 {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("192.168.25.100", 6379);
        String pong = jedis.ping();
        System.out.println("连接成功：" + pong);
        //Key
        jedis.set("k1", "v1");
        jedis.set("k2", "v2");
        jedis.set("k3", "v3");
        Set<String> keys = jedis.keys("*");
        System.out.println(keys.size());
        for (String key : keys) {
            System.out.println(key);
        }
        System.out.println(jedis.exists("k1"));
        System.out.println(jedis.ttl("k1"));
        System.out.println(jedis.get("k1"));
        //String
        jedis.mset("str1", "v1", "str2", "v2", "str3", "v3");
        System.out.println(jedis.mget("str1", "str2", "str3"));
        //List
        List<String> list = jedis.lrange("mylist", 0, -1);
        for (String element : list) {
            System.out.println(element);
        }
        //Set
        jedis.sadd("orders", "order01");
        jedis.sadd("orders", "order02");
        jedis.sadd("orders", "order03");
        jedis.sadd("orders", "order04");
        Set<String> smembers = jedis.smembers("orders");
        for (String order : smembers) {
            System.out.println(order);
        }
        jedis.srem("orders", "order02");
        //hash
        jedis.hset("hash1", "userName", "lisi");
        System.out.println(jedis.hget("hash1", "userName"));
        Map<String, String> map = new HashMap<String, String>();
        map.put("telphone", "13810169999");
        map.put("address", "atguigu");
        map.put("email", "abc@163.com");
        jedis.hmset("hash2", map);
        List<String> result = jedis.hmget("hash2", "telphone", "email");
        for (String element : result) {
            System.out.println(element);
        }

        jedis.close();
    }
}

~~~

## 实战

### 完成一个手机验证码功能

要求：

1、输入手机号，点击发送后随机生成6位数字码，2分钟有效

2、输入验证码，点击验证，返回成功或失败

3、每个手机号每天只能输入3次

![image-20221109104429480](./assets/image-20221109104429480.png)

~~~java
package com.redis;

import redis.clients.jedis.Jedis;

import java.util.Random;

public class SmsCode {
    public static void main(String[] args) {
        //模拟短信发送
//        sendMessage("22222");
        //验证码校验
        verifyCode("22222", "136710");
    }

    /**
     * 验证码校验
     * @param phoneNumber 手机号
     * @param code        验证码
     */
    private static void verifyCode(String phoneNumber, String code) {
        //从redis获取验证码
        //连接Redis
        Jedis jedis = new Jedis("192.168.25.100", 6379);
        //验证码key
        String codeKey = "sendMessage:" + phoneNumber + ":code";
        String redisCode = jedis.get(codeKey);
        //判断
        if (redisCode.equals(code)) {
            System.out.println("成功");
        } else {
            System.out.println("失败");
        }
        jedis.close();
    }

    /**
     * 发送短信
     * @param phoneNumber 手机号
     */
    private static void sendMessage(String phoneNumber) {
        //连接Redis
        Jedis jedis = new Jedis("192.168.25.100", 6379);
        //拼接key
        //手机发送次数key
        String countKey = "sendMessage:" + phoneNumber + ":count";
        //验证码key
        String codeKey = "sendMessage:" + phoneNumber + ":code";
        //每个手机号每天只能发送3次
        String count = jedis.get(countKey);
        if (null == count) {
            //一次也没有发过
            jedis.setex(countKey, 24 * 60 * 60, "1");
        } else if (Integer.parseInt(count) <= 2) {
            //发送次数+1
            jedis.incr(countKey);
        } else {
            //发送三次，不能再发送
            System.out.println("今天发送次数已经超过三次");
            jedis.close();
        }
        //生成验证码
        String code = getCode();
        jedis.setex(codeKey, 2 * 60, code);
        jedis.close();
    }

    //1 生成6位数字验证码
    public static String getCode() {
        Random random = new Random();
        StringBuilder code = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            int rand = random.nextInt(10);
            code.append(rand);
        }
        return code.toString();
    }
}
~~~

