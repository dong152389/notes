(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1368:function(t,a,n){"use strict";n.r(a);var s=n(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"微服务架构需要解决的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构需要解决的问题"}},[t._v("#")]),t._v(" 微服务架构需要解决的问题")]),t._v(" "),n("h2",{attrs:{id:"客户端如何访问这么多服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端如何访问这么多服务"}},[t._v("#")]),t._v(" 客户端如何访问这么多服务")]),t._v(" "),n("p",[t._v("通过 api 网关解决客户端访问，客户端访问服务器时 先经过api网关，网关再将请求分发到对应的服务")]),t._v(" "),n("h2",{attrs:{id:"这么多服务-服务之间如何通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这么多服务-服务之间如何通信"}},[t._v("#")]),t._v(" 这么多服务，服务之间如何通信")]),t._v(" "),n("p",[t._v("1.同步通信：\n1.1 RPC ： 对内\n1.2 Http BIO： 对外  通常用 http的 RestTFul 风格 通信 返回 json数据 封装成对象")]),t._v(" "),n("p",[t._v("2.异步通信：\n2.1 消息队列\n2.2  AIO模型  异步非阻塞")]),t._v(" "),n("h2",{attrs:{id:"如何管理这么多服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何管理这么多服务"}},[t._v("#")]),t._v(" 如何管理这么多服务")]),t._v(" "),n("p",[t._v("服务的管理 只管理服务与注册发现 服务器\n当服务启动时 进行注册服务---\x3e先请求服务注册与发现 --\x3e 注册服务的ip地址\n当订单服务需要通信用户服务时，先请求服务注册与发现获取用户服务器的ip(用户服务的3个ip)，轮流请求用户服务（负载均衡）")]),t._v(" "),n("p",[t._v("服务器挂了 会造成阻塞 必须解决:\n服务熔断 ： 直接返回结果，不再尝试请求 因为http是同步并阻塞 会一直请求 进入阻塞 服务与注册服务器 的发现功能 发现哪个服务器挂了 删掉这个服务的 ip 再告诉请求这个挂了服务的服务 删掉这个ip\n服务降级 ： 把服务给到主业务的服务 关闭不是主业务的服务\n限流 ： 限制访问量")]),t._v(" "),n("p",[t._v("BIO 同步并阻塞\nNIO 同步非阻塞\nAIO 异步非阻塞")]),t._v(" "),n("p",[t._v("阻塞：没数据来的话函数会卡在那边等数据来\n非阻塞：没数据来的话函数会直接返回并告诉你现在没数据\n同步：你告诉他要接收数据，然后不管他收没收成功你就在那边等他搞完\n异步：你告诉他要接受数据，然后去做其他事，他收完了（或者收失败了）再叫你")])])}),[],!1,null,null,null);a.default=r.exports}}]);