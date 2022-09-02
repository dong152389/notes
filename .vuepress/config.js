module.exports = {
  dest: "notebook",
  base: "/notebook/",
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  locales: {
    "/": {
      // lang: "zh-CN",
      title: "我的笔记",
      description: "记录Java的学习过程"
    }
  },
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }],
    ["script", { "data-ad-client": "ca-pub-4147143076931995", async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }]
  ],
  themeConfig: {
    editLinks: false,
    locales: {
      "/": {
        // label: "简体中文",
        // selectText: "Languages",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "指南",
            link: "/guide/"
          }
        ],
        sidebar: {
          "/guide/": genGuideSidebar(),
          "/idea/": genIdeaSidebar(),
          "/maven/": genMavenSidebar(),
          "/devops/": genDevOpsSidebar(),
          "/gitflow/": genGitFlowSidebar(),
          "/mvc/": genMVCSidebar(),
          "/bootstrap/": genBootStrapSidebar(),
          "/spring/": genSpringSidebar(),
          "/junit/": genJunitSidebar(),
          "/log4j/": genLog4jSidebar(),
          // "/servlet/": genServletSidebar(),
          "/spring-web/": genSpringwebSidebar(),
          "/spring-mvc/": genSpringmvcSidebar(),
          "/mybatis/": genMybatisSidebar(),
          // "/myshop1/": genMyshop1Sidebar(),
          "/spring-transaction/": genSpringTransactionSidebar(),
          "/apache-http-client/": genApachehttpclientnSidebar(),
          // "/myshop2/": genMyshop2Sidebar(),
          "/supplement1/": genSupplement1Sidebar(),
          "/micro-service-intro/": genmicroserviceintroSidebar(),
          "/linux/": genLinuxSidebar(),
          "/docker/": genDockerSidebar(),
          "/docker-compose/": genDockerComposeSidebar(),
          "/gitlab/": genGitlabSidebar(),
          "/nexus/": genNexusSidebar(),
          "/registry/": genRegistrySidebar(),
          "/again-micro/": genAgainMicro(),
          "/springboot/": genSpringboot(),
          "/spring-boot-thymeleaf/": genSpringbootThymeleaf(),
          "/spring-boot-mybatis/": genSpringbootMybatis(),
          "/spring-cloud-netflix/": genSpringcloudNetflix(),
          "/apache-dubbo-zookeeper/": genZookeeper(),
          "/apache-dubbo-rpc/": genRPC(),
          "/apache-dubbo-prepare/": genPrepare(),
          "/apache-dubbo-ci/": genCi(),
          "/apache-dubbo-codeing/": genCoding(),
          "/spring-cloud-alibaba/": genAlibaba(),
          "/spring-cloud-alibaba-myshop/": genAlibabaShop(),
          "/vue-prepare/": genVuePrepare(),
          "/vue/": genVue(),
          "/vue-cli/": genVueCli(),
          "/vue-router/": genVueRouter(),
          "/vuex/": genVuex(),
          "/service-mesh-kubernetes/": serviceMesh()
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/google-analytics', { ga: 'UA-85414008-1' }],
    ['baidu-tongji-analytics', { key: '577e65b88c06c034335c395caa4b6205' }],
  ]
};

// 指南
function genGuideSidebar() {
  return [
    {
      title: "简言",
      collapsable: false, //collapsable: false 来让一个组永远都是展开状态
      children: [
        "",
      ]
    },
    {
      title: "开始",
      collapsable: false,
      children: [
        "走进单体应用",
        "GitFlow工作流",
        "微服务概述",
        "SpringBoot",
        "SpringCloudNetflix",
        "Apache-Dubbo",
        "SpringCloudAlibaba",
        "Vue 渐进式 JavaScript 框架",
      ]
    } ,
   /* {
      title: "高级",
      collapsable: false,
      children: [
        "服务网格化"
      ]
    }, */
    {
      title: "初识容器化",
      collapsable: false,
      children: [
        "Docker",
        "Docker-Compose",
        "GitLab",
        "Nexus",
        "Registry",
        "服务网格化"
      ]
    }
  ];
}

// IDEA
function genIdeaSidebar() {
  return [
    {
      title: "Intellij IDEA",
      collapsable: false,
      children: [
        "",
        "第一个 IDEA 应用程序"
      ]
    }
  ];
}

