# 基于 Zookeeper 实现分布式锁

实现分布式锁目前有三种流行方案，分别为基于数据库、Redis、Zookeeper的方案。这里主要介绍基于zk怎么实现分布式锁。在实现分布式锁之前，先回顾zookeeper的相关知识点

![image-20220622191952608](./assets/image-20220622191952608.png)

## 基础知识

### 安装

#### 本地安装

把zk安装包上传到/opt目录下，并切换到/opt目录下，执行以下指令

```shell
# 解压
tar -zxvf zookeeper-3.7.0-bin.tar.gz
# 重命名
mv apache-zookeeper-3.7.0-bin/ zookeeper
# 打开zookeeper根目录
cd /opt/zookeeper
# 创建一个数据目录，备用
mkdir data
# 打开zk的配置目录
cd /opt/zookeeper/conf
# copy配置文件，zk启动时会加载zoo.cfg文件
cp zoo_sample.cfg zoo.cfg
# 编辑配置文件
vim zoo.cfg
# 修改dataDir参数为之前创建的数据目录：/opt/zookeeper/data
# 切换到bin目录
cd /opt/zookeeper/bin
# 启动 
./zkServer.sh start
./zkServer.sh status # 查看启动状态
./zkServer.sh stop # 停止
./zkServer.sh restart # 重启
./zkCli.sh # 查看zk客户端
```

如下，说明启动成功：

![image-20220501175644704](./assets/image-20220501175644704.png)



#### Docker安装（集群安装）

leader 节点由选举产生。

~~~yaml
# docker-compose.yml
networks:
  zookeeper-net:
    name: zookeeper-net
    driver: bridge

version: '3'
services:
    zoo1:
        image: zookeeper:3.6.3
        container_name: zookeeper-1
        restart: "no"
        ports:
            - 2181:2181
            - 8080:8080
        volumes:
            - "./zookeeper/zookeeper-1/data:/data"
            - "./zookeeper/zookeeper-1/datalog:/datalog"
            - "./zookeeper/zookeeper-1/logs:/logs"
            - "./zookeeper/zookeeper-1/conf:/conf"
        environment:
            ZOO_MY_ID: 1
            ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
        networks:
            - zookeeper-net
    zoo2:
        image: zookeeper:3.6.3
        container_name: zookeeper-2
        restart: "no"
        ports:
            - 2182:2181
            - 8081:8080
        volumes:
        - "./zookeeper/zookeeper-2/data:/data"
        - "./zookeeper/zookeeper-2/datalog:/datalog"
        - "./zookeeper/zookeeper-2/logs:/logs"
        - "./zookeeper/zookeeper-2/conf:/conf"
        environment:
            ZOO_MY_ID: 2
            ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
        networks:
            - zookeeper-net
    zoo3:
        image: zookeeper:3.6.3
        container_name: zookeeper-3
        restart: "no"
        ports:
            - 2183:2181
            - 8082:8080            
        volumes:
        - "./zookeeper/zookeeper-3/data:/data"
        - "./zookeeper/zookeeper-3/datalog:/datalog"
        - "./zookeeper/zookeeper-3/logs:/logs"
        - "./zookeeper/zookeeper-3/conf:/conf"        
        environment:
            ZOO_MY_ID: 3
            ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
        networks:
            - zookeeper-net
~~~

> <font color="red">每个zookeeper的conf文件夹下都需要放</font>

~~~properties
# log4j.properties
zookeeper.root.logger=INFO, CONSOLE

zookeeper.console.threshold=INFO

zookeeper.log.dir=/logs
zookeeper.log.file=zookeeper.log
zookeeper.log.threshold=INFO
zookeeper.log.maxfilesize=256MB
zookeeper.log.maxbackupindex=20

zookeeper.tracelog.dir=${zookeeper.log.dir}
zookeeper.tracelog.file=zookeeper_trace.log

log4j.rootLogger=${zookeeper.root.logger}

#
# console
# Add "console" to rootlogger above if you want to use this 
#
log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
log4j.appender.CONSOLE.Threshold=${zookeeper.console.threshold}
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
log4j.appender.CONSOLE.layout.ConversionPattern=%d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L] - %m%n

#
# Add ROLLINGFILE to rootLogger to get log file output
#
log4j.appender.ROLLINGFILE=org.apache.log4j.RollingFileAppender
log4j.appender.ROLLINGFILE.Threshold=${zookeeper.log.threshold}
log4j.appender.ROLLINGFILE.File=${zookeeper.log.dir}/${zookeeper.log.file}
log4j.appender.ROLLINGFILE.MaxFileSize=${zookeeper.log.maxfilesize}
log4j.appender.ROLLINGFILE.MaxBackupIndex=${zookeeper.log.maxbackupindex}
log4j.appender.ROLLINGFILE.layout=org.apache.log4j.PatternLayout
log4j.appender.ROLLINGFILE.layout.ConversionPattern=%d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L] - %m%n

