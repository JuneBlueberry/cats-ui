# Input 输入框

<demo-model url="#/input"></demo-model>

::: tip 介绍

输入框用于用户输入文字,通常和**ctas-cell-group**配合使用

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsCellGroup, CatsInput } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsCellGroup, CatsInput } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

可以通过 v-model 双向绑定输入框的值，通过 placeholder 设置占位提示文字

```vue
<cats-cell-group>
  <cats-input v-model="value" title="账号" placeholder="请输入账号"></cats-input>
</cats-cell-group>
```

:::

::: tip 类型

可以通过 **type** 设置标题输入框的类型

```vue
<cats-cell-group>
  <cats-input title="账号" placeholder="请输入账号"></cats-input>
  <cats-input title="密码" type="password" placeholder="请输入密码"></cats-input>
  <cats-input title="标题文本" label="副标题" placeholder="请输入文本"></cats-input>
  <cats-input title="文本域" placeholder="请输入内容" isTextarea></cats-input>
</cats-cell-group>
```

:::

::: tip 展示Icon

可以通过 **left-icon** 展示左边的Icon、**right-icon** 展示右边的Icon

```vue
<cats-input title="左图标" placeholder="请输入" leftIcon="image"></cats-input>
<cats-input title="右图标" placeholder="请输入" ightIcon="image"></cats-input>
```

:::

::: tip 清除、只读、禁止输入框

可以通过 **clearable** 清空输入框内容、 **readonly** 设置为只读输入框、 **disabled** 设置为禁止输入框

```vue
<cats-input title="清除图标" placeholder="请输入"clearable></cats-input>
<cats-input title="只读" placeholder="请输入" readonly></cats-input>
<cats-input title="禁止" placeholder="请输入" disabled></cats-input>
```

:::

::: tip 输入框卡片

通过 **card** 来展示卡片样式

```vue
<cats-cell-group card>
  <cats-input title="账号" placeholder="请输入账号"><cats-input>
  <cats-input title="密码" placeholder="请输入密码"><cats-input>
</cats-cell-group>
```

:::


## Props

::: warning Input Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| v-model     | 输入的值 | string  | - |
| title    | 标题文本 | string  | - |
| label |  | 副标题文本 | string   | - |
| leftIcon     | 左侧的图标 | string | -   |
| rightIcon     | 右侧的图标 | string | -   |
| type     | 输入框类型 | string | text   |
| name     | 名称，作为提交表单时的标识符 | string | - |
| placeholder     | 输入框的占位提示文字 | string | -   |
| autocomplete     | HTML 原生属性，可选 **on**/**off** | string |  on  |
| clearable     | 清除内容 | boolean | false   |
| readonly     | 是否只读 | boolean | false   |
| disabled     | 是否禁止 | boolean | false   |
| isTextarea     | 是否是文字域 | boolean | false   |
| rows     | 显示行数，只有在文字域时有效 | string/number | 3   |
| maxlength     | 允许输入的最大字数，不输入则没有限制 | number | -   |
| isShowNums     | 是否展示文字域的已输入字数 | boolean | true   |

:::

## Slot

::: warning Navbar Slot

| 名称  | 说明                                |
| ----- | ----------------------------------- |
| left-icon | 左边图标内容 |
| right-icon | 右边图标内容 |

:::
