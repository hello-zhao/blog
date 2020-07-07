module.exports = {
  base: '/blog/',
  dest: 'dist',
  title: 'Vue.js 技术揭秘',
  description: 'Analysis vue.js deeply',
  head: [
    ['script', { src: 'https://cdn.bootcss.com/jquery/2.0.3/jquery.js' }],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'blog',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'javascript',
        link: '/javascript/'
      },
      {
        text: 'jquery',
        link: '/jquery/'
      },
      {
        text: '设计模式',
        link: '/设计模式/'
      },
    ],
    sidebar: {
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
          children: [
            ['/javascript/', 'Introduction'],
            '拖拽',
            '堆-栈-事件循环-宏微任务',
            '防抖-节流',
            '构造函数原型继承',
            '数组',
            'call-apply-bind',
            'LHS和RHS查询',
            'iterator',
            'new',
            'repaint-reflow',
            '解析url过程',
            'web-rtc',
            '代码插桩',
          ]
        },
      ],
      '/jquery/': [
        {
          title: 'jquery',
          collapsable: false,
          children: [
            ['/jquery/', 'Introduction'],
            'init',
            `选中dom元素修改样式`,
            'jquery实例方法',
            'extend',
          ]
        },
      ],
      '/设计模式/': [
        {
          title: '准备工作',
          collapsable: false,
          children: [
            ['/设计模式/', 'Introduction'],
            '策略模式',
            '实现axios拦截器机制',
          ]
        },
      ],
      // '/javascript/': [
      //   {
      //     title: '准备工作',
      //     collapsable: false,
      //     children: [
      //       ['compile/', 'Introduction'],
      //       'compile/codegen',
      //       'compile/entrance',
      //       'compile/optimize',
      //       'compile/parse',
      //       'test1',
      //       'test2',
      //     ]
      //   },
      // ],
    }
  }
}
