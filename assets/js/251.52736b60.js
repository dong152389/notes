(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1373:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于-docker-安装-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-zookeeper"}},[t._v("#")]),t._v(" 基于 Docker 安装 Zookeeper")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("Zookeeper 部署有三种方式，单机模式、集群模式、伪集群模式，以下采用 Docker 的方式部署")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 集群为大于等于3个奇数，如 3、5、7,不宜太多，集群机器多了选举和数据同步耗时长，不稳定。")]),t._v(" "),a("h2",{attrs:{id:"单机模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单机模式"}},[t._v("#")]),t._v(" 单机模式")]),t._v(" "),a("h3",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zoo1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zoo1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n")])])]),a("h3",{attrs:{id:"验证是否安装成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装成功"}},[t._v("#")]),t._v(" 验证是否安装成功")]),t._v(" "),a("ul",[a("li",[t._v("以交互的方式进入容器")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zookeeper_zoo1_1 /bin/bash\n")])])]),a("ul",[a("li",[t._v("使用客户端连接到服务端")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("bash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkCli.sh -server 192.168.75.130:2181")]),t._v("\nConnecting to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,365 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:zookeeper.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),t._v(".10-39d3a4f269333c922ed3db283be479f9deacaa0f, built on 03/23/2017 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":13 GMT\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,374 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:host.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zoo1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,374 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v(".0_131\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,380 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Oracle Corporation\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.home"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib/jvm/java-1.8-openjdk/jre\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.class.path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/build/classes:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/build/lib/*.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/slf4j-log4j12-1.6.1.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/slf4j-api-1.6.1.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/netty-3.10.5.Final.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/log4j-1.2.16.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/jline-0.9.94.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/zookeeper-3.4.10.jar:/zookeeper-3.4.10/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/src/java/lib/*.jar:/conf:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.library.path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib/jvm/java-1.8-openjdk/jre/lib/amd64/server:/usr/lib/jvm/java-1.8-openjdk/jre/lib/amd64:/usr/lib/jvm/java-1.8-openjdk/jre/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/amd64:/usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.io.tmpdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/tmp\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:java.compiler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:os.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Linux\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,382 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:os.arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,382 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:os.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),t._v(".0-98-generic\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,386 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:user.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,386 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:user.home"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,386 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:Environment@100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Client environment:user.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/zookeeper-3.4.10\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,389 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main:ZooKeeper@438"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Initiating client connection, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("connectString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("sessionTimeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("watcher")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("org.apache.zookeeper.ZooKeeperMain"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MyWatcher")]),t._v("@3eb07fd3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,428 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main-SendThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":ClientCnxn"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SendThread")]),t._v("@1032"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Opening socket connection to server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130/192.168.75.130:2181. Will not attempt to authenticate using SASL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unknown error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nWelcome to ZooKeeper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nJLine support is enabled\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,529 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main-SendThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":ClientCnxn"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SendThread")]),t._v("@876"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Socket connection established to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130/192.168.75.130:2181, initiating session\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("zk: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CONNECTING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-11-09 07:45:58,573 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main-SendThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":ClientCnxn"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SendThread")]),t._v("@1299"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - Session establishment complete on server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.130/192.168.75.130:2181, sessionid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x15f9fbc12ec0000, negotiated "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n\nWATCHER::\n\nWatchedEvent state:SyncConnected type:None path:null\n")])])]),a("ul",[a("li",[t._v("使用服务端工具检查服务器状态")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("bash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: standalone\n")])])]),a("h2",{attrs:{id:"集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[t._v("#")]),t._v(" 集群模式")]),t._v(" "),a("p",[t._v("准备 3 台 Ubuntu Server 系统，并分别配置 Zookeeper")]),t._v(" "),a("h3",{attrs:{id:"第一台主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一台主机"}},[t._v("#")]),t._v(" 第一台主机")]),t._v(" "),a("h4",{attrs:{id:"docker-compose-yml-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-2"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=192.168.75.130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=192.168.75.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=192.168.75.135"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n")])])]),a("h4",{attrs:{id:"验证测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证测试"}},[t._v("#")]),t._v(" 验证测试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo1_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: leader\n")])])]),a("h3",{attrs:{id:"第二台主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二台主机"}},[t._v("#")]),t._v(" 第二台主机")]),t._v(" "),a("h4",{attrs:{id:"docker-compose-yml-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-3"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=192.168.75.130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=192.168.75.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=192.168.75.135"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n")])])]),a("h4",{attrs:{id:"验证测试-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证测试-2"}},[t._v("#")]),t._v(" 验证测试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo2_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: follower\n")])])]),a("h3",{attrs:{id:"第三台主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三台主机"}},[t._v("#")]),t._v(" 第三台主机")]),t._v(" "),a("h4",{attrs:{id:"docker-compose-yml-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-4"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=192.168.75.130"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=192.168.75.134"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=192.168.75.135"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n")])])]),a("h4",{attrs:{id:"验证测试-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证测试-3"}},[t._v("#")]),t._v(" 验证测试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo3_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: follower\n")])])]),a("h2",{attrs:{id:"伪集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪集群模式"}},[t._v("#")]),t._v(" 伪集群模式")]),t._v(" "),a("h3",{attrs:{id:"docker-compose-yml-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-5"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zoo1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zoo1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=zoo2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=zoo3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zoo2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 2182"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zoo1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=zoo2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=zoo3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoo3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zookeeper\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zoo3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 2183"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_MY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ZOO_SERVERS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" server.1=zoo1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.2=zoo2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3888 server.3=zoo3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3888")]),t._v("\n")])])]),a("h3",{attrs:{id:"验证是否安装成功-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装成功-2"}},[t._v("#")]),t._v(" 验证是否安装成功")]),t._v(" "),a("ul",[a("li",[t._v("分别以交互方式进入容器查看")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zookeeper_zoo1_1 /bin/bash\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zookeeper_zoo2_1 /bin/bash\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it zookeeper_zoo3_1 /bin/bash\n")])])]),a("ul",[a("li",[t._v("使用服务端工具检查服务器状态")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo1_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: follower\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo2_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: follower\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@UbuntuBase:/usr/local/docker/zookeeper"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it zookeeper_zoo3_1 /bin/bash")]),t._v("\nbash-4.3"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./bin/zkServer.sh status")]),t._v("\nZooKeeper JMX enabled by default\nUsing config: /conf/zoo.cfg\nMode: leader\n")])])]),a("p",[t._v("从上面的验证结果可以看出：zoo1 为跟随者，zoo2 为跟随者，zoo3 为领导者")])])}),[],!1,null,null,null);s.default=e.exports}}]);