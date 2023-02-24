<template>
  <div class="cats-badge">
    <slot></slot>
    <span class="cats-badge__wrapper" :class="styleClass" :style="style">{{
      content
    }}</span>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { badgeProps } from "./types";
import { createNamespace } from "../utils/create";

const [name] = createNamespace("badge");

export default defineComponent({
  name,
  props: badgeProps,
  setup(props) {
    const styleClass = computed(() => {
      return [`cats-badge--position--${props.position}`];
    });

    const style = computed(() => {
      const _style: any = {};
      if (props.backgroundColor) _style.backgroundColor = props.backgroundColor;
      if (props.color) _style.color = props.color;
      return _style;
    });

    return {
      styleClass,
      style,
    };
  },
});
</script>

<style>
</style>