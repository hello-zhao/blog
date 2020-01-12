# mongodb
## mongodb 服务
+ 启动: brew services start mongodb-community@4.0
+ 关闭: brew services stop mongodb-community@4.0
+ 客户端链接服务: mongo

## MongoDB的存储结构
+ 库下面是集合，集合下面是文件

## shell命令
+ 查看存在数据库命令：show dbs
+ 查看数据库版本命令：db.version()
+ use 数据库名：进入数据库，没有则新建
+ show collections: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）
+ db:显示当前位置
+ db.集合.insert({“name”:”jspang”})： 新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。
+ db.集合.find() :查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。
+ db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
+ db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。db.user.update({"name":"user"},{"name":"user","age":"32"})
+ db.集合.remove({“name”:user})：删除文件数据，注意的是要跟一个条件。
+ db.集合.drop( ):删除整个集合
+ db.dropDatabase( ):删除整个数据库

## js文件执行 mongo 命令
```js
var userName="jspang";    //声明一个登录名
var timeStamp=Date.parse(new Date());     //声明登录时的时间戳
var jsonDdatabase={"loginUnser":userName,"loginTime":timeStamp}; //组成JSON字符串
var db = connect('log');   //链接数据库
db.login.insert(jsonDdatabase);  //插入数据

print('[demo]log  print success');  //没有错误显示成功

// 执行文件 shell: mongo goTask.js
```

## 正确更新数据
+ 修改数据：db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
+ 修改嵌套属性：db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
+ 删除一个key:value: db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
+ 只修改数字：db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})
+ 多项添加数据：db.workmate.update({},{$set:{interset:[]}},{multi:true})
+ 没有找到，则直接添加数据：db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})

## update数组修改器
* $push追加数组/内嵌文档值
+ db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
+ db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})

* $ne查找是否存在(没有则修改，有则不修改)
+ 它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行，这个很容易弄反，记得我刚学的时候就经常弄反这个修改器的作用，给自己增加了很多坑。
+ db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})

* $addToSet 升级版的$ne
+ 它是$ne的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比$en用的多。
+ db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})

* $each 批量追加
+ 它可以传入一个数组，一次增加多个值进去，相当于批量操作，性能同样比循环操作要好很多，这个是需要我们注意的，工作中也要先组合成数组，然后用批量的形式进行操作。
```js
var newInterset=["Sing","Dance","Code"];
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
```

* $pop 删除数组值

+ $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。
+ 1：从数组末端进行删除
+ -1：从数组开端进行删除
+ db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})

* 数组定位修改
+ 有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。
例子，比如我们现在要修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的。
+ db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})

## 应答式写入
* db.runCommand();
+ false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
+ true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
+ getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
+ printjson：表示以json对象的格式输出到控制台。
```js
db.workmate.update({sex:1},{$set:{money:1000}},false,true)
var resultMessage=db.runCommand({getLastError:1})
printjson(resultMessage);

// console.log
{
  "connectionId" : 1,
  "updatedExisting" : true,
  "n" : 2,
  "syncMillis" : 0,
  "writtenTo" : null,
  "err" : null,
  "ok" : 1
}
```

* findAndModify
+ findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果。
+ findAndModify的性能是没有直接使用db.collections.update的性能好，但是在实际工作中都是使用它，毕竟要商用的程序安全性还是比较重要的。
```js
var myModify={
  findAndModify:"workmate",
  query:{name:'JSPang'},
  update:{$set:{age:18}},
  new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);

printjson(ResultMessage)
```
+ findAndModify属性值：
```js
query：需要查询的条件/文档
sort: 进行排序
remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
new:[boolean]返回更新前的文档还是更新后的文档。
fields：需要返回的字段
upsert：没有这个值是否增加。
```

## find的不等修饰符
+ 简单查找
```js
db.workmate.find({"skill.skillOne":"HTML+CSS"})
```

+ 筛选字段
```js
db.workmate.find(
  {"skill.skillOne":"HTML+CSS"},
  {name:true,"skill.skillOne":true,_id:false}
)

// console.log
{ "name" : "JSPang", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "ShengLei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiangPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "HouFei", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "JiaPeng", "skill" : { "skillOne" : "HTML+CSS" } }
{ "name" : "LiJia", "skill" : { "skillOne" : "HTML+CSS" } }
```

## 不等修饰符
+ 小于($lt):英文全称less-than
+ 小于等于($lte)：英文全称less-than-equal
+ 大于($gt):英文全称greater-than
+ 大于等于($gte):英文全称greater-than-equal
+ 不等于($ne):英文全称not-equal 我们现在要查找一下，公司内年龄小于30大于25岁的人员。看下面的代码。

## 日期查找
```js
var startDate= new Date('01/01/2018');
db.workmate.find(
  {regeditTime:{$gt:startDate}},
  {name:true,age:true,"skill.skillOne":true,_id:false}
)
```

## find的多条件查询
* $in修饰符
+ n修饰符可以轻松解决一键多值的查询情况。就如上面我们讲的例子，现在要查询同事中年龄是25岁和33岁的信息
```js
db.workmate.find({age:{$in:[25,33]}},
  {name:1,"skill.skillOne":1,age:1,_id:0}
)
```

* $or修饰符
+ 它用来查询多个键值的情况，就比如查询同事中大于30岁或者会做PHP的信息。主要区别是两个Key值。$in修饰符是一个Key值，这个需要去比较记忆。
```js
db.workmate.find({$or:[
  {age:{$gte:30}},
  {"skill.skillThree":'PHP'}
]},
  {name:1,"skill.skillThree":1,age:1,_id:0}
)
```

* $and修饰符
+ $and用来查找几个key值都满足的情况，比如要查询同事中大于30岁并且会做PHP的信息，这时需要注意的是这两项必须全部满足。当然写法还是比较简单的。只要把上面代码中的or换成and就可以了。
```js
db.workmate.find({$and:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
```

* $not修饰符
+ 它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息。需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用。
```js
db.workmate.find({
  age:{
    $not:{
      $lte:30,
      $gte:20
    }
  }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)
```

## find的数组查询
* 基本数组查询
+ 比如现在我们知道了一个人的爱好是’画画’,’聚会’,’看电影’，但我们不知道是谁，这时候我们就可以使用最简单的数组查询（实际工作中，这种情况基本不常用，所以这种查询只作知识点储备就可以了）。
```js
db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0}
)
```
* $all-数组多项查询
```js
db.workmate.find(
  {interest:{$all:["看电影","看书"]}},
  {name:1,interest:1,age:1,_id:0}
)
```

* $in-数组的或者查询
+ 用$all修饰符，是需要满足所有条件的，$in主要满足数组中的一项就可以被查出来（有时候会跟$or弄混）。比如现在要查询爱好中有看电影的或者看书的员工信息。
```js
db.workmate.find(
  {interest:{$in:["看电影","看书"]}},
  {name:1,interest:1,age:1,_id:0}
)
```

* $size-数组个数查询
```js
db.workmate.find(
  {interest:{$size:5}},
  {name:1,interest:1,age:1,_id:0}
)
```

* $slice-显示选项
+ 有时候我并不需要显示出数组中的所有值，而是只显示前两项，比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来。
```js
db.workmate.find(
  {},
  {name:1,interest:{$slice:2},age:1,_id:0}
)
```
