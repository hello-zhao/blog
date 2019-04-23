const javascriptMenu =  [{
  title: 'javascript',
  // collapsable: false, // 可选的, 默认值是 true,
  sidebarDepth: 1,    // 可选的, 默认值是 1
  children: [
    '/javascript/数组',
    '/javascript/算法',
    '/javascript/iterator',
    {
      title: '杂项',
      // collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/javascript/杂项/拖拽',
        '/javascript/杂项/文章3',
      ]
    },
  ]
}];

module.exports = javascriptMenu;