#
# Add TRACEFILE to rootLogger to get log file output
#    Log TRACE level and above messages to a log file
#
log4j.appender.TRACEFILE=org.apache.log4j.FileAppender
log4j.appender.TRACEFILE.Threshold=TRACE
log4j.appender.TRACEFILE.File=${zookeeper.tracelog.dir}/${zookeeper.tracelog.file}

log4j.appender.TRACEFILE.layout=org.apache.log4j.PatternLayout
### Notice we are including log4j's NDC here (%x)
log4j.appender.TRACEFILE.layout.ConversionPattern=%d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L][%x] - %m%n
#
# zk audit logging
#
zookeeper.auditlog.file=zookeeper_audit.log
zookeeper.auditlog.threshold=INFO
audit.logger=INFO, RFAAUDIT
log4j.logger.org.apache.zookeeper.audit.Log4jAuditLogger=${audit.logger}
log4j.additivity.org.apache.zookeeper.audit.Log4jAuditLogger=false
log4j.appender.RFAAUDIT=org.apache.log4j.RollingFileAppender
log4j.appender.RFAAUDIT.File=${zookeeper.log.dir}/${zookeeper.auditlog.file}
log4j.appender.RFAAUDIT.layout=org.apache.log4j.PatternLayout
log4j.appender.RFAAUDIT.layout.ConversionPattern=%d{ISO8601} %p %c{2}: %m%n
log4j.appender.RFAAUDIT.Threshold=${zookeeper.auditlog.threshold}

# Max log file size of 10MB
log4j.appender.RFAAUDIT.MaxFileSize=10MB
log4j.appender.RFAAUDIT.MaxBackupIndex=10
~~~

~~~properties
# zoo.cfg
clientPort=2181
dataDir=/data
dataLogDir=/datalog
tickTime=2000
initLimit=5
syncLimit=2
autopurge.snapRetainCount=3
autopurge.purgeInterval=0
maxClientCnxns=60
standaloneEnabled=true
admin.enableServer=true
#和下面的docker-compose 创建的docker container实例对应
server.1=zoo1:2888:3888
server.2=zoo2:2888:3888
server.3=zoo3:2888:3888
~~~

### 相关命令

Zookeeper提供一个多层级的节点命名空间（节点称为znode），每个节点都用一个以斜杠（/）分隔的路径表示，而且每个节点都有父节点（根节点除外），非常类似于文件系统。并且每个节点都是唯一的。

znode节点有四种类型：

- **PERSISTENT**：永久节点。客户端与zookeeper断开连接后，该节点依旧存在
- **EPHEMERAL**：临时节点。客户端与zookeeper断开连接后，该节点被删除
- **PERSISTENT_SEQUENTIAL**：永久节点、序列化。客户端与zookeeper断开连接后，该节点依旧存在，只是Zookeeper给该节点名称进行顺序编号
- **EPHEMERAL_SEQUENTIAL**：临时节点、序列化。客户端与zookeeper断开连接后，该节点被删除，只是Zookeeper给该节点名称进行顺序编号

创建这四种节点：

```shell
[zk: localhost:2181(CONNECTED) 0] create /aa test  # 创建持久化节点
Created /aa
[zk: localhost:2181(CONNECTED) 1] create -s /bb test  # 创建持久序列化节点
Created /bb0000000001
[zk: localhost:2181(CONNECTED) 2] create -e /cc test  # 创建临时节点
Created /cc
[zk: localhost:2181(CONNECTED) 3] create -e -s /dd test  # 创建临时序列化节点
Created /dd0000000003
[zk: localhost:2181(CONNECTED) 4] ls /   # 查看某个节点下的子节点
[aa, bb0000000001, cc, dd0000000003, zookeeper]
[zk: localhost:2181(CONNECTED) 5] stat /  # 查看某个节点的状态
cZxid = 0x0
ctime = Thu Jan 01 08:00:00 CST 1970
mZxid = 0x0
mtime = Thu Jan 01 08:00:00 CST 1970
pZxid = 0x5
cversion = 3
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 0
numChildren = 5
[zk: localhost:2181(CONNECTED) 6] get /aa  # 查看某个节点的内容
test
[zk: localhost:2181(CONNECTED) 11] delete /aa  # 删除某个节点
[zk: localhost:2181(CONNECTED) 7] ls /  # 再次查看
[bb0000000001, cc, dd0000000003, zookeeper]
```

