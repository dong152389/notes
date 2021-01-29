module.exports = {
  dest: "notes",
  base: "/mynote/",
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
        "",
        "bootstrap简介",
        "bootstrap环境安装",
        "bootstrap网格系统"
      ]
    }
  ];
}