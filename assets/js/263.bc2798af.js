(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1393:function(v,_,o){"use strict";o.r(_);var t=o(26),n=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),o("p",[v._v("实现的复杂性或者难度角度：Zookeeper > redis > 数据库")]),v._v(" "),o("p",[v._v("实际性能角度：redis > Zookeeper > 数据库")]),v._v(" "),o("p",[v._v("可靠性角度：Zookeeper > redis = 数据库")]),v._v(" "),o("p",[v._v("这三种方式都不是尽善尽美，我们可以根据实际业务情况选择最适合的方案：")]),v._v(" "),o("p",[v._v("如果追求极致性能可以选择："),o("strong",[v._v("reds方案")])]),v._v(" "),o("p",[v._v("如果追求可靠性可以选择："),o("strong",[v._v("zk")])]),v._v(" "),o("p",[v._v("常见锁分类：")]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("悲观锁")]),v._v("：具有强烈的独占和排他特性，在整个数据处理过程中，将数据处于锁定状态。适合于写比较多，会阻塞读操作。\n"),o("strong",[v._v("乐观锁")]),v._v("：采取了更加宽松的加锁机制，大多是基于数据版本（ Version ）及时间戳来实现。。适合于读比较多，不会阻塞读")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("独占锁、互斥锁、排他锁")]),v._v("：保证在任一时刻，只能被一个线程独占排他持有。synchronized、ReentrantLock\n"),o("strong",[v._v("共享锁")]),v._v("：可同时被多个线程共享持有。CountDownLatch到计数器、Semaphore信号量")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("可重入锁")]),v._v("：又名递归锁。同一个线程在外层方法获取锁的时候，在进入内层方法时会自动获取锁。\n"),o("strong",[v._v("不可重入锁")]),v._v("：例如早期的synchronized")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("公平锁")]),v._v("：有优先级的锁，先来先得，谁先申请锁就先获取到锁\n"),o("strong",[v._v("非公平锁")]),v._v("：无优先级的锁，后来者也有机会先获取到锁")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("自旋锁")]),v._v("：当线程尝试获取锁失败时（锁已经被其它线程占用了），无限循环重试尝试获取锁\n"),o("strong",[v._v("阻塞锁")]),v._v("：当线程尝试获取锁失败时，线程进入阻塞状态，直到接收信号后被唤醒。在竞争激烈情况下，性能较高")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("读锁")]),v._v("：共享锁\n"),o("strong",[v._v("写锁")]),v._v("：独占排他锁")])]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("偏向锁")]),v._v("：一直被一个线程所访问，那么该线程会自动获取锁\n"),o("strong",[v._v("轻量级锁")]),v._v("（CAS）：当锁是偏向锁的时候，被另一个线程所访问，偏向锁就会升级为轻量级锁，其他线程会通过自旋的形式尝试获取锁，不会阻塞，提高性能。\n"),o("strong",[v._v("重量级锁")]),v._v("：当锁为轻量级锁的时候，另一个线程虽然是自旋，但自旋不会一直持续下去，当自旋一定次数的时候（10次），还没有获取到锁，就会进入阻塞，该锁膨胀为重量级锁。重量级锁会让他申请的线程进入阻塞，性能降低。\n以上其实是synchronized的锁升级过程")])]),v._v(" "),o("p",[v._v("​")]),v._v(" "),o("blockquote",[o("p",[o("strong",[v._v("表级锁")]),v._v("：对整张表加锁，加锁快开销小，不会出现死锁，但并发度低，会增加锁冲突的概率\n"),o("strong",[v._v("行级锁")]),v._v("：是mysql粒度最小的锁，只针对操作行，可大大减少锁冲突概率，并发度高，但加锁慢，开销大，会出现死锁")])])])}),[],!1,null,null,null);_.default=n.exports}}]);