# Popup 弹出层

<demo-model url="#/popup"></demo-model>

::: tip 介绍

弹出层容器，用于展示弹窗、信息提示等内容

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsPopup } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsPopup } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

```vue
<cats-button @click="show = true">默认</cats-button>
<cats-popup :show="show" @close="onClose"></cats-popup>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const show = ref(false)
    const onClose = () => {
      show.value = false
    }
    return {
      show,
      onClose
    }
  }
}
</script>
```

:::

::: tip 弹出方向

可以通过 **position** 设置弹出层的方向，可选：**bottom**、**top**、**left**、**right**

```vue
<cats-popup :show="show" position="bottom"></cats-popup>
<cats-popup :show="show" position="top"></cats-popup>
<cats-popup :show="show" position="left"></cats-popup>
<cats-popup :show="show" position="right"></cats-popup>
```

:::

::: tip 宽度和圆角

可以通过 **size** 设置弹出层的宽度或者高度，单位为百分比，通过 **round** 设置是否是圆角

```vue
  <cats-popup :show="show" :round="false"></cats-popup>
  <cats-popup :show="show" :size="60"></cats-popup>
```

:::

## Props

::: warning Popup Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| show     | 是否显示遮罩层 | boolean  | false |
| position    | 弹出方向，可选 **bottom**、**top**、**left**、**right**   | string  | bottom |
| size    | 弹出层的宽度或者高度，单位 **%**   | string/number  | 30 |
| round    | 弹出层是否为圆角   | boolean  | true |
| duration    | 弹出的动画时间，单位 **ms**   | string/number  | 300 |
| overlayClass | 遮罩层自定义类              | string | - |
| overlayStyle | 遮罩层自定义样式           | string | - |

:::

## Events

::: warning Popup Event

| 名称  | 说明                                | 回调              |
| ----- | ----------------------------------- | ----------------- |
| click | 弹出层点击回调 | event: MouseEvent |
| click-overlay | 遮罩层点击回调 | event: MouseEvent |
| open | 打开弹出层时触发 |  |
| close | 关闭弹出层时触发 |  |

:::

## Slot

::: warning Popup Slot

| 名称  | 说明                                |
| ----- | ----------------------------------- |
| - | 默认插槽, 弹窗内容 |

:::
