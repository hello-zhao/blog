# 策略模式

::: tip
一个基于策略模式的程序至少由两部分组成。
+ 第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
+ 第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。
+ 优点：能减少大量的if语句、复用性好
:::

```js
import isPlainObject from 'lodash/isPlainObject';

// for of 对象
function iterator(obj) {
  return function() {
    const keys = Object.keys(obj);
    const len = keys.length;
    let n = -1;
    return {
      next() {
        n += 1;
        if (n < len) {
          return {
            done: false,
            value: {
              key: keys[n],
              value: obj[keys[n]],
            },
          };
        }
        return {
          done: true,
        };
      },
    };
  };
}

function addIterator(obj) {
  if (!obj[Symbol.iterator]) {
    obj[Symbol.iterator] = iterator(obj);
  }
}

// 定义策略
const strategy = {
  isNotEmpty(val) {
    if (val) return true;
    return false;
  },
  isMobile(val) {
    if(/^1[3|5|8][0-9]{9}$/.test(val)) return true;
    return false;
  }
}

// Context 接受客户的请求委托给相应的策略
class FromValidator {
  constructor() {
    this.strategy = strategy;
    this.fields = {};
    addIterator(this.fields);
    this.errors = [];
    this.actField = '';
  }

  addRules(rule, errMsg) {
    const {actField} = this;
    if (!strategy[rule] && typeof rule !== 'function') {
      throw new Error('未包含此策略，请写入自定义策略函数');
    }
    this.fields[actField].push({rule, errMsg});
    return this;
  }

  addField(field) {
    if (this.fields[field]) throw new Error('已包含该字段验证');
    this.fields[field] = [];
    this.actField = field;
    return this;
  }

  addError(title, description) {
    this.errors.push([ title, description ]);
  }

  check(descriptor) {
    this.errors = [];
    if (!isPlainObject(descriptor)) throw new Error('check方法应该传入对象');
    addIterator(descriptor);
    for (const field of this.fields) {
      const testVal = descriptor[field.key];
      for (const item of field.value) {
        const notRule = typeof item.rule === 'string' && !this.strategy[item.rule](testVal);
        const notSelfRule = typeof item.rule === 'function' && !item.rule(testVal);
        if (notRule || notSelfRule) {
          this.addError(field.key, item.errMsg);
          break;
        }
      }
    }
    if (this.errors.length) {
      return Promise.reject(this.errors);
    }
    return Promise.resolve();
  }
}

const validator = new FromValidator();

const maxLength = (val) => val.length < 8;

// 添加校验规则
validator
.addField('name').addRules('isNotEmpty', '用户名不能为空').addRules(maxLength, '用户名不能超过8个字符')
.addField('phone').addRules('isNotEmpty', '手机号不能为空').addRules('isMobile', '请输入正确的手机号')

const fieldVal = {
  name: 'tom.zhao',
  phone: '',
}

// 校验
validator.check(fieldVal).then(() => {
  // do someing
}).catch((err) => {
  console.log(err);
  // (2) [Array(2), Array(2)]
  //     0: (2) ["name", "用户名不能超过8个字符"]
  //     1: (2) ["phone", "手机号不能为空"]
  //     length: 2

  // do someing
});

```
