# Cell 列表

<demo-model url="#/cell"></demo-model>

::: tip 介绍

使用 **cats-cell** 来展示列表，如果需要上下边框，可以使用 **ctas-cell-group**

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsCell, CatsCellGroup } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsCell, CatsCellGroup } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

Cell组件提供 **title**、**value**、**label** 的展示，使用 **show-link** 可以显示右边箭头，表示是一个可点击的，使用 **icon** 可以自定义左边的图标，具体图标可以查看 *icon* 组件

```vue
<cats-cell-group>
  <cats-cell title="主标题" value="内容说明"></cats-cell>
  <cats-cell title="主标题" value="内容说明" show-link></cats-cell>
  <cats-cell title="主标题" value="内容说明" icon="image" show-link></cats-cell>
  <cats-cell title="主标题" value="内容说明" label="我是一个副标题" show-link></cats-cell>
</cats-cell-group>
```

:::

::: tip 卡片模式

可以通过给 group 设置 **card** 来展示卡片模式

```vue
<cats-cell-group card>
  <cats-cell title="主标题" value="内容说明"></cats-cell>
  <cats-cell title="主标题" value="内容说明"></cats-cell>
</cats-cell-group>
```

:::

::: tip 自定义插槽

可以通过插槽实现自定义的样式

```vue
<cats-cell-group>
  <cats-cell title="主标题" value="内容说明">
    <template v-slot:icon>
      <cats-icon name="wechat-fill" :size="20"></cats-icon>
    </template>
    <template v-slot:title>
      <strong>自定义主题</strong>
    </template>
    <template v-slot:label>
      <em>自定义副主题</em>
    </template>
    <span>自定义内容</span>
    <template v-slot:right>
      <cats-icon name="menu" :size="17"></cats-icon>
    </template>
  </cats-cell>
</cats-cell-group>
```

:::

## Props

::: warning CellGroup Props

| 参数     | 说明     | 类型    | 默认值  |
| -------- | ------- | ------- | ------- |
| card     | 卡片样式 | boolean  | false |

:::

::: warning Cell Props

| 参数     | 说明   | 类型    | 默认值  |
| -------- | ----- | ------- | ------- |
| title     | 主标题 | string  | - |
| value     | 内容 | string  | - |
| label     | 副标题 | string  | - |
| icon     | 左侧图标 | string  | - |
| showLink  | 是否展示右侧箭头 | boolean  | false |

:::

## Events

::: warning Cell Event

| 名称  | 说明                                | 回调              |
| ----- | ----------------------------------- | ----------------- |
| click | 点击列表回调 | event: MouseEvent |

:::

## Slot

::: warning Cell Slot

| 名称  | 说明                                |
| ----- | ----------------------------------- |
| - | 默认插槽, 列表内容，使用则value设置无效 |
| title | 主标题插槽, 使用则title设置无效 |
| label | 副标题插槽, 使用则label设置无效 |
| icon | 左侧图标插槽, 使用则icon设置无效 |
| right | 右侧箭头插槽, 使用则showLink设置无效 |

:::