事件监听：在读取数据时，我们可以同时对节点设置事件监听，当节点数据或结构变化时，zookeeper会通知客户端。当前zookeeper针对节点的监听有如下四种事件：

1. 节点创建：stat -w /xx

   当/xx节点创建时：NodeCreated

2. 节点删除：stat -w /xx

   当/xx节点删除时：NodeDeleted

3. 节点数据修改：get -w /xx

   当/xx节点数据发生变化时：NodeDataChanged

4. 子节点变更：ls -w /xx

   当/xx节点的子节点创建或者删除时：NodeChildChanged

### Java 客户端

#### 依赖

ZooKeeper 的 java 客户端有：原生客户端、ZkClient、Curator框架（类似于redisson，有很多功能性封装）。依赖分别是：

~~~xml
<!-- zookeeper 官方客户端-->
<dependency>
    <groupId>org.apache.zookeeper</groupId>
    <artifactId>zookeeper</artifactId>
    <version>3.8.1</version>
</dependency>
<!-- zkClient 客户端-->
<dependency>
    <groupId>com.101tec</groupId>
    <artifactId>zkclient</artifactId>
    <version>0.11</version>
</dependency>
<!-- Curator 客户端 -->
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-recipes</artifactId>
    <version>5.4.0</version>
</dependency>
~~~

#### 基础 API

~~~java
public class ZkTest {
    /**
     * zookeeper集群多个服务器之间用逗号隔开
     */
    private static String connectString = "192.168.25.10:2181,192.168.25.10:2182,192.168.25.10:2183";
    /**
     * 会话超时时间,不要设置太小
     * 如果此值小于zookeeper的创建时间则当zookeeper还未来得及创建连接,会话时间已到
     * 则抛出异常:org.apache.zookeeper.KeeperException$ConnectionLossException: KeeperErrorCode = ConnectionLoss for /znode2
     * 注意关闭防火墙
     */
    private static int sessionTimeout = 170000;

