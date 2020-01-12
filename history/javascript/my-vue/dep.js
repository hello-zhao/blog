class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify(newVal) {
    this.subs.forEach((v) => {
      v.update(newVal);
    });
  }
}

class Watcher{
  constructor(vm, exp, callback) {
    Dep.target = this;
    vm._data[exp];
    Dep.target = null;
    this.callback = callback;
  }
  update(newVal) {
    this.callback(newVal);
  }
}
