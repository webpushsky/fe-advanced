# HTML

## 重绘和回流（Repaint & Reflow）

- 重绘：元素属性更新，页面重新绘制。
- 回流：DOM tree中元素因尺寸，布局，显隐改变；页面至少发生一次回流，页面加载渲染时。
- 区别：回流必将引起重绘，而重绘不一定会引起回流。
- 触发：添加/删除可见元素，元素大小，位置/布局发生改变。
- 优化：减少回流触发次数，批量修改；css3 硬件加速不会引起重绘和回流。

## XSS和CSRF

- xss跨站脚本攻击，如恶意代码植入。
- 防范：输入输出检查
- csrf跨站请求伪造，劫持受信任用户向服务器发送非预期请求的攻击方式，如cookie劫持。
- 防范：验证码，token验证，http添加Referer验证合法源。
- 对比：XSS是利用用户对指定网站的信任，CSRF是利用网站对用户的信任。

## cookie，session，localStorage，sessionStorage

key | 大小 | 有效期 | 安全性
:-: | :-: | :-: | :-:
cookie | 4k | 设置失效 | 低| 
session | 无限制| - | 高| 
sessionStorage | 5M | 关闭页面 | -| 
localStorage | 5M | 设置失效 | -|

## 输入URL到页面加载过程

本地缓存检查，DNS解析域名IP地址，建立连接，发送HTTP请求，响应HTTP请求，渲染页面绘制DOM，关闭连接。

## 浏览器解析

自上而下，解析dom和构建dom同步进行，js脚本会阻塞HTML解析，css样式会阻塞渲染；解析HTML，构件DOM tree，DOM tree + css tree，绘制渲染；

## 性能优化

- 减少 http 请求次数；
- 减少 DNS 查询次数；
- 减少 iframe 数量；
- 减少 DOM 元素数量；
- 延迟加载；
- 提前加载；
- 滚动加载；
- 根据域名划分内容；
- 避免页面跳转；
- 缓存 Ajax;
- CDN内容分发网络
- webpack打包优化

## Beyond

You need to know more about HTML. :smile:

Learn and create! :muscle:
