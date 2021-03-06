const vssue = require("./vssueConf.js");
const pwa = require("./pwaConf.js");
module.exports = [
  pwa,
  [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }
  ],
  ["@vuepress/back-to-top"],
  ["@vuepress/nprogress"],
  [
    "vuepress-plugin-clean-urls",
    {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html"
    }
  ],

  //图片放大
  // [
  //   "vuepress-plugin-medium-zoom", {
  //     selector: "p img",
  //     delay: 1000,
  //     options: {
  //       margin: 24,
  //       background: "#ffffff",
  //       scrollOffset: 0
  //     }
  //   }
  // ],
  [
    "vuepress-plugin-zooming",
    {
      selector: "p img",
      delay: 1000,
      options: {
        bgColor: "#ffffff",
        zIndex: 10000,
        bgOpacity: 0.6,
        scaleExtra: 1,
        transitionDuration: 0.2
      }
    }
  ],

  //自动分组
  ["vuepress-plugin-auto-sidebar", {}],

  //自定义md容器
  [
    "vuepress-plugin-container",
    {
      type: "PL",
      before: file =>
        `<div class="ProductList"><SP file="${file}" height="200" /><div><p>`,
      after: "</p></div></div>"
    }
  ],

  vssue,

  [
    "named-chunks",
    {
      pageChunkName: page => "page" + page.key.slice(1),
      layoutChunkName: layout => "layout-" + layout.componentName
    }
  ],
  ["vuepress-plugin-table-of-contents"],

  [
    "seo",
    {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => "/favicon.jpeg",
      type: $page =>
        ["articles", "posts", "blog"].some(folder =>
          $page.regularPath.startsWith("/" + folder)
        )
          ? "article"
          : "website",
      url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        ($site.themeConfig.domain || "") + $page.frontmatter.image,
      publishedAt: $page =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    }
  ],
  ["pangu"],
  ["reading-progress", {}],
  ["vuepress-plugin-baidu-autopush"],
  [
    "vuepress-plugin-code-copy",
    {
      //selector: String,
      //align: String,
      color: "#55ae9c",
      backgroundTransition: true,
      backgroundColor: "#ffffff",
      successText: "复制成功"
    }
  ],
  // ["element-ui"],
  [
    "sitemap",
    {
      hostname: "https://b-tree.studio"
    }
  ],
  [
    require("./../plugin/vuepress-plugin-music-bar/index.js"),
    {
      playList: [], //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空数组
      platform: [
        //TODO:多平台支持,默认为空数组
        {
          name: "music.163.com", //网易云
          playListID: ["4909779787"] //支持多个歌单 ID
        }
      ],

      timeOut: 2000, //加载超时,单位毫秒,默认2秒

      firstClickPlay: true, //首次点击bar自动播放,对移动端友好

      background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)" //主容器样式

      //debugMode: <Boolean> 开发模式, dev 环境下输出 log 到 console 默认开启

      //frameColor: <String> 框架颜色,默认为 $accentColor
    }
  ]
  // [
  //   "music-bar",
  //   {
  //     platform: "music.163.com",
  //     options: {
  //       PlayListId: "4909779787"
  //     },
  //     FirstClickPlay: true,
  //     background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
  //   }
  // ]
];
