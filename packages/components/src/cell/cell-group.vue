<template>
  <div class="cats-cellgroup" :class="styleClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";

import { createNamespace } from "../utils";
import { cellGroupProps } from "./types";

const [name] = createNamespace("cell-group");

export default defineComponent({
  name,
  props: cellGroupProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        ["cats-cellgroup--card"]: props.card,
      };
    });

    return {
      styleClass,
    };
  },
});
</script>