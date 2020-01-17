# Advanced

## 高级前端知识大纲

- HTML：HTML5新增特性，HTML语义化，重绘和回流，cookie，DOM解析，性能优化，浏览器内核，兼容性，HTTP，
- CSS：盒模型，布局，PC/移动适配问题，选择器及优先级，BFC，
-JavaScript：数据类型，变量，函数，作用域，继承，闭包，原型，跨域，模块化，内存泄漏，事件机制，ajax等。

## 前端开发每日一题之HTML

- Doctype有几种模式？你知道几种Doctype类型？

Doctype分为严格模式与混杂模式；HTML5/HTML 4.01

- HTML新增常用特性？

语义化标签，表单属性，canvas，webStorage，websocket，Geolocation

## 前端开发每日一题之CSS

- 盒模型

- css常用选择器

通配符：*

ID选择器：#ID

类选择器：.class

元素选择器：div，p等

后代选择器：div span、div em等

伪类选择器：a:hover等

属性选择器：input[type="text"]  等

- 选择器权重

!important -> 行内样式 -> #id -> .class -> 元素和伪元素 -> * -> 继承 -> 默认

- css3新特性

transition：过渡，transform：平移，旋转、缩放，animation：动画，gradient：渐变，shadow：阴影，border-radius：圆角

## 前端开发每日一题之JavaScript

- js数据类型

Undefined，Null，Boolean，Number，String，新增:Symbol，Object

- null与undefined区别

null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

- JavaScript原型，原型链

每个对象都会在其内部初始化一个属性，就是prototype(原型)

访问一个对象的属性时，如果对象内部不存在，就去对象的prototype里找这个属性，这个prototype又有自己的prototype，如此递推下去，一直检索到 Object 内建对象

- js创建对象的几种方式

1、工厂模式

2、构造函数模式

3、原型模式

4、混合构造函数和原型模式

5、动态原型模式

6、寄生构造函数模式

- javascript继承实现方法

1、原型链继承

2、借用构造函数继承

3、组合继承(原型+借用构造)

4、原型式继承

5、寄生式继承

6、寄生组合式继承

- ajax实现步骤

1、创建XMLHttpRequest对象，也就是创建一个异步调用对象；

2、创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息；

3、置响应HTTP请求状态变化的函数；

4、发送http请求；

5、获取异步调用返回的数据；

6、JavaScript和DOM实现局部刷新

- ["1", "2", "3"].map(parseInt)

var undefined;undefined == null; // true

1 == true;   // true

2 == true;   // false

0 == false;  // true

0 == '';     // true

NaN == NaN;  // false

[] == false; // true

[] == ![];   // true

- 下面哪个是正确的？
```
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}
```
- A: mouse.bird.size是无效的
- B: mouse[bird.size]是无效的
- C: mouse[bird["size"]]是无效的

## 前端开发每日一题之网络/浏览器

- 减少页面加载方法？

1、图片优化（压缩/合并）；

2、css混淆，压缩；

3、减少HTTP请求；

4、资源预加载，CND分发

- HTTP常用状态码

200请求成功；

300重定向；

400客户端错误；

500服务端错误；

- 页面从输入URL到加载完成发生了什么？

本地缓存查找，DNS域名解析，建立连接客户端发生请求，服务端响应请求，返回资源渲染页面。

- js延迟加载方式有哪些？

defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js

- 如何解决跨域？

jsonp，document.domain+iframe，window.name，window.postMessage，服务器配置代理

- 对称加密和非对称加密

对称加密： 发送方和接收方持有同一把密钥，发送消息和接收消息均使用该密钥，安全性没有非对称加密高。

非对称加密：公钥负责加密，私钥负责解密，安全性更高。


## cookie，session，localStorage，sessionStorage区别

key | 大小 | 有效期 | 安全性
:-: | :-: | :-: | :-:
cookie | 4k | 设置失效 | 低| 
session | 无限制| - | 高| 
sessionStorage | 5M | 关闭页面 | -| 
localStorage | 5M | 设置失效 | -|

- get与post区别

## vue知识汇总

- 生命周期/钩子

创建前/后, 载入前/后,更新前/后,销毁前/销毁后

beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed

- 生命周期适合场景

beforecreate: 可以在这加个loading事件，在加载实例时触发

created: 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用

mounted: 挂载元素，完成DOM 渲染,获取到DOM节点

updated: 如果对数据统一处理，在这里写上相应函数

beforeDestroy: 可以做一个确认停止事件的确认框

nextTick: 更新数据后立即操作dom

- 常用指令

v-model, v-if, v-for, v-html, v-text, v-on, v-bind

- 样式动态绑定

```
:class="{'orange': isOrange, 'green': isGreen}"

:class="[showCalendar ? 'padTop3' : '']

:style="{ background: healthStatus.background }"

:style="{color: color, fontSize: fontSize + 'px' }"

```

## 组件通信

- 父-子，父组件向子传递数据，子组件props接收；$parent / $children；

- 子-父，父组件向子组件传递事件方法，子组件通过$emit触发事件，回调给父组件；

- 非父子，兄弟组件之间通信推荐vuex；

- provide/inject

## computed和watch对比

computed是计算属性,也就是计算值,它更多用于计算值的场景；

computed具有缓存性,computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算；

computed适用于计算比较消耗性能的计算场景

watch更多的是「观察」的作用,类似于某些数据的监听回调,用于观察props $emit或者本组件的值,当数据变化时来执行回调进行后续操作；

无缓存性，页面重新渲染时值不变化也会执行

## key

- key是为Vue中的vnode标记的唯一id，通过这个key，我们的diff操作可以 更准确、更快速

## Vuex

Vuex有5种属性state，getter，mutation，action，module;

- state存放的数据状态，不可以直接修改里面的数据

- mutations同步提交更新数据的方法

- getters类似vue的计算属性，主要用来过滤一些数据

- action异步提交更新数据，提交的是 mutation，不直接修数据

- modules模块化vuex


## 前端开发每日一题之延伸

- 最近在学习哪方面知识？

虽然个开放的问题，但是也要谨慎回答。要说些确实了解或者熟悉的，避免碰巧面试官深问尴尬。

- 最近常去的网站？

前端常去的网站比较多，列举一下：GitHub，掘金，知乎，segmentfault，vue/react/node社区，w3c，CSDN，博客园，等、

key | 实现 | 大小 | 可见性 | 安全性| 缓存
:-: | :-: | :-: | :-:| :-:| :-:
get | URL拼接？ | URL长度限制 | 可见 | 低| 能被缓存| 
post | 请求体中| 服务器配置 | 不可见 | 高| 不能缓存| 

If my template can't meet your requirement, you can further create your own template.

## Beyond

You need to know more about Vue and Javascript. :smile:

Learn and create! :muscle:
