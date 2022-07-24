<template>
  <a class="cats-button" :class="styleClass">
    <slot />
  </a>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { buttonProps } from "./types";
export default defineComponent({
  name: "cats-button",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`cats-button__shape--${props.shape}`]: props.shape,
        [`cats-button__type--${props.type}`]: props.type,
        [`cats-button--disable`]: props.disable,
        [`cats-button--mini`]: props.mini,
      };
    });

    return {
      styleClass,
    };
  },
});
</script>
