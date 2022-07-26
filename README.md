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