module.exports = {
    title: '只争朝夕加油干，不负韶华再出发！', //网站标题
    description: '专注中高级前端进阶，前端技术交流，北上广深前端职位，分享工作中遇到的问题和解决方案。',
    themeConfig: { //主题配置
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }] //引入favicon
        ],
        // search: false, //不要搜索框
        // sidebarDepth: 2,
        nav:[
	        { text: '前端进阶', link: '/advanced/' },
	        { text: '新浪博客', link: 'http://blog.sina.com.cn/bluesteng' },
	        { text: '掘金专栏', link: 'https://juejin.im/user/5c9e089e6fb9a05e77146a57' },
          { text: 'MD规范', link: '/standard' }
	        // 下拉列表
	       //  {
	       //  text: 'GitHub',
		      //   items: [
		      //       { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
		      //       {
		      //       	text: '算法仓库',
		      //       	link: 'https://github.com/OBKoro1/Brush_algorithm'
		      //   	}
		      //   ]
		      // }  
	    ],
    	// sidebar: {
    	// 	'/guides/': genSidebarConfigs('guides'),
	    //     '/frontend/': genSidebarConfig('前端')
	    // }
        sidebar: { //侧边栏
            '/back-end/': [
            {
              title: '后端',
              collapsable: false,
              children: [
          		  '',
  	            '/back-end/back-end.md'
  	          ]
            }
            ],
            '/advanced/': [
            {
              title: '前端知识汇总',
              collapsable: true,
              children: [ 
        		    '',
                // {
                //   title: 'CSS知识点',
                //   collapsable: true,
                //   children: [
                //     '/css'
                //   ]
                // },
                // {
                //   title: 'HTML汇总',
                //   collapsable: true,
                //   children: [
                //     '/html'
                //   ]
                // },
                // {
                //   title: 'JavaScript进阶',
                //   collapsable: true,
                //   children: [
                //     '/js'
                //   ]
                // },
                'css',
                'html',
                'js',
                'getting-started',
                'customize',
                'advanced'
              ]
            }
		        ]
        }
    }
}
