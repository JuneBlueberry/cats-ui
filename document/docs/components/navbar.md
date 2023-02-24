# Navbar 头部导航

<demo-model url="#/navbar"></demo-model>

::: tip 介绍

头部导航常用于页面的顶端

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsNavbar } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsNavbar } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

可以通过 **color** 设置标题的颜色

```vue
<cats-navbar color="#999999"></cats-navbar>
```

:::

::: tip 展示Icon

可以通过 **show-left** 展示左边的返回Icon、**show-right** 展示右边的操作Icon

```vue
<cats-navbar show-left show-right>主页</cats-navbar>
```

:::

::: tip 自定义内容

通过 **left**、**right** 插槽自定义内容

```vue
<cats-navbar show-left show-right>
  <template v-slot:left>返回</template>
  主页
  <template v-slot:right>操作</template>
</cats-navbar>
```

:::

::: tip 显示loading

通过 **loading** 来展示loading样式

```vue
<cats-navbar loading>主页</cats-navbar>
```

:::

## Props

::: warning Navbar Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| backgroundColor     | 背景颜色 | string  | #FFFFFF |
| color    | 字体颜色 | string  | #323233 |
| showLeft | 是否展示左边的图标 | boolean | false   |
| showRight     | 是否展示右边的图标 | boolean | false   |
| loading     | 是否显示loading | boolean | false   |
| loadingSize     | loading的大小 | string/number | 16px   |

:::

## Slot

::: warning Navbar Slot

| 名称  | 说明                                |
| ----- | ----------------------------------- |
| default | 默认插槽，标题内容 |
| left | 左边图标内容，只在show-left为true时有效 |
| right | 右边图标内容，只在show-left为true时有效 |

:::
