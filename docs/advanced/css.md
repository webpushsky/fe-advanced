# CSS

## 盒模型box-sizing

默认值content-box标准盒模型,width==content内容区域宽;

border-box,IE盒模型width == border宽度+content内容宽度+padding宽度;

## 块级格式化上下文BFC

独立的渲染区域，BFC内部元素与外部元素隔离，内外元素定位互不影响。

触发BFC：
- HTML根元素；
- position: absolute/fixed；
- display: inline-block/table；
- float: 不为none；
- overflow: 不为visible；

BFC应用：
- 避免margin重叠/高度塌陷；
- 两栏自适应布局；
- 清除内部浮动（原理是两个div位于同一个bfc区域）；

## 居中布局

- 水平居中

```
行内元素：text-aligin:center

块级元素：margin：0 auto;

absolute已知宽度:position: absolute; margin-left: -(50%width); left: 50%;

absolute和transform:position: absolute;left: 50%;transform: translateX(-50%);

弹性布局：diaplay:flex;justify-content: center；

```

- 垂直居中

```
line-height = height

absolute已知高度:position: absolute;margin-top: -(50%height);top: 50%;

absolute和transform:position: absolute;top: 50%;transform: translateY(-50%);

弹性布局：diaplay:flex;algin-items: center；

```

- 水平垂直居中

```
已知宽高：position: absolute;top: 50%;left: 50%;margin-left: -(50%width);margin-top: -(50%height);

margin：position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;

absolute和transform:position: absolute;top: 50%;left: 50%;transform: translateX(-50%，-50%);

弹性布局：diaplay:flex;justify-content: center；algin-items: center；
```

## 三栏布局

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三栏布局</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }
        .container {
        	position: relative;
        }
    </style>
</head>
<body>
    <section class="container">
        <div class="left">左</div>
        <div class="center">中</div>
        <div class="right">右</div>
    </section>
</body>
</html>
```
- float
```
<style type="text/css">
    .left {
        float: left;
        width: 100px;
        height: 40px;
        background: green;
    }
    .right {
        float: right;
        width: 100px;
        height: 40px;
        background: blue;
    }
    .center {
    	margin: 0 100px;
        background: red;
    }
</style>
```
- position: absolute
```
<style type="text/css">
    .left {
        position: absolute;
        left: 0;
        width: 100px;
        height: 40px;
        background: green;
    }
    .right {
        position: absolute;
        right: 0;
        width: 100px;
        height: 40px;
        background: blue;
    }
    .center {
    	position: absolute;
        left: 100px;
        right: 100px;
        background: red;
    }
</style>
```
- table-cell
```
<style type="text/css">
	.container {
		display: table;
		width: 100%;
	}
	.left, .center, .right {
		display: table-cell;
	}
    .left {
        width: 100px;
        height: 40px;
        background: green;
    }
    .right {
        width: 100px;
        height: 40px;
        background: blue;
    }
    .center {
        background: red;
    }
</style>
```
- flex
```
<style type="text/css">
    .container {
		display: flex;
	}
	.left {
        width: 100px;
        height: 40px;
        background: green;
    }
    .right {
        width: 100px;
        height: 40px;
        background: blue;
    }
    .center {
        background: red;
    }
</style>
```
- grid
```
<style type="text/css">
    .container {
    	display: grid;
		width: 100%;
		grid-template-rows: 100px;
    	grid-template-columns: 200px auto 200px;
	}
</style>
```

## CSS隐藏元素

display:none元素在页面上将彻底消失，不占空间，触发浏览器重排和重绘；

visibility:hidden元素隐藏，占原有空间，会触发浏览器重绘，不触发重排；

opacity:0元素隐藏，占原有空间，可触发点击；

## 移动端布局

流式布局/百分比布局；rem布局；响应式媒体查询；flex弹性布局；vw

## Beyond

You need to know more about CSS. :smile:

Learn and create! :muscle:
