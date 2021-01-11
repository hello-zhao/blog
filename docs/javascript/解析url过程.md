# 输入url回车都经历了什么
:::tip
+ 用户输入 URL 地址
+ 对 URL 地址进行 DNS 域名解析
+ 建立 TCP 连接（三次握手）
+ 浏览器发起 HTTP 请求报文
+ 服务器返回 HTTP 响应报文
+ 关闭 TCP 连接（四次挥手）
+ 浏览器解析文档资源并渲染页面
:::

## DNS 解析
1. 浏览器在自身缓存中查找 DNS 中的解析记录(存在且未过期则返回IP地址,解析结束)
2. 查找操作系统中的 hosts 文件是否有该域名的 DNS 解析记录(存在且未过期则返回IP地址,解析结束)
3. DNS服务器递归查找

## TCP 建立连接 (三次握手)
1. `我可以连你嘛？` 客户端发送一个包给服务器，服务器收到回确认客户端是状态是ok的
2. `可以。` 服务器发送一个包给客户端，客户端收到后确认服务器状态是好的，也确认自己也是没问题的
3. `那我连了。` 服务器收到后，确认服务器的收发能力也是ok的；开始建立正常的通信


## TCP 断开连接（四次挥手）
1. `客户端：我要睡了` Client 向 Server 发送一个网络包，告诉并停止再发送数据，主动关闭 TCP 进入FIN-WAIT-1（终止等待1）状态，等待 Server 的确认。
2. `服务端：嗯，睡吧，晚安` Server收到 Client 的网络包后即发出确认关闭的网络包，Server 进入 CLOSE-WAIT（关闭等待）状态，此时的 TCP 处于半关闭状态，Client 到 Server 的连接释放。
3. `服务端：我也要睡了` Server 已经没有要向 Client 发出的数据了，Server 再次发出确认关闭的包，Server 进入 LAST-ACK（最后确认）状态，等待 Client 的确认。
4. `客户端：晚安，好梦` Client 收到 Server 的连接释放报文段后，对此发出确认关闭的包，Client 进入 TIME-WAIT（时间等待）状态，经过时间等待计时器设置的时间后，Client 才进入 CLOSED 状态。

## 浏览器渲染页面
1. 浏览器通过 HTMLParser 根据深度遍历的原则把 HTML 解析成 DOM Tree。
2. 浏览器通过 CSSParser 将 CSS 解析成 CSS Rule Tree（CSSOM Tree）。
3. Dom 解析 和 Css解析并行处理，CSS加载不会阻塞DOM的解析
3. 浏览器将 JavaScript 通过 DOM API 或者 CSSOM API 将 JS 代码解析并应用到布局中，按要求呈现响应的结果。
4. 根据 DOM 树和 CSSOM 树来构造 render Tree。
5. Render Tree是依赖于DOM Tree和CSSOM Tree的，Css加载是会阻塞Dom的渲染的
5. layout：重排（也可以叫回流），当 render tree 中任一节点的几何尺寸发生改变，render tree 就会重新布局，重新来计算所有节点在屏幕的位置。
6. repaint：重绘，当 render tree 中任一元素样式属性（几何尺寸没改变）发生改变时，render tree 都会重新画，比如字体颜色，背景等变化。
7. paint：遍历 render tree，并调动硬件图形 API 来绘制每个节点。

<!-- ![](../../assets/url.png) -->

[参考链接](https://juejin.im/post/5c87b54ce51d455f7943dddb#chapter-three)
