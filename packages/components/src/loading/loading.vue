<template>
  <span class="cats-loading" :style="style"></span>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { loadingProps } from "./types";
import { createNamespace } from "../utils/create";

const [name] = createNamespace("icon");

export default defineComponent({
  name,
  props: loadingProps,
  setup(props, { slots }) {
    const style = computed(() => {
      const _style: any = {};
      if (props.color) _style.color = props.color;
      if (props.size) _style.fontSize = `${Number(props.size)}px`;
      return _style;
    });

    return {
      style,
    };
  },
});
</script>