// Maven
function genMavenSidebar() {
  return [
    {
      title: "Maven",
      collapsable: false,
      children: [
        "",
        "Maven安装配置",
        "Maven本地仓库",
        "Maven中央仓库",
        "Maven依赖机制",
        "Maven POM",
        "Maven插件",
        "Maven快照",
        "Maven常用命令",
        "第一个Maven应用程序"
      ]
    }
  ];
}

// 运维
function genDevOpsSidebar() {
  return [
    {
      title: "服务网格化",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
}

// GITFLOW工作流
function genGitFlowSidebar() {
  return [
    {
      title: "GitFlow工作流指南",
      collapsable: false,
      children: [
        "",
        "什么是Git",
        "安装Git",
        "Git工作流简介",
        "集中式工作流",
        "功能分支工作流",
        "GitFlow 工作流",
        "Forking 工作流",
        "Pull Requests",
      ]
    }
  ];
}

// mvc
function genMVCSidebar() {
  return [
    {
      title: "三层架构 + MVC",
      collapsable: false,
      children: [
        "",
        "mvc模式"
      ]
    }
  ];
}
// bootstrap
function genBootStrapSidebar() {
  return [
    {
      title: "Bootstrap",
      collapsable: false,
      children: [
        "",
        "bootstrap环境安装",
        "bootstrap网格系统",
        "媒体查询的用法",
        "bootstrap表格",
        "bootstrap字体图标"
      ]
    }
  ];
}
// spring
function genSpringSidebar() {
  return [
    {
      title: "Spring",
      collapsable: false,
      children: [
        "",
        "spring体系结构",
        "spring的特点",
        "spring与ioc",
        "第一个spring应用程序"
      ]
    }
  ];
}
// junit
function genJunitSidebar() {
  return [
    {
      title: "JUnit",
      collapsable: false,
      children: [
        "",
        "第一个JUnit单元测试",
        "JUnit注解",
        "JUnit断言",
      ]
    }
  ];
}
// Log4j
function genLog4jSidebar() {
  return [
    {
      title: "Log4j",
      collapsable: false,
      children: [
        "",
        "第一个Log4j日志文件",
        "Log4j日志级别",
        "Log4j日志输出控制文件",
      ]
    }
  ];
}
// 综合复习
/* function genServletSidebar() {
  return [
    {
      title: "综合复习",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
} */
// SpringWeb
function genSpringwebSidebar() {
  return [
    {
      title: "Spring Web",
      collapsable: false,
      children: [
        "",
        "ApplicationContextAware",
        "Bean的装配方式",
        "浏览器端存储技术简介"
      ]
    }
  ];
}
// SpringMVC
function genSpringmvcSidebar() {
  return [
    {
      title: "Spring Mvc",
      collapsable: false,
      children: [
        "",
        "Spring整合Spring MVC",
        "第一个Controller控制器",
        "Spring MVC拦截器的使用",
        "Maven 模块化开发",
        "课后练习-重新完善功能代码",
        "Spring MVC 表单标签库",
        "Spring MVC @ModelAttribute",
        "Spring MVC @ResponseBody",
      ]
    }
  ];
}
// Mybatis
function genMybatisSidebar() {
  return [
    {
      title: "MyBatis",
      collapsable: false,
      children: [
        "",
        "Druid 简介",
        "Spring 整合 Druid",
        "Spring 整合 MyBatis",
        "小知识-utf8 与 utf8mb4 字符集",
        "第一个 MyBatis 对象关系映射",
        "MyBatis 单表 CRUD 操作",
        "MyBatis 动态 SQL"
      ]
    }
  ];
}
// Myshop1
/* function genMyshop1Sidebar() {
  return [
    {
      title: "项目实战 MyShop（上）",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
} */
// SpringTransaction
function genSpringTransactionSidebar() {
  return [
    {
      title: "Spring Transaction",
      collapsable: false,
      children: [
        "",
        "使用 AspectJ 的 AOP 配置管理事务",
        "使用 Spring 注解管理事务",
      ]
    }
  ];
}
// Apachehttpclientn
function genApachehttpclientnSidebar() {
  return [
    {
      title: "解决模块间通信问题",
      collapsable: false,
      children: [
        "",
        // "Apache HttpClient",
        "Jackson",
        // "创建 API 接口模块",
        "你怎么理解 RESTful",
        "什么是幂等性",
        // "实现 RESTful 风格的 API"
      ]
    }
  ];
}
// Myshop2
/* function genMyshop2Sidebar() {
  return [
    {
      title: "项目实战 MyShop（下）",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
} */
// 补充知识点
function genSupplement1Sidebar() {
  return [
    {
      title: "Spring",
      collapsable: false,
      children: [
        ""
      ]
    },
    {
      title: "Java 工具类",
      collapsable: false,
      children: [
        "CookieUtils",
        "RegexpUtils",
        "MapperUtils",
      ]
    },
    {
      title: "JavaScript 工具类",
      collapsable: false,
      children: [
        "DateTime",
      ]
    },
    {
      title: "JavaScript 插件",
      collapsable: false,
      children: [
        "jQuery Validation",
        "jQuery iCheck",
        "jQuery Datatables",
        "jQuery TreeTable",
        "jQuery zTree",
        "Dropzone",
        "wangEditor"
      ]
    },
    {
      title: "IDEA 插件",
      collapsable: false,
      children: [
        "Lombok",
        "JRebel",
      ]
    },
    {
      title: "其它",
      collapsable: false,
      children: [
        "Kaptcha",
        "解决 Maven 无法自动下载依赖的问题"
      ]
    }
  ];
}
// Myshop2
function genMyshop2Sidebar() {
  return [
    {
      title: "项目实战 MyShop（下）",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
}
// 微服务
function genmicroserviceintroSidebar() {
  return [
    {
      title: "微服务简介",
      collapsable: false,
      children: [
        "",
        "走向单体地狱",
        "微服务-解决复杂问题",
        "微服务的优点",
        "微服务的缺点",
      ]
    }
  ]
}
// linux
function genLinuxSidebar() {
  return [
    {
      title: "Linux",
      collapsable: false,
      children: [
        "",
        "Linux 与 Windows 比较",
        "关于操作系统的选型",
        "安装 Ubuntu Server",
        "Linux 远程控制管理",
        "Linux 的目录结构",
        "Linux 操作文件目录",
        "Linux 系统管理命令",
        "Linux 开关机命令",
        "Linux 压缩命令",
        "Linux 编辑器",
        "Linux 软件包管理",
        "Linux 用户和组管理",
        "Linux 文件权限管理",
        "Linux 安装 Java",
        "Linux 安装 Tomcat",
        "Linux 安装 MySQL",
        "部署应用到生产环境",
        "附：Linux LVM 磁盘扩容",
      ]
    }
  ]
}
// Docker
function genDockerSidebar() {
  return [
    {
      title: "Docker",
      collapsable: false,
      children: [
        "",
        "为什么要使用 Docker",
        "Docker 引擎",
        "Docker 系统架构",
        "Docker 镜像",
        "Docker 容器",
        "Docker 仓库",
        "Ubuntu 安装 Docker",
        "Docker 镜像加速器",
      ]
    },
    {
      title: "Docker 镜像",
      collapsable: false,
      children: [
        "使用 Docker 镜像",
        "获取镜像",
        "列出镜像",
        "删除本地镜像",
        "使用 Dockerfile 定制镜像",
        "Dockerfile 指令",
      ]
    },
    {
      title: "Docker 容器",
      collapsable: false,
      children: [
        "操作 Docker 容器",
        "启动容器",
        "守护态运行",
        "终止容器",
        "进入容器",
      ]
    },
    {
      title: "Docker 仓库",
      collapsable: false,
      children: [
        "访问 Docker 仓库",
        "Docker Hub",
        "Docker 私有仓库",
      ]
    },
    {
      title: "Docker 实战",
      collapsable: false,
      children: [
        "数据卷",
        "Docker 构建 Tomcat",
        "Docker 构建 MySQL",
        "部署项目到容器",
        "Docker 常用命令",
      ]
    }
  ]
}
// Dockercompose
function genDockerComposeSidebar() {
  return [
    {
      title: "Docker Compose",
      collapsable: false,
      children: [
        "",
        "Docker Compose 安装与卸载",
        "Docker Compose 使用",
        "Docker Compose 命令说明",
        "Docker Compose 模板文件",
        "Docker Compose 实战 Tomcat",
        "Docker Compose 实战 MySQL",
        "Docker Compose 部署项目到容器",
        "Docker Compose 常用命令",
        "YAML 配置文件语言",
        "附：为什么说 JSON 不适合做配置文件？",
      ]
    }
  ]
}
// Gitlab
function genGitlabSidebar() {
  return [
    {
      title: "GitLab",
      collapsable: false,
      children: [
        "",
        "安装 Git",
        "Git 的一般工作流程",
        "Git 的基本操作",
        "TortoiseGit 简化 Git 操作",
        "什么是 GitLab",
        "基于 Docker 安装 GitLab",
        "GitLab 的基本设置",
        "GitLab 的账户管理",
        "GitLab 创建第一个项目",
        "GitLab 使用 SSH 免密登录",
      ]
    }
  ]
}
// nexus
function genNexusSidebar() {
  return [
    {
      title: "Nexus",
      collapsable: false,
      children: [
        "",
        "基于 Docker 安装 Nexus",
        "Maven 仓库介绍",
        "在项目中使用 Maven 私服",
      ]
    }
  ]
}
// registry
function genRegistrySidebar() {
  return [
    {
      title: "Registry",
      collapsable: false,
      children: [
        "",
        "配置 Docker Registry 客户端",
        "部署 Docker Registry WebUI",
        "真正实现：一次构建，到处运行",
      ]
    }
  ]
}// 再谈微服务
function genAgainMicro() {
  return [
    {
      title: "再谈微服务",
      collapsable: false,
      children: [
        "",
        "传统架构与微服务架构的区别",
        "微服务的特征",
        "SOA 架构与微服务架构的区别",
        "微服务的实践",
        "小知识-单点故障与分布式锁",
        "微服务架构设计模式",
        "新架构新起点",
      ]
    }
  ]
}// SpringBoot
function genSpringboot() {
  return [
    {
      title: "SpringBoot",
      collapsable: false,
      children: [
        "",
        "Spring Boot 简介",
        "Spring Boot 优缺点",
        "第一个 Spring Boot 应用程序",
        "Spring Boot 单元测试",
        "Spring Boot 常用配置",
      ]
    }
  ]
}
// SpringbootThymeleaf
function genSpringbootThymeleaf() {
  return [
    {
      title: "Spring Boot Thymeleaf",
      collapsable: false,
      children: [
        "",
        "为什么使用 Thymeleaf",
        "第一个 Thymeleaf 模板页",
        "Thymeleaf 常用语法",
        "Thymeleaf 参考手册",
        "Thymeleaf 表达式语法",
        "Thymeleaf 内置对象",
        "Thymeleaf 模板布局",
      ]
    }
  ]
}
// SpringbootMybatis
function genSpringbootMybatis() {
  return [
    {
      title: "Spring Boot MyBatis",
      collapsable: false,
      children: [
        "",
        "Spring Boot 整合 tk.mybatis",
        "Spring Boot 整合 PageHelper",
        "使用 MyBatis 的 Maven 插件生成代码",
        "测试 MyBatis 操作数据库",
      ]
    }
  ]
}

function genSpringcloudNetflix() {
  return [
    {
      title: "Spring Cloud Netflix",
      collapsable: false,
      children: [
        "",
        "创建统一的依赖管理",
        "服务注册与发现",
        "创建服务提供者",
        "创建服务消费者（Ribbon）",
        "创建服务消费者（Feign）",
        "使用熔断器防止服务雪崩",
        "使用熔断器仪表盘监控",
        "使用路由网关统一访问接口",
        "使用路由网关的服务过滤功能"
      ]
    },
    {
      title: "Spring Cloud 服务配置",
      collapsable: false,
      children: [
        "分布式配置中心",
        "分布式配置中心服务端",
        "分布式配置中心客户端"
      ]
    },
    {
      title: "Spring Cloud 服务追踪",
      collapsable: false,
      children: [
        "服务链路追踪",
        "Spring Boot Admin",
        "Spring Boot Admin 服务端",
        "Spring Boot Admin 客户端"
      ]
    }
  ]
}
function genZookeeper() {
  return [
    {
      title: "Apache Zookeeper",
      collapsable: false,
      children: [
        "",
        "什么是分布式协调技术",
        "什么是分布式锁",
        "什么是 Zookeeper",
        "Zookeeper 如何实现分布式锁",
        "基于 Docker 安装 Zookeeper",
        "附：Linux 下手动安装 Zookeeper",
        "Zookeeper 配置说明",
      ]
    }
  ]
}
function genRPC() {
  return [
    {
      title: "Apache Dubbo",
      collapsable: false,
      children: [
        "",
        "Dubbo 的服务治理",
        "Dubbo 的核心功能",
        "Dubbo 的组件角色",
        "Dubbo Admin 管理控制台",
        "第一个 Dubbo 应用程序",
        "Dubbo 的负载均衡",
        "Dubbo + Kryo 实现高速序列化",
        "Dubbo + Hystrix 实现服务熔断",
        "Dubbo + Hystrix 熔断器仪表盘",
      ]
    }
  ]
}
function genPrepare() {
  return [
    {
      title: "MyShop 开发前的准备",
      collapsable: false,
      children: [
        "",
        "了解 XP 极限编程",
        "系统架构的演进",
        "搭建通用模块项目"
      ]
    },
    {
      title: "MyShop 创建第一个服务",
      collapsable: false,
      children: [
        "搭建用户管理服务"
      ]
    }
  ]
}
function genCi() {
  return [
    {
      title: "GitLab 持续集成",
      collapsable: false,
      children: [
        "",
        "持续集成的操作流程",
        "使用 GitLab 持续集成",
        "基于 Docker 安装 GitLab Runner",
        "持续集成实战用户管理服务",
      ]
    },
    {
      title: "Jenkins 持续交付",
      collapsable: false,
      children: [
        "什么是 Jenkins",
        "基于 Docker 安装 Jenkins",
        "配置 Jenkins",
        "持续交付实战用户管理服务",
      ]
    }
  ]
}
function genCoding() {
  return [
    {
      title: "API Gateway",
      collapsable: false,
      children: [
        "",
      ]
    },
    {
      title: "FastDFS 分布式文件上传",
      collapsable: false,
      children: [
        "什么是 FastDFS",
        "基于 Docker 安装 FastDFS",
        "配置 FastDFS Java 客户端",
      ]
    },
    {
      title: "Nginx 解决跨域问题",
      collapsable: false,
      children: [
        "跨域现象",
        "什么是 Nginx",
        "Nginx 虚拟主机",
        "Nginx 反向代理",
        "Nginx 负载均衡",
        "使用 Nginx 解决跨域问题",
      ]
    },
    {
      title: "Redis 实现数据缓存",
      collapsable: false,
      children: [
        "Redis 简介",
        "Redis HA 方案",
        "Redis Sentinel 集群部署",
        "Redis 命令汇总",
        "创建缓存服务提供者",
        "配置 MyBatis Redis 二级缓存",
      ]
    },
    {
      title: "Solr 实现全文检索",
      collapsable: false,
      children: [
        "什么是 Solr",
        "什么是搜索引擎",
        "基于 Docker 安装 Solr",
        "Solr 的基本操作",
        "Spring Boot 整合 Solr",
      ]
    },
    {
      title: "Apollo 分布式配置中心",
      collapsable: false,
      children: [
        "Apollo 简介",
        "基于 Docker 安装 Apollo",
      ]
    }
  ]
}
function genAlibaba() {
  return [
    {
      title: "Spring Cloud Alibaba",
      collapsable: false,
      children: [
        "",
        "创建统一的依赖管理",
        "服务注册与发现",
        "创建服务提供者",
        "创建服务消费者",
        "创建服务消费者（Feign）",
        "使用熔断器防止服务雪崩",
        "使用熔断器仪表盘监控",
        "使用路由网关统一访问接口",
        "使用路由网关的全局过滤功能",
      ]
    },
    {
      title: "Spring Cloud Alibaba 服务配置",
      collapsable: false,
      children: [
        "Nacos Config 服务端初始化",
        "Nacos Config 客户端的使用",
        "Nacos Config 多环境的配置",
      ]
    },
    {
      title: "Spring Cloud Alibaba 链路追踪",
      collapsable: false,
      children: [
        "为什么需要链路追踪",
        "SkyWalking 服务端配置",
        "SkyWalking 客户端配置",
        "附：Maven Assembly 插件",
      ]
    },
    {
      title: "Spring Cloud Alibaba 异步通信",
      collapsable: false,
      children: [
        "消息队列的流派",
        "RocketMQ 简介",
        "基于 Docker 安装 RocketMQ",
        "RocketMQ 生产者",
        "RocketMQ 消费者",
        "RocketMQ 自定义 Binding",
      ]
    }
  ]
}
function genAlibabaShop() {
  return [
    {
      title: "Alibaba For MyShop",
      collapsable: false,
      children: [
        "",
        "基础设施"
      ]
    },
    {
      title: "极限编程",
      collapsable: false,
      children: [
        "了解敏捷开发",
        "了解 XP 极限编程"
      ]
    },
    {
      title: "创建项目",
      collapsable: false,
      children: [
        "创建统一的依赖管理",
        "创建通用的工具类库",
        "创建通用的领域模型",
        "创建通用的数据访问",
        "创建通用的业务逻辑",
        "创建通用的代码生成",
        "创建外部的链路追踪",
      ]
    },
    {
      title: "牛刀小试",
      collapsable: false,
      children: [
        "创建用户注册服务",
        "理解 RESTful 风格的 API",
        "再谈 RESTful 风格的 API",
        "实现 RESTful 风格的 API",
        "完善用户注册服务",
        "发送注册成功邮件",
        "配置 Swagger2 接口文档引擎",
      ]
    },
    {
      title: "前后分离",
      collapsable: false,
      children: [
        "创建商品服务提供者",
        "创建商品服务消费者",
        "创建路由网关统一访问接口",
        "创建前后分离管理后台"
      ]
    },
  ]
}
function genVuePrepare() {
  return [
    {
      title: "前端知识体系",
      collapsable: false,
      children: [
        "",
        "了解前后分离的演变史",
        "了解前端 MVVM 模式"
      ]
    },
  ]
}
function genVue() {
  return [
    {
      title: "Vue.js",
      collapsable: false,
      children: [
        "",
        "第一个 Vue 应用程序",
        "附：Vue 实例的生命周期",
      ]
    },
    {
      title: "语法篇",
      collapsable: false,
      children: [
        "v-if,v-else",
        "v-else-if",
        "v-for",
      ]
    },
    {
      title: "事件篇",
      collapsable: false,
      children: [
        "v-on"
      ]
    },
    {
      title: "网络篇",
      collapsable: false,
      children: [
        "使用 Axios 实现异步通信",
      ]
    },
    {
      title: "布局篇",
      collapsable: false,
      children: [
        "表单输入",
        "组件基础",
        "计算属性",
        "内容分发与自定义事件"
      ]
    }
  ]
}
function genVueCli() {
  return [
    {
      title: "vue-cli",
      collapsable: false,
      children: [
        "",
        "vue-cli 目录结构",
        "vue-cli src 目录",
        "附：Mac 系统操作 Vue 的权限问题"
      ]
    },{
      title: "Webpack",
      collapsable: false,
      children: [
        "Webpack 简介",
        "安装 WebPack",
        "使用 WebPack"
      ]
    }
  ]
}
function genVueRouter() {
  return [
    {
      title: "vue-router",
      collapsable: false,
      children: [
        "",
        "第一个 Vue 工程项目",
        "第一个 ElementUI 登录页",
        "配置嵌套路由",
        "参数传递",
        "组件重定向",
        "路由模式与 404",
        "路由钩子与异步请求"
      ]
    }
  ]
}
function genVuex() {
  return [
    {
      title: "vuex",
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}
function serviceMesh() {
  return [
    {
      title: "Kubernetes 入门",
      collapsable: false,
      children: [
        "",
        "Kubernetes 安装前的准备",
        "安装 kubeadm",
        "配置 kubeadm",
        "使用 kubeadm 搭建 kubernetes 集群",
        "使用 kubeadm 配置 slave 节点",
        "配置网络",
        "第一个 Kubernetes 容器",
        "概念总结",
      ]
    },
    {
      title: "Kubernetes 进阶",
      collapsable: false,
      children: [
        "Kubernetes 高可用集群",
        "解决 Node 无法加入的问题",
        "通过资源配置运行容器",
        "Ingress 统一访问入口",
        "准备数据持久化",
        "实现数据持久化",
        "Kubernetes ConfigMap",
        "Kubernetes Dashboard",
        "Kubectl 与 Docker 命令",
        "Kubectl 常用命令"
      ]
    }
  ]
}