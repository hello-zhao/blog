
// 打印顺序？ 为什么？
document.addEventListener('click', () => {
  Promise.resolve().then(() => console.log(1));
  console.log(2);
}, false);

document.addEventListener('click', () => {
  Promise.resolve().then(() => console.log(3));
  console.log(4);
}, false);

// Set 和 Array 的区别?
// set 无序  元素不可重复

// vue 生命周期 都做了哪些事情?; 有父组件 A 子组件 B C, A组件创建到销毁 生命周期顺序是怎么样的？
// 数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等

// vue 销毁做了哪些事情
// parent 的 $children 中删掉自身/ 删除 watcher/ VNode 执行销毁/ 触发destroy钩子函数/ 触发子组件的destroy
//

// 说下你了解的 js的 Even Loop

// 手写 Array filter, 阿斌手写 reduce，到我这变filter了,
// 你可能还需要准备  防抖 节流 new实现 call apply bind 等 手写;

// 怎么实现对象深拷贝

// BFC 是什么？ 说下重排重绘, 你有遇到频繁移动dom,页面卡顿,为什么，你怎样优化？（原理）

// 渲染线程和js进程 是怎么交互的？为什么？（这个原话进不清了，大致是这个意思）

// vue 双向绑定原理，你有了解过虚拟dom的diff算法吗？

// vue 的template 是怎么编译的？

// template 中有 {{name}} {{age}} <dom :name="name" :age="age">  vue 1.x 和 2.x 分辨有多少个 watcher？

// 你有了解过 vue 的 render 方法吗？

// let name = 'tom'; let age = 30; 用正则去替换 let str = 'xxxxx{{name}} xxxx  xx {{age}} xxx';

// vue 中 data 为什么是fun 而不是 对象？

// vue data 中 有 name 属性, 在 mounted 中for遍历 100次 对其赋值, 页面渲染几次？ 为什么？能说下原理吗？

// 组件销毁的时候做了哪些事情？

// 下面代码输出结果? 说说为什么
let i = 0;
for(let i=1; i<10; i++) {
	let i = 100;
	console.log(i);
}
