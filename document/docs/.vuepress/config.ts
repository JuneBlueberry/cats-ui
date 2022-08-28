import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Cats-UI',
  description: '基于vue3的移动端UI组件库',
  base: '/',
  theme: defaultTheme({
    navbar: [
      // {
      //   text: '指南',
      //   link: '',
      // },
      {
        text: '组件',
        link: '/components/introduce',
      },
      {
        text: '关于我们',
        link: '/others/about'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/JuneBlueberry/cats-ui'
      }
    ],
    sidebar: {
      '/components/': [
        {
          text: '起步',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              text: '介绍',
              link: '/components/introduce',
            },
            {
              text: '安装',
              link: '/components/11',
            },
            {
              text: '快速上手',
              link: '/components/22',
            },
            {
              text: '更新日志',
              link: '/components/updatelog',
            }
          ]
        },
        {
          text: '组件',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              text: '基础组件',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'Button 按钮',
                  link: '/components/button',
                },
                {
                  text: 'Flex 弹性布局',
                  link: '/components/flex',
                },
                {
                  text: 'Cell 列表',
                  link: '/components/cell',
                },
                {
                  text: 'Icon 图标',
                  link: '/components/icon',
                },
              ]
            },
            {
              text: '数据展示',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'Loading 加载',
                  link: '/components/loading',
                },
              ]
            },
            {
              text: '表单组件',
              collapsable: false,
              sidebarDepth: 0,
              children: [

              ]
            },
            {
              text: '导航搜索',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'Navbar 头部导航',
                  link: '/components/navbar'
                }
              ]
            },
            {
              text: '操作反馈',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'ActionSheet 弹出式菜单',
                },
                {
                  text: 'Dialog 对话框',
                },
                {
                  text: 'Overlay 遮罩层',
                  link: '/components/overlay'
                },
                {
                  text: 'Popup 弹出层',
                  link: '/components/popup'
                },
                {
                  text: 'Toast 提示框',
                }
              ]
            }
          ]
        },
      ]
    }
  }),
  plugins: [
    registerComponentsPlugin({
      components: {
        DemoModel: path.resolve(__dirname, './components/demoModel.vue'),
      },
    })
  ]
})