import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Cast-UI',
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
              link: '/components/33',
            }
          ]
        },
        {
          text: '组件',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              text: '基础',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'Button 按钮',
                  link: '/components/00',
                },
                {
                  text: 'Icon 图标',
                  link: '/components/11',
                },
                {
                  text: 'Flex 弹性布局',
                  link: '/components/22',
                },
                {
                  text: 'Grid 九宫格布局',
                  link: '/components/33',
                }
              ]
            },
            {
              text: '表单',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: 'Input 输入',
                  link: '/components/00',
                },
                {
                  text: 'Textarea 文本域',
                  link: '/components/11',
                },
                {
                  text: 'Checkout 复选框',
                  link: '/components/22',
                },
                {
                  text: 'Radio 单选框',
                  link: '/components/33',
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