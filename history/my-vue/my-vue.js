class MyVue {
  constructor(options) {
    this.$options = options;
    this._data = options.data;
    this.objserver(this._data);
    this.compile(options.el);
  }
  objserver(data) {
    Object.keys(data).forEach((key) =>{
      let val = data[key];
      let dep = new Dep();
      Object.defineProperty(data, key, {
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return val;
        },
        set(newVal) {
          val = newVal;
          dep.notify(newVal);
          return newVal;
        },
      });
    });
  }
  compile(el) {
    let element = document.querySelector(el);
    this.deepCompileNodes(element);
  }
  deepCompileNodes(element) {
    let childNodes = element.childNodes;
    [...childNodes].forEach((node) => {
      if (node.nodeType === 3) {
        // 文本
        const reg = /\{\{\s*(\S*)\s*\}\}/;
        let textContent = node.textContent;
        if (reg.test(textContent)) {
          node.textContent = textContent.replace(reg, this._data[RegExp.$1]);
          new Watcher(this, RegExp.$1, function(newVal) {
            node.textContent = textContent.replace(reg, newVal);
          });
        }
      } else if (node.nodeType === 1) {
        // 标签
      }
      if (node.childNodes.length) {
        this.deepCompileNodes(node);
      }
    });
  }
}
