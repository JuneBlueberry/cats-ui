# Loading 加载

<demo-model url="#/loading"></demo-model>

::: tip 介绍

Loading 适用于图标加载图标

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsLoading } from "cats-ui"
```

:::
::: code-group-item TS

```ts
import { CatsLoading } from "cats-ui"
```

:::
::::

## 代码演示

::: tip 基础用法

可以通过 **color** 自定义颜色，通过 **size** 自定义大小

```vue
<cats-loading></cats-loading>
<cats-loading color="#07c160"></cats-loading>
<cats-loading size="24"></cats-loading>
```

:::

## Props

::: warning Loading Props

| 参数     | 说明    | 类型    | 默认值  |
| -------- | ------ | ------- | ------- |
| color    | 图标颜色  | string  | #606060 |
| size | 图标大小，单位：px    | string/number | 16 |

:::
