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
      lang: "zh-CN",
      title: "我的日记",
      description: "方便阅读和寻找"
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
        label: "简体中文",
        selectText: "Languages",
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
          "/servlet/": genServletSidebar(),
          "/spring-web/": genSpringwebSidebar(),
          "/spring-mvc/": genSpringmvcSidebar(),
          "/mybatis/": genMybatisSidebar(),
          "/myshop1/": genMyshop1Sidebar(),
          "/spring-transaction/": genSpringTransactionSidebar(),
          "/apache-http-client/": genApachehttpclientnSidebar(),
          "/myshop2/": genMyshop2Sidebar(),
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
        "GitFlow工作流"
      ]
    },
    {
      title: "运维",
      collapsable: false,
      children: [
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
        "Git工作流简介"
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
        "bootstrap简介",
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
function genServletSidebar() {
  return [
    {
      title: "综合复习",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
}
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
function genMyshop1Sidebar() {
  return [
    {
      title: "项目实战 MyShop（上）",
      collapsable: false,
      children: [
        ""
      ]
    }
  ];
}
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
        "Apache HttpClient",
        "Jackson",
        "创建 API 接口模块",
        "你怎么理解 RESTful",
        "什么是幂等性",
        "实现 RESTful 风格的 API"
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