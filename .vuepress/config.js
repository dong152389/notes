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
          "/hibernate/": genHibernate(),
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
          "/service-mesh-kubernetes/": serviceMesh(),
          "/mycat/": mycat(),
          "/gradle/": gradle(),
          "/redis/": redis(),
          "/shiro/": shiro(),
          "/distributed-lock/": distributedLock()
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
      collapsable: false,
      sidebarDepth: 5, //collapsable: false 来让一个组永远都是展开状态
      children: [
        "",
      ]
    },
    {
      title: "开始",
      collapsable: false,
      sidebarDepth: 5,
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
    },
    {
      title: "初识容器化",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "Docker",
        "Docker-Compose",
        "服务网格化"
      ]
    },
    {
      title: "高级",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "MyCat",
        "Gradle",
        "Redis",
        "Shiro",
        "分布式锁"
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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

// hibernate
function genHibernate() {
  return [
    {
      title: "Hibernate",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
        "创建映射",
        "核心的配置",
        "Hibernate 常见配置",
        "Hibernate 的 API",
        "持久化规格编写",
        "主键生成策略",
        "持久化类的三种状态",
        "Hibernate 的一级缓存",
        "Hibernate 的事务管理",
        "Service 层",
        "Hibernate 的其他 API",
        "Hibernate 一对多的映射",
        "Hibernate 一对多的关系配置",
        "Hibernate 多对多的关系",
        "Hibernate 的查询方式",
        "Hibernate 的抓取策略"
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        ""
      ]
    },
    {
      title: "Java 工具类",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "CookieUtils",
        "RegexpUtils",
        "MapperUtils",
      ]
    },
    {
      title: "JavaScript 工具类",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "DateTime",
      ]
    },
    {
      title: "JavaScript 插件",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "Lombok",
        "JRebel",
      ]
    },
    {
      title: "其它",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "访问 Docker 仓库",
        "Docker Hub",
        "Docker 私有仓库",
      ]
    },
    {
      title: "Docker 实战",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
        "Docker Compose 安装与卸载",
        "Docker Compose 使用",
        "Docker Compose 命令说明",
        "Docker Compose 模板文件",
        "Docker Compose 实战 Tomcat",
        "Docker Compose 实战 MySQL",
        "Docker Compose 实战 Redis",
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
        "Spring Boot 简介",
        "Spring Boot 优缺点",
        "Spring Boot 快速入门",
        "Spring Boot 的配置文件",
        "Spring Boot 自动配置的原理",
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "分布式配置中心",
        "分布式配置中心服务端",
        "分布式配置中心客户端"
      ]
    },
    {
      title: "Spring Cloud 服务追踪",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
      ]
    },
    {
      title: "FastDFS 分布式文件上传",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "什么是 FastDFS",
        "基于 Docker 安装 FastDFS",
        "配置 FastDFS Java 客户端",
      ]
    },
    {
      title: "Nginx 解决跨域问题",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "Nacos Config 服务端初始化",
        "Nacos Config 客户端的使用",
        "Nacos Config 多环境的配置",
      ]
    },
    {
      title: "Spring Cloud Alibaba 链路追踪",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
        "基础设施"
      ]
    },
    {
      title: "极限编程",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "了解敏捷开发",
        "了解 XP 极限编程"
      ]
    },
    {
      title: "创建项目",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
        "第一个 Vue 应用程序",
        "附：Vue 实例的生命周期",
      ]
    },
    {
      title: "语法篇",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "v-if,v-else",
        "v-else-if",
        "v-for",
      ]
    },
    {
      title: "事件篇",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "v-on"
      ]
    },
    {
      title: "网络篇",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "使用 Axios 实现异步通信",
      ]
    },
    {
      title: "布局篇",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
      children: [
        "",
        "vue-cli 目录结构",
        "vue-cli src 目录",
        "附：Mac 系统操作 Vue 的权限问题"
      ]
    }, {
      title: "Webpack",
      collapsable: false,
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
      sidebarDepth: 5,
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
function mycat() {
  return [
    {
      title: "MyCat 入门",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
        "安装",
        "登录",
        "搭建读写分离",
        "垂直拆分—分库",
        "水平拆分—分表",
        "常用分片规则"
      ]
    },
    {
      title: "MyCat 进阶",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "基于 HA 机制的 Mycat 高可用",
        "Mycat 安全设置",
        "Mycat 监控工具"
      ]
    }
  ]
}
function gradle() {
  return [
    {
      title: "Gradle 入门",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
        "常见的项目构建工具",
        "Gradle 安装",
        "Gradle 项目目录结构",
        "创建 Gradle 项目",
        "修改 Maven 下载源",
        "Wrapper 包装器"
      ]
    },
    {
      title: "Gradle 与 IDEA 整合",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "Groovy 简介",
        "安装 Groovy",
        "创建 Groovy 项目",
        "Groovy 基本语法",
        "在 IDEA 中创建普通 Java 工程",
        "在 IDEA 中创建普通 WEB 项目",
        "项目部署",
        "Gradle 对测试支持"
      ]
    },
    {
      title: "Gradle 进阶",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "项目的生命周期",
        "Settings 文件",
        "Task",
        "Gradle 中的文件操作",
        "Dependencies",
        "Gradle 插件",
        "Build.gradle 文件",
        "Publishing 项目发布",
        "生命周期中 Hook",
        "创建 Springboot 项目",
        "基于 SSM 多模块项目案例",
        "微服务实战"
      ]
    }
  ]
}
function redis() {
  return [
    {
      title: "Redis 入门",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
        "Redis 概述安装",
        "常用五大数据类型",
        "Redis 配置文件介绍",
        "Redis 的发布和订阅",
        "Redis 新数据类型",
        "Jedis",
        "Redis 与 SpringBoot 整合",
      ]
    },
    {
      title: "Redis 进阶",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "Redis 事务—锁机制",
        "Redis 事务—秒杀案例",
        "Redis 持久化—RDB",
        "Redis 持久化—AOF",
        "Redis 主从复制",
        "Redis 集群",
        "Redis 应用问题解决",
        "Redis6 新功能",
      ]
    }
  ]
}
function shiro() {
  return [
    {
      title: "Shiro 入门",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
        "基本使用",
      ]
    },
    {
      title: "Shiro 进阶",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "整合 Spring Boot",
        "整合 Thymeleaf",
        "EhCache",
        "会话管理",
      ]
    }
  ]
}
function distributedLock(){
  return [
    {
      title: "传统锁",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "",
      ]
    },
    {
      title: "Redis 锁",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "基于 Redis 实现分布式锁"
      ]
    },
    {
      title: "Zookeeper 锁",
      collapsable: false,
      sidebarDepth: 5,
      children: [
        "基于 Zookeeper 实现分布式锁"
      ]
    }
  ] 
}