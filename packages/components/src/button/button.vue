<template>
  <a class="cats-button" :class="styleClass" @click="onClick">
    <slot />
  </a>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { createNamespace } from '../utils/create';
import { buttonProps } from "./types";

const [name] = createNamespace('button')

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const styleClass = computed(() => {
      return {
        [`cats-button__shape--${props.shape}`]: props.shape,
        [`cats-button__type--${props.type}`]: props.type,
        [`cats-button--disabled`]: props.disabled,
        [`cats-button--mini`]: props.mini,
      };
    });

    // 点击事件(按钮不为disabled时触发)
    const onClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event)
      }
    };

    return {
      styleClass,
      onClick
    };
  },
});
</script>
