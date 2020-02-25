# Jquery 初始化
一般面向对象
```js
function Demo() {}
Demo.prototype.init = function(opts) {
  ...
}
Demo.prototype.css = function(args) {
  ...
}
const demo = new Demo()
demo.init({
  el: '#demo',
  ...
})
demo.css()
demo.html()
```

Jquery函数  $('#el').css().html() 在$函数执行的时候初始化并支持链式操作
```js
// $()执行的时候是由jQuery.fn.init构造函数返回的实例  jQuery.fn.init才是真正的构造函数那它的原型怎么来的？
jQuery = function( selector, context ) {
  // The jQuery object is actually just the init constructor 'enhanced'
  return new jQuery.fn.init( selector, context, rootjQuery );
}

jQuery.prototype = jQuery.fn =  {
  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {}
}

jQuery.fn.init.prototype = jQuery.fn;

// 经过上面的两次赋值操作  jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype
// 有了这层引用关系jQuery.prototype挂载的css、html等方法 new jQuery.fn.init() 返回的jquery实例也能用;
// 也可以说jquery实例的构造函数也就是jQuery函数
// $('body').__proto__ === jQuery.prototype   // true
```
