module.exports = {
  title: "HuiChe",
  description: "基于SpringBoot,QueryDsl 的 Java 快速开发框架",
  base: "/huiche_docs/",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/fav.ico"
      }
    ]
  ],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 22,
    sidebarDepth: 2,
    repo: "jmjlbmn/huiche",
    docsRepo: "jmjlbmn/huiche_docs",
    docsDir: "docs",
    lastUpdated: "上次更新",
    editLinks: true,
    editLinkText: "帮忙完善此页面",
    nav: [
      {
        text: "使用指南",
        link: "/guide/"
      },
      {
        text: "使用示例",
        link: "https://github.com/jmjlbmn/huiche-examples/"
      },
      {
        text: "更新历史",
        link: "http://huiche.org/guide/change.html"
      },
      {
        text: "JavaDoc",
        link: "https://apidoc.gitee.com/jmjlbmn/huiche/"
      }
    ],
    sidebar: {
      "/guide/": [
        "",
        "data",
        "dao",
        "service",
        "web",
        "predicate",
        "search",
        "validate",
        "sql",
        "import",
        "change"
      ]
    }
  }
};
