# 深入了解jquery

```js
(function(){

	定义了一些变量和函数 jQuery = function(){};

	给JQ对象，添加一些方法和属性 jQuery.fn = jQuery.prototype = {...}

	extend : JQ的继承方法

	jQuery.extend : 扩展一些工具方法

	Sizzle : 复杂选择器的实现 可独立使用

	Callbacks : 回调对象 : 对函数的统一管理

	Deferred : 延迟对象 : 对异步的统一管理

	data : 数据缓存

	queue: 队列方法 : 执行顺序的管理

	on() trigger() : 事件操作的相关方法

	attr() prop() val() addClass()等 : 对元素属性的操作

	DOM操作 : 添加 删除 获取 包装 DOM筛选

	css() : 样式的操作

	提交的数据和ajax() : ajax() load() getJSON()

	animate() : 运动的方法

	offset() : 位置和尺寸的方法

	JQ支持模块化的模式

	window.jQuery = window.$ = jQuery;

})();
```
