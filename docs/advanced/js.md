# JS

## JavaScript的组成

- ECMAScript: JavaScript的语法标准. 包括变量, 表达式, 运算符, 函数, if语句, for语句等.
- DOM: 文档对象模型. 操作网页上的元素的API. 比如让盒子移动, 变色, 轮播图等.
- BOM: 浏览器对象模型. 操作浏览器部分功能的API. 比如让浏览器自动滚动.

## JavaScript的特点

简单易用，解释型语言；边解释边执行；基于对象，内置大量对象
- 七种内置类型：number、string、boolean、undefined、null、object、symbol(ES6新增加)。
- 基本类型指保存在栈内存中的数据；引用类型(对象引用)指保存在堆内存中的对象，传递的是引用的地址；

## JavaScript类型检测

- typeof 用来检测基本类型；
- instanceof 用来检测是否为数组、对象、正则;
- Object.prototype.toString.call({}) 返回 [object Type]

## 变量提升

## 函数声明和表达式

-函数声明会先读取，并使其在执行任何代码之前可用（函数提升）；
-函数表达式，执行到所在的代码块才解析；

## 闭包和匿名函数

- 匿名函数顾名思义，没有名字的函数；
- 闭包是可以访问一个函数作用域里变量的函数。
- 闭包应用：封装私有变量；模仿块级作用域(ES5中没有块级作用域)；实现JS的模块

## new一个对象的过程（发生了什么）

- 创建一个新对象。
- 执行[[原型这个新对象会被]]连接。新对象_proto_指向构造函数prototype。
- 属性和方法被加入到 this 引用的对象中。并执行了构造函数中的方法。
- 如果函数没有返回其他对象，那么this指向这个新对象，否则this指向构造函数中返回的对象。

## this指向

- 全局范围/函数调用 this - 全局对象；
- 对象中的方法调用 this - 该方法所在的对象（函数别名除外）；
- 构造函数调用 this - 新创建的对象；
- 显式设置 apply/call/bind this - 函数第一个参数（即所绑定对象）；

①普通函数的this 指向调用它的那个对象，例如 obj.func ,那么func中的this就是obj
②箭头函数不能作为构造函数，不能使用new，没有this，arguments箭头函数，箭头函数的this永远指向其上下文的 this ，任何方法都改变不了其指向，如 call() , bind() , apply()（或者说箭头函数中的this指向的是定义时的this，而不是执行时的this）

## 数据结构

- 堆，栈后进先出，队列先进先出
- 基础数据类型保存在栈内存，引用数据类型值保存在堆内存，访问地址保存在栈内存。
- 垃圾回收方法：引用计数，标记清楚。

## 数组方法

- map：返回一个数组，其中每个元素都使用指定函数进行过转换。
- filter：返回一个数组，只有当指定函数返回 true 时，相应的元素才会被包含在这个数组中。
- reduce:按函数中指定的值累加
- find：返回与指定条件匹配的第一个实例，如果查到不会继续查找其他匹配的实例。
- findIndex：这与find几乎完全相同，但不是返回第一个匹配元素，而是返回第一个匹配元素的索引。

## 继承

构造函数，原型链，构造函数、原型链组合式继承，寄生式组合继承

## Javascript的事件流模型

- “事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
- “事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
- “DOM事件流”三个阶段：事件捕捉，目标阶段，事件冒泡

## Event Loop

- 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
- 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
- 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，异步任务结束等待状态，进入执行栈，开始执行。
- 主线程不断重复上面的第三步。

## Beyond

You need to know more about Vue and Javascript. :smile:

Learn and create! :muscle:
