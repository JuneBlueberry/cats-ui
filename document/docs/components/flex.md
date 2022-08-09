# Flex 弹性布局

<demo-model url="#/flex"></demo-model>

::: tip 介绍

Flex 提供了 **cats-row** 和 **cats-col** 两个组件来进行行列布局

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsRow, CatsCol } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsRow, CatsCol } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

Flex 组件提供了24栅栏格，通过 **span** 设置该列所占领的栅栏数，同时可以使用 **gutter** 来设置每列之间的间距

```vue
<cats-row>
  <cats-col :span="24">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10">
  <cats-col :span="12">cats-ui</cats-col>
  <cats-col :span="12">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10">
  <cats-col :span="8">cats-ui</cats-col>
  <cats-col :span="8">cats-ui</cats-col>
  <cats-col :span="8">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10">
  <cats-col :span="4">cats-ui</cats-col>
  <cats-col :span="16">cats-ui</cats-col>
  <cats-col :span="4">cats-ui</cats-col>
</cats-row>
```

:::

::: tip 主轴对齐方式

可以通过 **justify** 来设置栅栏的主轴(水平轴)对其模式，可以有5种方式：**start** 、 **end** 、**center** 、**space-between** 、**space-around** 、默认为 start

```vue
<cats-row :gutter="10" justify="end">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10" justify="center">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10" justify="space-between">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10" justify="space-around">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
```

:::

::: tip 交叉轴对齐方式

可以通过 **align** 来设置栅栏的交叉轴(垂直轴)对其模式，可以有3种方式：**start** 、 **end** 、**center** 、默认为 start

```vue
<cats-row :gutter="10" align="start">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10" align="center">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
<cats-row :gutter="10" align="end">
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
```

:::

::: tip 换行

可以通过 **wrap** 来设置栅栏是否换行，默认不换行

```vue
<cats-row :gutter="10" wrap>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
  <cats-col :span="6">cats-ui</cats-col>
</cats-row>
```

:::

## Props

::: warning Row Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| gutter     | 栅栏列间距 | string/number  | 0 |
| justify    | 主轴对齐方式，可选：**start** **end** **center** **primary** **space-between** **space-around**                       | string  | start |
| align | 交叉轴对齐方式， 可选：**start** **end** **center** **primary**                                                     | string | start   |
| wrap     | 是否换行                                                      | boolean | false   |

:::

::: warning Col Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| span     | 列元素宽度 | string/number  | - |

:::
