<template>
  <div class="cats-col" :style="style" :class="styleClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { useParent } from '@cats-ui/utils'
import { colProps } from "./types";
import { createNamespace } from "../utils";

import { ROW_KEY } from './row.vue';
const [name] = createNamespace('col');

export default defineComponent({
  name,
  props: colProps,
  setup(props, { slots }) {
    const { parent, index } = useParent(ROW_KEY);

    const styleClass = computed(() => {
      return [
        `cats-col__span--${props.span}`
      ]
    })

    const style = computed(() => {
      if (!parent) {
        return;
      }

      const { spaces } = parent;

      if (spaces && spaces.value && spaces.value[index.value]) {
        const { left, right } = spaces.value[index.value];
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null,
        };
      }
    });

    return {
      style,
      styleClass
    };
  },
});
</script>