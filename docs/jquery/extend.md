# extend JQuery 扩展方法
```js
/**
 * 在jQuery是扩展更底层的静态方法，在jQuery.fn原型上是扩展实例方法
 */
jQuery.extend = jQuery.fn.extend = function() {};

// 扩展工具方法 $.demo()
$.extend({
  demo(){ alert('$.demo')}
})
// 扩展实例方法
$.fn.extend({
  demo(){ alert('$.fn.demo')}
})
$.demo()
$().demo()
// alert('$.demo')
// alert('$.fn.demo')

// jQuery.extend = jQuery.fn.extend 用的是一个函数，但调用并不冲突，我们扩展的方法分别被挂载到Class和原型上，原因就是隐式绑定this指向
// $.extend() -> this -> $,  this.demo = $.demo
// $.fn.extend() -> this -> $.fn,  this.demo =  $.fn.demo
```
