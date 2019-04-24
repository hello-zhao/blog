const path = require('path');
const javascriptMenu = require('../javascript/router');

module.exports = {
  title: 'Tom',
  description: 'hello world',
  base: '/blog/',
  serviceWorker: true,
  anchor: 'tom.zhao',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/docs/public/assets'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    repo: 'hello-zhao/blog',
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '有问题？戳我！！！',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Javascript', link: '/javascript/数组' },
      { text: 'Css', link: '/css/css1' },
    ],
    sidebar: {
      '/javascript/': javascriptMenu,
      '/resume/': '',
    },
    // lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: true,
    }
  },
  dest: path.resolve('dist'),
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3], },
  },
  evergreen: true,
}
