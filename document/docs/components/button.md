# Button 按钮

<demo-model url="#/button"></demo-model>

::: tip 介绍

按钮用于触发一个操作，如提交表单

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsButton } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsButton } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 按钮类型

按钮支持 primary、emphasize、info、warning、danger 五种类型，默认为 primary

```vue
<cats-button type="primary">主要-默认按钮</cats-button>
<cats-button type="emphasize">主要-强调按钮</cats-button>
<cats-button type="info">主要-信息按钮</cats-button>
<cats-button type="warning">主要-警告按钮</cats-button>
<cats-button type="danger">主要-危险按钮</cats-button>
```

:::

::: tip 按钮形状

按钮支持 primary、secondary、block 三种类型，默认为 primary

```vue
<cats-button type="emphasize" shape="primary">主要按钮</cats-button>
<cats-button type="emphasize" shape="secondary">次要按钮</cats-button>
<cats-button type="emphasize" shape="block">块状按钮</cats-button>
```

:::

::: tip 禁用状态

通过 **disabled** 属性来禁用按钮，禁用状态下的按钮不可以点击

```vue
<cats-button disabled>主要-默认按钮</cats-button>
<cats-button shape="secondary" disabled>主要-强调按钮</cats-button>
<cats-button shape="block" disabled>主要-信息按钮</cats-button>
```

:::

::: tip mini 按钮

通过 **mini** 属性来展示 mini 按钮

```vue
<cats-button mini>按钮</cats-button>
<cats-button mini shape="secondary">按钮</cats-button>
<cats-button mini disabled>按钮</cats-button>
```

:::

## Props

::: warning Button Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| type     | 形状，可选：**primary** **emphasize** **info** **warning** **danger** | string  | primary |
| shape    | 类型，可选：**primary** **secondary** **block**                       | string  | primary |
| disabled | 是否禁用按钮点击                                                      | boolean | false   |
| mini     | 是否为 mini 按钮                                                      | boolean | false   |

:::

## Events

::: warning Button Event

| 名称  | 说明                                | 回调              |
| ----- | ----------------------------------- | ----------------- |
| click | 按钮点击回调，disabled 状态不会触发 | event: MouseEvent |

:::