    public static void main(String[] args) throws KeeperException, InterruptedException {

        CountDownLatch countDownLatch = new CountDownLatch(1);
        // 获取zookeeper链接
        ZooKeeper zooKeeper = null;
        try {
            zooKeeper = new ZooKeeper(connectString, sessionTimeout, event -> {
                // 需要以下判断，否则监听内容变动的时候也会被当前创建连接的监听器捕获
                if (Watcher.Event.KeeperState.SyncConnected.equals(event.getState())
                        && Watcher.Event.EventType.None.equals(event.getType())) {
                    // 获取链接成功。。。。。。WatchedEvent state:SyncConnected type:None path:null
                    System.out.println("获取链接成功。。。。。。" + event);
                    countDownLatch.countDown();
                }
            });

            countDownLatch.await();
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 判断节点是否存在
        Stat stat = zooKeeper.exists("/test", true);
        if (stat != null) {
            System.out.println("当前节点存在！" + stat.getVersion());
        } else {
            System.out.println("当前节点不存在！开始创建节点");
            /**
             *形参:
             *  path – 节点的路径
             *  data – 节点内容
             *  acl – 节点的访问权限
             *        OPEN_ACL_UNSAFE：任何人可以操作该节点
             *        CREATOR_ALL_ACL：创建者拥有所有访问权限
             *        READ_ACL_UNSAFE: 任何人都可以读取该节点
             *  createMode – 节点类型：指定要创建的节点是临时的还是顺序的
             */
            zooKeeper.create("/test", "烧杯".getBytes(), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
            System.out.println("节点创建成功。");
        }
        byte[] data = zooKeeper.getData("/test", false, stat);
        System.out.println("当前节点的内容：" + new String(data));

        // 获取当前节点下的子节点
        List<String> children = zooKeeper.getChildren("/test", false);
        System.out.println(children);

        // 更新当前节点
        // 参数3：如果存在此类节点并且给定版本与节点的版本匹配，则为给定路径的节点设置数据（如果给定版本为 -1，则它与任何节点的版本匹配）。
        stat = zooKeeper.setData("/test", "大烧杯".getBytes(), stat.getVersion());

        // 删除节点,存在数据的不能删除
        zooKeeper.delete("/test", stat.getVersion());

        // 监听
        //最后关闭链接
        zooKeeper.close();
    }
}
~~~

## 实现思路

* 分布式锁的步骤：
  * 获取锁：create一个节点
  * 删除锁：delete一个节点
  * 重试：没有获取到锁的请求重试

* 参照redis分布式锁的特点：
  * 互斥 排他
  * 防死锁：
    * 可自动释放锁（临时节点） ：获得锁之后客户端所在机器宕机了，客户端没有主动删除子节点；如果创建的是永久的节点，那么这个锁永远不会释放，导致死锁；由于创建的是临时节点，客户端宕机后，过了一定时间zookeeper没有收到客户端的心跳包判断会话失效，将临时节点删除从而释放锁。
    * 可重入锁：借助于ThreadLocal
  * 防误删：宕机自动释放临时节点，不需要设置过期时间，也就不存在误删问题。
  * 加锁/解锁要具备原子性
  * 单点问题：使用Zookeeper可以有效的解决单点问题，ZK一般是集群部署的。
  * 集群问题：zookeeper集群是强一致性的，只要集群中有半数以上的机器存活，就可以对外提供服务。

### 代码实现

~~~java
/**
     * Zookeeper 分布式锁
     * @param key       锁名称
     * @param expire    过期时间
     * @param unit      时间单位
     * @return
     */
public DistributedZookeeperLock getZookeeperLock(String key, long expire, TimeUnit unit) {
    return new DistributedZookeeperLock(ZkClientConfig.zooKeeper, key, expire, unit);
}

/**
     * Zookeeper 分布式锁
     * @param key       锁名称
     * @return
     */
public DistributedZookeeperLock getZookeeperLock(String key) {
    return new DistributedZookeeperLock(ZkClientConfig.zooKeeper, key);
}
~~~

~~~java
/**
 * 基于 Zookeeper 的分布式锁的实现
 */
@Slf4j
public class DistributedZookeeperLock implements Lock {
    private final ZooKeeper zooKeeper;
    private final String lockName;
    private final long expire;
    private final TimeUnit unit;
    private static final String ROOT_PATH = "/locks";


    public DistributedZookeeperLock(ZooKeeper zooKeeper, String lockName, long expire, TimeUnit unit) {
        this.zooKeeper = zooKeeper;
        this.lockName = lockName;
        this.expire = expire;
        this.unit = unit;
        try {
            if (zooKeeper.exists(ROOT_PATH, false) == null) {
                zooKeeper.create(ROOT_PATH, null, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public DistributedZookeeperLock(ZooKeeper zooKeeper, String lockName) {
        this.zooKeeper = zooKeeper;
        this.lockName = lockName;
        this.expire = -1L;
        // 不能为NULL 否则程序报错,随意给个值
        this.unit = TimeUnit.SECONDS;
        try {
            if (zooKeeper.exists(ROOT_PATH, false) == null) {
                zooKeeper.create(ROOT_PATH, null, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void lock() {
        try {
            this.tryLock(expire, unit);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void lockInterruptibly() throws InterruptedException {

    }

    @Override
    public boolean tryLock() {
        try {
            tryLock(-1L, TimeUnit.MILLISECONDS);
            return true;
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return false;
    }

   
    @Override
    public boolean tryLock(long time, @NotNull TimeUnit unit) throws InterruptedException {
        // 创建ZNode节点的过程
        try {
            if (-1L == time || 0L == time) {
                // 防止客户端程序获取到锁后，服务器端宕机，导致的死锁问题，需要创建一个临时的节点。
                zooKeeper.create(ROOT_PATH + "/" + lockName, null, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL);
            } else if (time < -1L) {
                throw new RuntimeException("时间不能够小于-1！");
            } else {
                //时间转换
                long ttl = timeFormat(time, unit);
                zooKeeper.create(ROOT_PATH + "/" + lockName, null, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT_WITH_TTL, null, ttl);
            }
            return true;
        } catch (KeeperException e) {
//            e.printStackTrace();
            TimeUnit.SECONDS.sleep(1);
            tryLock(time, unit);
        }
        return false;
    }

    /**
     * 时间转换
     * @param time  时间
     * @param unit  转换的单位
     * @return
     */
    private long timeFormat(long time, TimeUnit unit) {
        long ms = TimeUnit.MILLISECONDS.convert(time, unit);
        return ms;
    }

    @Override
    public void unlock() {
        // 删除ZNode节点的过程
        try {
            Stat stat = zooKeeper.exists(ROOT_PATH + "/" + lockName, false);
            zooKeeper.delete(ROOT_PATH + "/" + lockName, stat.getVersion());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @NotNull
    @Override
    public Condition newCondition() {
        return null;
    }
}

~~~



