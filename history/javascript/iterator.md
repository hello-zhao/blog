# 可迭代的 iterator

::: tip 可迭代协议
​定义了一个对象可被迭代的规则：实现一个名为 `Symbol.iterator` 的方法，也称为：`迭代器`法
:::

迭代器协议

- 迭代器是返回一个包含了 next 方法的对象
- next 方法返回一个包含 `done` 和 `value` 的对象
  - done 是一个 boolean 值
      - true 表示迭代结束，此时忽略 value
      - false 表示可继续迭代
  - value 是一个任意类型的值，也就是迭代过程中的值

## 对象新增 iterator 方法

```js
let obj = { x: 1, y: 2 };

obj[Symbol.iterator] = function() {
  let keys = Object.keys(obj);
  let len = keys.length;
  let n = 0;
  return {
    next() {
      if (n < len) {
        return {
          done: false,
          value: {
            k: keys[n],
            v: obj[keys[n++]]
          }
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
};

for (let v of obj) {
  console.log(v);
}
// {k: "x", v: 1}
// {k: "y", v: 2}
```
