<template>
  <div class="cats-grids" :class="styleClass" @click="onClick">
    <div class="cats-grid">
      
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { createNamespace } from "../utils/create";
import { gridProps } from "./types";

const [name] = createNamespace("grid");

export default defineComponent({
  name,
  props: gridProps,
  emits: ["click"],
  setup(props, { emit, slots }) {
    const styleClass = computed(() => {
      return {
        
      };
    });

    // 点击事件(按钮不为disabled时触发)
    const onClick = (event: MouseEvent) => {
      // if (!props.disabled) {
      //   emit("click", event);
      // }
    };

    return {
      styleClass,
      onClick,
    };
  },
});
</script>
