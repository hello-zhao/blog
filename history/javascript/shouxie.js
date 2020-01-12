
// 防抖
const debounce = (fn, wait = 1000) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
};

const deb = (fn, wait) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

const thr = function(fn, wait) {
  let falg = false;
  return (...args) => {
    if (falg) return;
    falg = true;
    setTimeout(() => {
      fn.apply(this, args);
      falg = false;
    }, wait);
  }
}


// 节流
const throttle = (fn, wait = 1000) => {
  let flag = false;
  return (...args) => {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      fn.apply(this, args);
      flag = false;
    }, wait);
  }
}

// 深克隆
function deepCopy(obj, copy = {}) {
  let baseArr = ['Number', 'String', 'Boolean', 'Null', 'Undefined', 'Symbol'];
  for(let key in obj) {
    const type = Object.prototype.toString.call(obj[key]);
    const isBase = baseArr.some((str) => type.includes(str));
    if (isBase) {
      copy[key] = obj[key];
    } else {
      const Constructor = obj[key].constructor;
      copy[key] = new Constructor();
      deepCopy(obj[key], copy[key]);
    }
  }
  return copy;
}

// new
function myNew(func) {
  let baseArr = ['Number', 'String', 'Boolean', 'Null', 'Undefined', 'Symbol'];
  let target = {};
  target.__proto__ = func.prototype;
  let res = func.call(target);
  const type = Object.prototype.toString.call(res);
  const isBase = baseArr.some((str) => type.includes(str));
  return isBase ? target : res;
}


Function.prototype.myCall = function (context, ...rest) {
  const context = context || window
  context.fn = this;
  const result = context.fn(...rest)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context, argsArray = []) {
  const context = context || window
  context.fn = this;
  const result = context.fn(...argsArray);
  delete context.fn;
  return result
}

Function.prototype.myBind = function (context, ...rest) {
  const context = context || window;
  const _this = this
  // 返回一个函数
  return function F(...args) {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...rest, ...args);
    }
    return _this.apply(context, [...rest, ...args]);
  }
}
demo.bind(window);

Array.prototype.myMap = function(fn, _this = this) {
  return this.reduce((acc, cur, index, array) => {
    return [...acc, fn.call(_this, cur, index, array)];
  }, []);
}

Array.prototype.myFilter = function(fn, _this = this) {
  return this.reduce((acc, cur, index, array) => {
    let flag = fn.call(_this, cur, index, array) || [];
    return [...acc, ...(flag ? [cur] : [])];
  }, []);
}

Array.prototype.myFind = function(cb, _this = this) {
  return this.reduce((res, cur, index, array) => {
    return res || (cb.call(_this, cur, index, array) ? cur : null);
  }, null);
};

Array.prototype.myForEach = function(cb, _this = this) {
  return this.reduce((res, cur, index, array) => {
    cb.call(_this, cur, index, array);
    return res;
  }, undefined);
};

Array.prototype.reduce= function(fn, finish){
	let arr = this;
	let index = 0;
	if(finish === undefined){
		index = 1;
		finish = arr[0];
	}
	for(;index<arr.length;index++){
    finish = fn(finish, arr[index], index, arr);
	}
	return finish;
}

// 斐波那契数列
function fib(n) {
  if (n === 1 || n === 2) return n - 1;
  return fib(n - 1) + fib(n - 2);
}

// 柯理化
function fn(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  let args = []; // 参数集合
  return function bar() {
    args = [...args, ...arguments]; // 收集参数
    if (args.length >= fn.length) {
        return fn.apply(this, args);
    }
    return bar;
  }
}
