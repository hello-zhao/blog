
# axios拦截器
**拦截机制**
<br>
<img width="300" :src="$withBase('/lanjiejizhi.jpg')">

```js
class Interceptors {
  list = []
  use(fulfilled, rejected) {
    this.list.push({fulfilled, rejected})
  }
}

class Axios {
  chain = []
  interceptors = {
    request: new Interceptors(),
    response: new Interceptors()
  }

  constructor() {
    this.chain = [{fulfilled: this.request, rejected: undefined}]
  }

  run(config) {
    this.interceptors.request.list.forEach((interceptor) => {
      this.chain.unshift(interceptor)
    })
    this.interceptors.response.list.forEach((interceptor) => {
      this.chain.push(interceptor)
    })

    let promise = Promise.resolve(config)

    while(this.chain.length) {
      const {fulfilled, rejected} = this.chain.shift()
      promise = promise.then(fulfilled, rejected)
    }
    return promise
  }

  request(config) {
    return fetch(
        'https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch',
        config
      ).then((res) => {
        return res.text()
      })
  }
}

const axios = new Axios()
axios.interceptors.request.use(
  function(config) {
    console.log('success req1')
    return config
  },
)
axios.interceptors.request.use(
  function(config) {
    console.log('success req2')
    return config
  },
)
axios.interceptors.response.use(
  function(res) {
    console.log('success res1')
    return res
  },
)
axios.interceptors.response.use(
  function(res) {
    console.log('success res2')
    return res
  },
)
axios.run({demo: 1})

// success req2
// success req1
// success res1
// success res2
```













参考 https://mp.weixin.qq.com/s/HhjDQgK8FcPiy5BEfZ7lYQ
