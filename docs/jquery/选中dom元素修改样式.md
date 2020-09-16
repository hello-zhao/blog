# 选中dom元素修改样式

**$('li').css('background-color', 'blue')发生了什么?**
```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
<script>
$('li').css('background-color', 'blue')
</script>
```
<ul class="test">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
<script>
$('.test li').css('background-color', '#f5f5f5');
</script>
先看下 $('li') 的返回值：<br>

```js
/**
 * 进入init构造函数
 * 命中 typeof selector === "string"
 * 执行rootjQuery.find( 'li' );
 * 返回dom元素数组
*/
console.log( $('li'))
init(4) [li, li, li, li,prevObject: init(1), context: document, selector: "li"]
0: li
1: li
2: li
3: li
length: 4
prevObject: init [document, context: document]
context: document
selector: "li"
```

之后执行css方法也就是遍历操作
```js
// 执行 jQuery.access 方法传入this也就是 $('li')返回的jq对象，和callback用于遍历执行
...
css: function( name, value ) {
  return jQuery.access( this, function( elem, name, value ) {
    var styles, len,
      map = {},
      i = 0;

    if ( jQuery.isArray( name ) ) {
      styles = getStyles( elem );
      len = name.length;

      for ( ; i < len; i++ ) {
        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
      }

      return map;
    }

    return value !== undefined ?
      jQuery.style( elem, name, value ) :
      jQuery.css( elem, name );
  }, name, value, arguments.length > 1 );
},
...
access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
  ...
  } else if ( value !== undefined ) {
    chainable = true;


    if ( fn ) {
      for ( ; i < length; i++ ) {
        fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
      }
    }
  }

  return chainable ?
    elems :
    ...
},
```
