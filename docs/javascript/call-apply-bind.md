# call、apply、bind

+ call、apply、bind 都改变函数执行时候的this指向，达到借用其他函数调用的目的；
+ 非严格模式下this指向不传或传null，undefined则this指向window，严格模式下指向undefined；
+ call和apply的区别是传参不同，第二个参数：call 开始传入参数列表apply是参数数组(或类数组)；
+ call、apply 和 bind 的区别是call、apply立即执行，而bind是返回一个新的函数用于后续调用；

## call
:::tip 语法
fun.call(thisArg[, arg1[, arg2[, ...]]])
:::
**thisArg** <br>
在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数在非严格模式下运行，则指定为 null 和 undefined 的 this 值会自动指向全局对象（浏览器中就是 window 对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象(Number, Boolean...)。

**arg1, arg2, ...** <br>
指定的参数列表。

**手写call**
```js
Function.prototype.myCall = function(thisArg) {
  // thisArg 新的this指向
  // thisArg指向传入的是 null 或者是 undefined, 那么指向 window/global
  // 如果thisArg传入的不是null或undefined, 那么必须是一个对象(源生的入参类型更多，这里只考虑 typeof 为 object)
  thisArg = thisArg || globalThis;

  const actTime = Date.now();

  // 当前this为要借用的函数方法
  // 绑定函数执行时的this为thisArg;
  thisArg[`myCall${actTime}`] = this;
  // 获取除this指向外的参数
  const rest = [...arguments].slice(1);
  // 返回改变this指向后的函数调用结果
  const result = thisArg[`myCall${actTime}`](...rest);
  delete thisArg[`myCall${actTime}`];
  return result;
}
```

## apply
:::tip 语法
fun.apply(thisArg, [argsArray])
:::
**thisArg** <br>
可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

**argsArray** <br>
可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。

**手写apply**
```js
Function.prototype.myApply = function(thisArg, argsArray) {
  // thisArg 新的this指向
  // thisArg指向传入的是 null 或者是 undefined, 那么指向 window/global
  // 如果thisArg传入的不是null或undefined, 那么必须是一个对象
  if (!thisArg) thisArg = globalThis;
  if (typeof thisArg !== 'object') throw new Error(`新的this指向: ${thisArg}, 请传入对象`);
  // argsArray是数组或者类数组，这里只判断数组
  if (!Array.isArray(argsArray)) throw new Error(`${argsArray}请传入数组`);

  const actTime = Date.now();

  // 当前this为要借用的函数方法
  // 绑定函数执行时的this为thisArg;
  thisArg[`myApply${actTime}`] = this;
  // 返回改变this指向后的函数调用结果
  const result = thisArg[`myApply${actTime}`](...argsArray);
  delete thisArg[`myApply${actTime}`];
  return result;
}
```

## bind
:::tip 语法
fun.bind(thisArg[, arg1[, arg2[, ...]]])
:::
**thisArg** <br>
调用绑定函数时作为this参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用bind在setTimeout中创建一个函数（作为回调提供）时，作为thisArg传递的任何原始值都将转换为object。如果bind函数的参数列表为空，执行作用域的this将被视为新函数的thisArg。

**arg1, arg2, ...** <br>
当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。

**返回值** <br>
返回一个原函数的拷贝，并拥有指定的this值和初始参数。

**手写bind**
```js
Function.prototype.myBind = function(thisArg) {
  if(typeof this !== "function") throw new TypeError("not a function");
  // thisArg 新的this指向
  // thisArg指向传入的是 null 或者是 undefined, 那么指向 window/global
  // 如果thisArg传入的不是null或undefined, 那么必须是一个对象
  if (!thisArg) {
    thisArg = globalThis;
  }
  if (typeof thisArg !== 'object') throw new Error('新的this指向: ' + thisArg + ',应该是个对象');

  const self = this;
  // 获取除this指向外的参数
  const rest = [...arguments].slice(1);

  function Fn() {};
  Fn.prototype = this.prototype;

  let bound = function() {
    // bind传递的参数和函数调用时传递的参数拼接
    let res = [...rest, ...arguments];
    const _thisArg = this instanceof Fn ? this : thisArg || this;
    return self.apply(_thisArg, res);
  }
  //原型链
  bound.prototype = new Fn();
  return bound;
}
```

[参考资料: MDN Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
