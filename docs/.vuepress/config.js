const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "Cisyam",
  description: '一个基于VuePress的 知识管理&博客 主题',
  base: '/blogs/',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { 
        text: '首页', 
        link: '/' 
      },
      { 
        text: '程序日常',  
        items: [
        {
          text: '日常配置', items: [
            { text: '系统重装日记', link: '/pages/0ec974/' },
            { text: 'IDEA日常配置和操作小结', link: '/pages/63554c/' },
            { text: '在IDEA中配置Git的Push键', link: '/pages/97b3a1/' },
            { text: 'Git的安装以及SSH配置', link: '/pages/8cab39/' },
            { text: 'win11下的Maven安装配置教程', link: '/pages/5e65f3/' },
            { text: '基于jmeter完成压测', link: '/pages/bc4cea/' },
            { text: 'Typora+PicGo+阿里云OSS搭建博客图床', link: '/pages/513ac4/' },
            { text: 'Git图文使用教程详解(一)', link: '/pages/79620e/' },
            { text: 'Git图文使用教程详解(二)', link: '/pages/7e3ca6/' },
            { text: 'Git图文使用教程详解(三)', link: '/pages/c6a5fd/' },
          ]
        },
        {
          text: 'Bug修复', items: [
            { text: 'Java连接SqlServer错误', link: '/pages/c1d525/' },
          ]
        }
      ]
      },

      { 
        text: 'Java基础',  
        items: [
          { text: '初始Java基础知识', link: '/pages/882008/' },
          {
            text: 'Java集合', 
            items: [
              { text: '初始Java基础知识', link: '/pages/882008/' },
            ]
          },
          {
            text: 'Java知识点', 
            items: [
              { text: 'Thymeleaf一篇就够了', link: '/pages/868901/' },
            ]
          },
        ]
      },

      { 
        text: 'Java进阶',  
        items: [
          { text: '泛型就这么简单', link: '/pages/e32cf5/' },
          {
            text: 'IO流', 
            items: [
              { text: 'Thymeleaf一篇就够了', link: '/pages/868901/' },
            ]
          },
          {
            text: 'JVM', 
            items: [
              { text: 'Java内存区域介绍以及JDK1.8内存变化', link: '/pages/8b1290/' },
            ]
          },
        ]
      },

      { 
        text: '数据库',  
        items: [
          {
            text: 'MySQL基础知识', 
            items: [
                { text: '数据库原理及应用', link: '/pages/6ca3af/' },
                { text: 'MySQL 8.0 绿色版安装', link: '/pages/460b04/' },
            ]
          },
          {
            text: '康师傅MySQL基础篇', 
            items: [
              { text: '第01章_数据库概述', link: '/pages/37fc57/' },
              { text: '第02章_MySQL环境搭建', link: '/pages/f3f3ab/' },
              { text: '第03章_基本的SELECT语句', link: '/pages/1e92f0/' },
              { text: '第04章_运算符', link: '/pages/0cd93d/' },
              { text: '第05章_排序与分页', link: '/pages/f60350/' },
              { text: '第06章_多表查询', link: '/pages/79f1c4/' },
              { text: '第07章_单行函数', link: '/pages/9757a1/' },
              { text: '第08章_聚合函数', link: '/pages/e8846a/' },
              { text: '第09章_子查询', link: '/pages/0ececa/' },
              { text: '第10章_创建和管理表', link: '/pages/667605/' },
              { text: '第11章_数据处理之增删改', link: '/pages/07f3df/' },
              { text: '第12章_MySQL数据类型精讲', link: '/pages/b3a365/' },
              { text: '第13章_约束', link: '/pages/6bfb13/' },
              { text: '第14章_视图', link: '/pages/745f2d/' },
              { text: '第15章_存储过程与函数', link: '/pages/8c180e/' },
              { text: '第16章_变量、流程控制与游标', link: '/pages/566d1d/' },
              { text: '第17章_触发器', link: '/pages/afb0d0/' },
              { text: '第18章_MySQL8其它新特性', link: '/pages/15bba8/' }                      
            ]
          },
          {
            text: '康师傅MySQL高级篇', 
            items: [
              { text: '第01章 Linux下MySQL的安装与使用', link: '/pages/80d360/' },
              { text: '第02章 MySQL的数据目录', link: '/pages/f532a4/' },
              { text: '第03章 用户与权限管理', link: '/pages/a5fa3c/' },
              { text: '第04章_逻辑架构', link: '/pages/b462b5/' },
              { text: '第05章_存储引擎', link: '/pages/a5b6cd/' },
              { text: '第06章_索引的数据结构', link: '/pages/4eb165/' },
              { text: '第7章_InnoDB数据存储结构', link: '/pages/85a02c/' },
              { text: '第8章_索引的创建与设计原则', link: '/pages/badf0e/' },
              { text: '第09章_性能分析工具的使用', link: '/pages/0e9cf5/' },
              { text: '第10章_索引优化与查询优化', link: '/pages/baf28a/' },
              { text: '第11章_数据库的设计规范', link: '/pages/a30800/' },
              { text: '第12章_数据库其它调优策略', link: '/pages/453178/' },
              { text: '第13章_事务基础知识', link: '/pages/2f2499/' },
              { text: '第14章_MySQL事务日志', link: '/pages/e14c2c/' },
              { text: '第15章_锁', link: '/pages/52fd96/' },
              { text: '第16章_多版本并发控制', link: '/pages/dc28af/' },
              { text: '第17章_其他数据库日志', link: '/pages/0aeb1a/' },
              { text: '第18章_主从复制', link: '/pages/e50c30/' },
              { text: '第19章_数据库备份与恢复', link: '/pages/92db10/' }                      
            ]
          },
            {
              text: 'MySQL进阶知识', 
              items: [
                { text: 'MySQL里的那些日志们', link: '/pages/ad9574/' }    
              ]
          }
        ]
      },


      { 
        text: '框架', 
        items: [
          { text: ' SSM整合完整流程', link: '/pages/b40868/' },
          {
            text: 'MyBatis', items: [
              { text: '框架', link: '/pages/b40868/' },
            ]
          },
          {
            text: 'Spring', items: [
              { text: 'Spring5学习笔记——工厂', link: '/pages/e6482d/' },
              { text: 'Spring5学习笔记——AOP', link: '/pages/99543d/' },
              { text: 'Spring5学习笔记——持久层整合', link: '/pages/e630fa/' },
              { text: 'Spring5学习笔记——MVC框架整合', link: '/pages/667215/' },
              { text: 'Spring5学习笔记——注解编程', link: '/pages/398673/' },
            ]
          },
          {
            text: 'SpringMVC', items: [
              { text: '框架', link: '/pages/b40868/' },
            ]
          }
      ]
      },

      { 
        text: '中间件',  
        items: [
          { text: '中间件', link: '/pages/52d5c3/' }
        ]
      },

      { 
        text: '微服务',  
        items: [
          { text: '微服务', link: '/pages/6fc14f/' }
        ]
      },

      { 
        text: '计算机基础',  
        items: [
          { text: '程序员必知必会之计算机系统概论', link: '/pages/a2a23c/' }
        ]
      },

      { 
        text: '项目',  
        items: [
          { text: '云上办公系统', link: '/pages/61babd/' }
        ]
      },

      { 
        text: '面试题',  
        items: [
          { text: '面试题', link: '/pages/964e0e/' }
        ]
      },


      // {
      //   text: '指南', link: '/pages/a2f161/', items: [
      //     { text: '主题初衷与诞生', link: '/pages/52d5c3/' },
      //     { text: '介绍', link: '/pages/a2f161/' },
      //     { text: '快速上手', link: '/pages/793dcb/' },
      //     { text: '目录结构', link: '/pages/2f674a/' },
      //     { text: '核心配置和约定', link: '/pages/33d574/' },
      //     { text: '自动生成front matter', link: '/pages/088c16/' },
      //     { text: 'Markdown 容器', link: '/pages/d0d7eb/' },
      //     { text: 'Markdown 中使用组件', link: '/pages/197691/' },
      //     {
      //       text: '相关文章', items: [
      //         { text: '使目录栏支持h2~h6标题', link: '/pages/8dfab5/' },
      //         { text: '如何让你的笔记更有表现力', link: '/pages/dd027d/' },
      //         { text: '批量操作front matter工具', link: '/pages/2b8e22/' },
      //         { text: '部署', link: '/pages/0fc1d2/' },
      //         { text: '关于写文章和H1标题', link: '/pages/9ae0bd/' },
      //         { text: '关于博客搭建与管理', link: '/pages/26997d/' },
      //         { text: '在线编辑和新增文章的方法', link: '/pages/c5a54d/' },
      //       ]
      //     }
      //   ]
      // },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Cisyam', // 必需
      href: 'https://github.com/gaoziman' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:2942894660@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/gaoziman'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2023, // 博客创建年份
      copyrightInfo: 'Cisyam | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    // [
    //   {
    //     name: 'custom-plugins',
    //     globalUIComponents: ["GlobalTip"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    //   }
    // ],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
