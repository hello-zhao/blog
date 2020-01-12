---
navbar: false
editLink: false
fontSize: 14px
---

## <center>赵文瑞-前端</center>

##### 基本信息
+ <font size=2>姓名: 赵文瑞</font>
+ <font size=2>联系方式: 18655878206 zhaowenrui5474@gmail.com</font>
+ <font size=2>求职意向: web前端开发/上海</font>
+ <font size=2>前端工作经验: 3.5年</font>
+ <font size=2>学历: 大专</font>

##### 专业技能
<font size=2>熟练掌握 JavaScript(ES6)/jQuery/CSS3/HTML5, 熟悉Vue生态，2年Vue开发经验</font> <br>
<font size=2>熟悉前端工程化, 对NodeJs有一定的了解, 能使用Webpack独立构建并维护大型项目</font> <br>
<font size=2>熟练使用Sass/Less 进行CSS管理、复用; 独立配置Jest + Vue Test Utils 编写unit test</font> <br>
<font size=2>熟练使用Git版本管理工具; 使用ESlint/Prettier做编码约束, 有良好的编码习惯</font> <br>
<font size=2>熟练使用Chrome进行代码调试; 有项目重构经验</font> <br>
<font size=2>熟练使用Axios/Swiper/Bootstrap/Element-UI等三方类库、组件库, 快速响应需求开发</font> <br>


##### 工作经历
**`上海卓赞教育科技有限公司（2016-06-27 至 2019-05-31）`**
1. <font size=2>负责老师端项目的搭建与维护 (老师中心PC/老师App/外教招募)</font>
2. <font size=2>采用主流的构建方式重构旧版 Svn + RequireJS+ Jq的老项目</font>
3. <font size=2>负责老师端Vue基础组件编写、公用方法封装, 老旧项目代码优化, 制定项目迭代计划</font>
4. <font size=2>参与需求评审、技术评审, 对用户体验、项目质量负责</font>
5. <font size=2>配合后台开发、测试等部门定位bug, 保证需求进度</font>

**`上海中优集团 （2015-10 至 2016-05）`**
1. <font size=2>部门购物平台pc端与微信公众号中优医药的样式调整、网页改版</font>
2. <font size=2>天猫、1药网店铺的页面维护</font>
3. <font size=2>熟练处理常见的兼容问题、根据功能需要书写JS脚本</font>

<!-- ##### 项目经历
**<font size=2>老师官网加载优化</font>**
1. <font size=2>官网地址: https://www.dadaabc.com/teacher/landing</font>
1. <font size=2>优化原因: 页面是PC/Mobile响应式页面，图片多，网页加载慢，导致用户体验差，需要优化加载速度提高用户体验和留存率</font>
2. <font size=2>优化方案: 图片懒加载/css、js文件合并/开启Service Worker强制缓存部分图片</font>
5. <font size=2>项目成就: DOMContentLoaded: 785ms -> 300ms内, Load: 2s -> 800 ms  Chrome Audits 评分平均 90+</font> -->

**<font size=2>外教招募系统(2018)</font>**
1. <font size=2>项目价值: 提高欧美外教招募的效率和质量, 以往是通过邮件的方式获取老师资料人工审核, 成本高, 能效低</font>
2. <font size=2>招募流程: 注册 - 简历填写 - 据规则自动筛选合格的老师 - 基本培训 - 预约面试 - 在线面试 - Offer - 老师中心</font>
4. <font size=2>项目难点:</font><br>
  <font size=2>简历表单30多字段实时验证, 保证提交通过率: watch form对象通过策略模式转发至error对象显示错误的提示</font> <br>
  <font size=2>刷新页面后保留用户所填信息, 保证用户的体验: 使用Vuex + LocalStorage</font> <br>
  <!-- <font size=2>老师需要录制5分钟自我介绍视频: 使用navigator.mediaDevices.getUserMedia api 调用用户本地视频做录制</font> <br> -->
  <font size=2>预约面试时间表跨时区, 考虑夏令时: 前端判断是否处于夏令时做相应的处理, 给后台用户本地的时区用于数据过滤</font>
5. <font size=2>项目成就: 招募流程自动化, 减少90%的人力投入</font>

**<font size=2>老师中心/老师App(2017)</font>**
1. <font size=2>服务于外教 (1万人+) 有老师合同、签到打卡、车位管理、上课列表、老师培训、个人中心等等多个模块</font>
2. <font size=2>项目初始是采用 RequireJS + Jq 构建方式, 随着时间迁移, 业务代码堆积不利于维护、不能使用新语法、开发效率低等原因, 使用主流的构建方式重构迭代</font>
3. <font size=2>迭代方案: 充分了解旧版业务逻辑, 新仓库实现公用功能后, 逐个页面重构, 老路由重定向SPA新路由</font>
4. <font size=2>移动端采用Vw单位 + Sass函数适配750设计稿</font>
7. <font size=2>项目难点:</font> <br>
    <font size=2>Webpack配置: 阅读官方文档</font> <br>
    <font size=2>历史文档缺失: 翻看历史产品文档, 逐行阅读代码逻辑, 不影响新需求进度下抽时间迭代重构, 重要功能测试兜底</font> <br>
    <font size=2>老师空闲时间接单系统需要对接实时服务, 业务上有Start、Cancel、Confirm、Enter class四个步骤, 不同步骤按产品逻辑可进行转换: 引入mqtt依赖库做消息订阅, 据需求合理拆分业务组件, 使用Vuex做状态管理</font> <br>
    <font size=2>老师排课车位表车位单元格有类型、图标、文案、色值等组合12种状态, 星期表头与车位表两个同级div横向滚动同步: 组件粒度最小化复用, 使用Vuex数据解耦,监听scroll事件横向同步滚动安卓端卡顿明显, 引入BetterScroll提升用户体验</font>
6. <font size=2>项目成就: 目录划分更合理, 可以模块化拆解需求, 书写新的语法特性, 提升项目可维护性、开发效率(30%)、开发体验、用户体验, 也提升了个人分析问题解决问题的能力, 更新自己的技术栈, 更好的服务于项目</font>

**<font size=2>学生App(2017)</font>**
1. <font size=2>邀请有礼海报分享需求: 用户选择本地图片（可调整位置、缩放、旋转）与海报模板进行拼接, 生成合成图, 分享至微信和app</font>
2. <font size=2>开发思路: 图片本地预览不与服务器交互, 分享时才上传并用图片管道服务与模板图片进行拼接, 使用HammerJS手势库识别用户手势并作用于图片</font>
3. <font size=2>项目难点:</font>
  <font size=2>初始使用canvas方案进行图片合成时需要处理图片中的旋转信息并进行多次canvas转换, 安卓端卡顿明显; 方案改为使用文件服务的图片管道处理进行图片合成</font>
4. <font size=2>项目成就: 用户体验对比竞品更流畅, 功能上线后日分享千次, 引流效果明显</font>
