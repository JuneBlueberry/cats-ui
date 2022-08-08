# 安装

- 自行安装 node(版本 >= 12.0.0)、npm
- 全局安装pnpm(版本7.0)

  ``` cmd
  npm i -g pnpm@7.0.0
  ```

- 安装esno

  ``` cmd
  npm i esno -g
  ```

- 进入项目根目录，安装依赖

  ``` cmd
  pnpm install
  ```

# 开发

### 目录结构

- examples 测试目录
- package 开发目录
  - components 组件库(主开发库)
  - utils 工具库

### 开发过程

- 开发组件库(pakeage/components)
  
  - 在components目录下进行开发
  - 开发完成后运行命令进行打包

    ```cmd
    pnpm run build
    ```

- 测试组件库(examples)
  - 在examples目录下运行命令即可运行页面

    ```cmd
    pnpm run dev
    ```
  - 在components下面编写相应组件的测试页面


- 组件文档(document)
  - 在document目录下运行命令即可运行页面

    ```cmd
    pnpm run docs:dev
    ```
  - 在docs/components下面编写相应组件的文档，在.vuepress/config.ts文件中配置相应路由

# 设计规范

> 层次规范

- content: 内容（zindex < 10）
- nav: 导航（zindex = 100）
- mask: 遮罩层（zindex = 1000）
- popup: 弹出层（zindex = 5000）

> 样式规范

- 所有的变量样式需要放在主题样式中： styles/theme/default.scss
- 所有的动画样式需要放在动画样式中：styles/animation/index/scss

# 组件列表

> 基础

- [X] Button 按钮
- [ ] Icon 图标
- [X] Flex 弹性布局
- [ ] Grid 九宫格布局

> 表单

- [ ] Input 输入
- [ ] Textarea 文本域
- [ ] Checkout 复选框
- [ ] Radio 单选框
- [ ] Switch 开关
- [ ] Select 原生选择框
- [ ] Slider 滑块
- [ ] Uploader 上传
- [ ] Picker 选择器

> 数据展示

- [ ] Cell 列表
- [ ] Badge 徽章
- [ ] Footer 页脚
- [ ] Gallery 画廊
- [ ] Loading 加载
- [ ] Loadmore 加载更多
- [ ] Panel 面板
- [ ] Preview 表单预览
- [ ] Progress 进度条
- [ ] Steps 步骤条

> 导航搜索

- [ ] Search 搜索
- [ ] Navbar 头部导航
- [ ] Tabbar 底部导航

> 操作反馈

- [ ] ActionSheet 弹出式菜单
- [ ] Dialog 对话框
- [ ] Overlay 遮罩层
- [ ] Popup 弹出层
- [ ] Toast 提示框
- [ ] Toptips 顶部提示条
