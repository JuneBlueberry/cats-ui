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

- 开发组件库
  
  - 在components目录下进行开发
  - 开发完成后运行命令进行打包
    ```cmd
    pnpm run build
    ```

- 测试组件库
  - 在examples目录下引用相应的组件
  - 运行命令即可运行页面
    ```cmd
    pnpm run dev
    ```

# 设计规范

> 层次规范

- content: 内容（zindex < 10）
- nav: 导航（zindex = 99）
- mask: 遮罩层（zindex = 999）
- popup: 弹出层（zindex = 9999）

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
- [ ] Picker 选择器
- [ ] Toast 提示框
- [ ] Toptips 顶部提示条