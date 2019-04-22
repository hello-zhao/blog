const javascriptMenu =  [{
  title: 'javascript',
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 1,    // 可选的, 默认值是 1
  children: [
    '/javascript/数组',
    '/javascript/算法',
    {
      title: '分类1',
      // collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/javascript/分类1/文章2',
        '/javascript/分类1/文章3',
      ]
    },
  ]
}];

module.exports = javascriptMenu;
