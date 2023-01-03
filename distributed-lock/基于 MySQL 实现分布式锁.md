# 基于 MySQL 实现分布式锁

不管是jvm锁还是mysql锁，为了保证线程的并发安全，都提供了悲观**独占排他锁**。所以独占排他也是分布式锁的基本要求。

可以利用**唯一键索引**不能重复插入的特点实现。设计表如下：

~~~sql
CREATE TABLE `db_lock` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `lock_name` varchar(50) NOT NULL COMMENT '锁名',
  `class_name` varchar(100) DEFAULT NULL COMMENT '类名',
  `method_name` varchar(50) DEFAULT NULL COMMENT '方法名',
  `server_name` varchar(50) DEFAULT NULL COMMENT '服务器ip',
  `thread_name` varchar(50) DEFAULT NULL COMMENT '线程名',
  `create_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '获取锁时间',
  `desc` varchar(100) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_unique` (`lock_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1332899824461455363 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
~~~

## 基本思路

![1606620944823](C:\Users\Fengdong.Duan\Desktop\my-notes\distributed-lock\assets\1606620944823.png)

1. 线程同时获取锁（insert）
2. 获取成功，执行业务逻辑，执行完成释放锁（delete）
3. 其他线程等待重试

