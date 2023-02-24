# Icon 图标

<demo-model url="#/icon"></demo-model>

::: tip 介绍

Icon适用于图标展示

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsIcon } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsIcon } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

可以通过设置不同的 **name** 来展示不同的图标

```vue
<cats-icon name="check"></cats-icon>
<cats-icon name="exclaimination"></cats-icon>
<cats-icon name="close"></cats-icon>
```

:::

::: tip 徽章

可以通过 **dot** 来设置小红点，通过 **badge** 来设置文字

```vue
<cats-icon name="accountbook"></cats-icon>
<cats-icon name="accountbook" dot></cats-icon>
<cats-icon name="accountbook" dot badge="10"></cats-icon>
```

:::

## Props

::: warning Icon Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| name     | 图标名称 | string  | - |
| color    | 图标颜色                       | string  | - |
| size | 图标大小                                                      | string/number | 24px   |
| dot     | 是否展示小红点                                                     | boolean | false   |
| badge     | 徽章的文字                                                     | string | -   |

:::
