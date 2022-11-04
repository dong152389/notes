# Redis 新数据类型

## Bitmaps

### 简介

现代计算机用二进制（位） 作为信息的基础单位， 1个字节等于8位， 例如“abc”字符串是由3个字节组成， 但实际在计算机存储时将其用二进制表示， “abc”分别对应的ASCII码分别是97、 98、 99， 对应的二进制分别是01100001、 01100010和01100011，如下图

![image-20221103160152398](./assets/image-20221103160152398.png)

合理地使用操作位能够有效地提高内存使用率和开发效率。

Redis提供了Bitmaps这个“数据类型”可以实现对位的操作：

（1）  Bitmaps本身不是一种数据类型，实际上它就是字符串（key-value），但是它可以对字符串的位进行操作。

（2）  Bitmaps单独提供了一套命令，所以在Redis中使用Bitmaps和使用字符串的方法不太相同。可以把Bitmaps想象成一个以位为单位的数组，数组的每个单元只能存储0和1，数组的下标在Bitmaps中叫做偏移量。

![image-20221103170901097](./assets/image-20221103170901097.png)

### 命令

1、setbit

（1）格式

setbit `<key> <offset> <value>`设置Bitmaps中某个偏移量的值（0或1）

![image-20221104093423167](./assets/image-20221104093423167.png)

* offset:偏移量从0开始

（2）实例

每个独立用户是否访问过网站存放在Bitmaps中， 将访问的用户记做1， 没有访问的用户记做0， 用偏移量作为用户的id。

设置键的第offset个位的值（从0算起） ， 假设现在有20个用户，userid=1， 6， 11， 15， 19的用户对网站进行了访问， 那么当前Bitmaps初始化结果如图

![image-20221104144822051](./assets/image-20221104144822051.png)

unique:users:20201106代表2020-11-06这天的独立访问用户的Bitmaps

![image-20221104145712194](./assets/image-20221104145712194.png)

> 很多应用的用户id以一个指定数字（例如10000） 开头， 直接将用户id和Bitmaps的偏移量对应势必会造成一定的浪费， 通常的做法是每次做setbit操作时将用户id减去这个指定数字。
>
> 在第一次初始化Bitmaps时， 假如偏移量非常大， 那么整个初始化过程执行会比较慢， 可能会造成Redis的阻塞。

2、getbit

（1）格式

getbit`<key> <offset>`获取Bitmaps中某个偏移量的值。

![image-20221104152201519](./assets/image-20221104152201519.png)

获取键的第offset位的值（从0开始算）。

3、bitcount

统计**字符串**被设置为1的bit数。一般情况下，给定的整个字符串都会被进行计数，通过指定额外的 start 或 end 参数，可以让计数只在特定的位上进行。start 和 end 参数的设置，都可以使用负数值：比如 -1 表示最后一个位，而 -2 表示倒数第二个位，start、end 是指bit组的字节的下标数，二者皆包含。

（1）格式

bitcount `<key> [start end] ` 统计字符串从start字节到end字节比特值为1的数量。

![image-20221104160237179](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221104160237179.png)

（2）实例

计算2022-11-06这天的独立访问用户数量

![image-20221104160257082](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221104160257082.png)

start和end代表起始和结束字节数， 下面操作计算用户id在第1个字节到第3个字节之间的独立访问用户数， 对应的用户id是11， 15， 19。

![image-20221104163031994](C:\Users\Fengdong.Duan\Desktop\my-notes\redis\assets\image-20221104163031994.png)

<font color="red">举例： K1 【01000001 01000000 00000000 00100001】，对应【0，1，2，3】。</font>

bitcount K1 1 2 ： 统计下标1、2字节组中bit=1的个数，即01000000 00000000 --》bitcount K1 1 2 --》1 

bitcount K1 1 3 ： 统计下标1、2字节组中bit=1的个数，即01000000 00000000 00100001 --》bitcount K1 1 3 --》3

bitcount K1 0 -2 ： 统计下标0到下标倒数第2，字节组中bit=1的个数，即01000001 01000000  00000000 --》bitcount K1 0 -2 --》3

> redis的setbit设置或清除的是bit位置，而bitcount计算的是byte位置。