const path = require('path');
const javascriptMenu = require('../javascript/router');

module.exports = {
  title: 'tom.zhao',
  description: '个人练习记录',
  base: '/blog/',
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Javascript', link: '/javascript/数组' },
      { text: 'Css', link: '/css/css1' },
      { text: 'github', link: 'https://github.com/hello-zhao' },
    ],
    sidebar: {
      '/javascript/': javascriptMenu,
    },
    lastUpdated: '上次更新',
  },
  dest: path.resolve('dist'),
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
}
