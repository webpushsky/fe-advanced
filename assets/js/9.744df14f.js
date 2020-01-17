(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{222:function(t,n,e){"use strict";e.r(n);var a=e(0),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("h2",{attrs:{id:"盒模型box-sizing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#盒模型box-sizing"}},[t._v("#")]),t._v(" 盒模型box-sizing")]),t._v(" "),e("p",[t._v("默认值content-box标准盒模型,width==content内容区域宽;")]),t._v(" "),e("p",[t._v("border-box,IE盒模型width == border宽度+content内容宽度+padding宽度;")]),t._v(" "),e("h2",{attrs:{id:"块级格式化上下文bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块级格式化上下文bfc"}},[t._v("#")]),t._v(" 块级格式化上下文BFC")]),t._v(" "),e("p",[t._v("独立的渲染区域，BFC内部元素与外部元素隔离，内外元素定位互不影响。")]),t._v(" "),e("p",[t._v("触发BFC：")]),t._v(" "),e("ul",[e("li",[t._v("HTML根元素；")]),t._v(" "),e("li",[t._v("position: absolute/fixed；")]),t._v(" "),e("li",[t._v("display: inline-block/table；")]),t._v(" "),e("li",[t._v("float: 不为none；")]),t._v(" "),e("li",[t._v("overflow: 不为visible；")])]),t._v(" "),e("p",[t._v("BFC应用：")]),t._v(" "),e("ul",[e("li",[t._v("避免margin重叠/高度塌陷；")]),t._v(" "),e("li",[t._v("两栏自适应布局；")]),t._v(" "),e("li",[t._v("清除内部浮动（原理是两个div位于同一个bfc区域）；")])]),t._v(" "),e("h2",{attrs:{id:"居中布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#居中布局"}},[t._v("#")]),t._v(" 居中布局")]),t._v(" "),e("ul",[e("li",[t._v("水平居中")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("行内元素：text-aligin:center\n\n块级元素：margin：0 auto;\n\nabsolute已知宽度:position: absolute; margin-left: -(50%width); left: 50%;\n\nabsolute和transform:position: absolute;left: 50%;transform: translateX(-50%);\n\n弹性布局：diaplay:flex;justify-content: center；\n\n")])])]),e("ul",[e("li",[t._v("垂直居中")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("line-height = height\n\nabsolute已知高度:position: absolute;margin-top: -(50%height);top: 50%;\n\nabsolute和transform:position: absolute;top: 50%;transform: translateY(-50%);\n\n弹性布局：diaplay:flex;algin-items: center；\n\n")])])]),e("ul",[e("li",[t._v("水平垂直居中")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("已知宽高：position: absolute;top: 50%;left: 50%;margin-left: -(50%width);margin-top: -(50%height);\n\nmargin：position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\n\nabsolute和transform:position: absolute;top: 50%;left: 50%;transform: translateX(-50%，-50%);\n\n弹性布局：diaplay:flex;justify-content: center；algin-items: center；\n")])])]),e("h2",{attrs:{id:"三栏布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三栏布局"}},[t._v("#")]),t._v(" 三栏布局")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>三栏布局</title>\n    <style type="text/css">\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n        \tposition: relative;\n        }\n    </style>\n</head>\n<body>\n    <section class="container">\n        <div class="left">左</div>\n        <div class="center">中</div>\n        <div class="right">右</div>\n    </section>\n</body>\n</html>\n')])])]),e("ul",[e("li",[t._v("float")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n    .left {\n        float: left;\n        width: 100px;\n        height: 40px;\n        background: green;\n    }\n    .right {\n        float: right;\n        width: 100px;\n        height: 40px;\n        background: blue;\n    }\n    .center {\n    \tmargin: 0 100px;\n        background: red;\n    }\n</style>\n')])])]),e("ul",[e("li",[t._v("position: absolute")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n    .left {\n        position: absolute;\n        left: 0;\n        width: 100px;\n        height: 40px;\n        background: green;\n    }\n    .right {\n        position: absolute;\n        right: 0;\n        width: 100px;\n        height: 40px;\n        background: blue;\n    }\n    .center {\n    \tposition: absolute;\n        left: 100px;\n        right: 100px;\n        background: red;\n    }\n</style>\n')])])]),e("ul",[e("li",[t._v("table-cell")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n\t.container {\n\t\tdisplay: table;\n\t\twidth: 100%;\n\t}\n\t.left, .center, .right {\n\t\tdisplay: table-cell;\n\t}\n    .left {\n        width: 100px;\n        height: 40px;\n        background: green;\n    }\n    .right {\n        width: 100px;\n        height: 40px;\n        background: blue;\n    }\n    .center {\n        background: red;\n    }\n</style>\n')])])]),e("ul",[e("li",[t._v("flex")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n    .container {\n\t\tdisplay: flex;\n\t}\n\t.left {\n        width: 100px;\n        height: 40px;\n        background: green;\n    }\n    .right {\n        width: 100px;\n        height: 40px;\n        background: blue;\n    }\n    .center {\n        background: red;\n    }\n</style>\n')])])]),e("ul",[e("li",[t._v("grid")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style type="text/css">\n    .container {\n    \tdisplay: grid;\n\t\twidth: 100%;\n\t\tgrid-template-rows: 100px;\n    \tgrid-template-columns: 200px auto 200px;\n\t}\n</style>\n')])])]),e("h2",{attrs:{id:"css隐藏元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css隐藏元素"}},[t._v("#")]),t._v(" CSS隐藏元素")]),t._v(" "),e("p",[t._v("display:none元素在页面上将彻底消失，不占空间，触发浏览器重排和重绘；")]),t._v(" "),e("p",[t._v("visibility:hidden元素隐藏，占原有空间，会触发浏览器重绘，不触发重排；")]),t._v(" "),e("p",[t._v("opacity:0元素隐藏，占原有空间，可触发点击；")]),t._v(" "),e("h2",{attrs:{id:"移动端布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端布局"}},[t._v("#")]),t._v(" 移动端布局")]),t._v(" "),e("p",[t._v("流式布局/百分比布局；rem布局；响应式媒体查询；flex弹性布局；vw")]),t._v(" "),e("h2",{attrs:{id:"beyond"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beyond"}},[t._v("#")]),t._v(" Beyond")]),t._v(" "),e("p",[t._v("You need to know more about CSS. 😄")]),t._v(" "),e("p",[t._v("Learn and create! 💪")])])}),[],!1,null,null,null);n.default=s.exports}}]);