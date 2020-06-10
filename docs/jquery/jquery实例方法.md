# pushStack
```js
pushStack: function( elems ) {

  // Build a new jQuery matched element set
  var ret = jQuery.merge( this.constructor(), elems );

  // Add the old object onto the stack (as a reference)
  ret.prevObject = this;
  ret.context = this.context;

  // Return the newly-formed element set
  return ret;
},
```
这个方法内部用的比较多，stack， 先进后出，我们知道jq在操作dom元素的时候可以进行链式操作
```js
// 此时div是prevObject 当前context是span，所以是span的颜色改变
$('div').pushStack('span').css('color', '#fff')
```

# end
```js
end: function() {
  return this.prevObject || this.constructor(null);
},
```
当我们想回溯上一级并修改样式就可以用到实例的end方法
```js
// 调用end方法 this通过prevObject由指回div，所以div的背景色改变
$('div').pushStack('span').css('color', '#fff').end().css('background-color', '#fff')
```
