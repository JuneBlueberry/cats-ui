# Overlay 遮罩层

<demo-model url="#/overlay"></demo-model>

::: tip 介绍

创建一个遮罩层，用于阻止用户进行其他操作

:::

## 引入

:::: code-group
::: code-group-item JS

```js
import { CatsOverlay } from 'cats-ui'
```

:::
::: code-group-item TS

```ts
import { CatsOverlay } from 'cats-ui'
```

:::
::::

## 代码演示

::: tip 基础用法

```vue
<cats-overlay :show="show" @click="show = false"></cats-overlay>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const show = ref(false)
    return {
      show
    }
  }
}
</script>
```

:::

::: tip 动画时长

可以通过 **duration** 设置遮罩层动画的时间

```vue
<cats-overlay :show="show" :duration="1500" @click="show = false"></cats-overlay>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const show = ref(false)
    return {
      show
    }
  }
}
</script>
```

:::

## Props

::: warning Overlay Props

| 参数     | 说明                                                                  | 类型    | 默认值  |
| -------- | --------------------------------------------------------------------- | ------- | ------- |
| show     | 是否显示遮罩层 | boolean  | false |
| duration    | 动画时间，单位 **ms**                      | string/number  | 300 |
| overlayClass | 自定义类                                                      | string | - |
| overlayStyle     | 自定义样式                                                     | string | - |

:::

## Events

::: warning Overlay Event

| 名称  | 说明                                | 回调              |
| ----- | ----------------------------------- | ----------------- |
| click | 遮罩层点击回调 | event: MouseEvent |

:::
