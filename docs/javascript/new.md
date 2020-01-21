# new 关键字

new命令的作用，就是执行构造函数，返回一个实例化对象。

```js
const Tom = function () {
  this.name = 'tom';
  this.age = 30;
};

const v = new Tom();
v.name // tom
```

上面代码通过new命令，让构造函数生成一个实例对象，保存在变量v中。这个新生成的实例对象，从构造函数得到了name属性。<br>
`new命令执行时，构造函数内部的this，就代表了新生成的实例对象`

**new都做了什么？**
1. 创建一个空对象，作为将要返回的对象实例。
2. 将这个空对象的原型，指向构造函数的prototype属性。
3. 将这个空对象赋值给函数内部的this关键字。
4. 开始执行构造函数内部的代码。
5. 如果函数没有返回其他对象，那么this指向这个新对象，否则this指向构造函数中返回的对象。

```js
function new(func) {
    let target = {};
    target.__proto__ = func.prototype;
    let res = func.call(target);
    if (typeof(res) == "object" || typeof(res) == "function") {
    	return res;
    }
    return target;
}
```
