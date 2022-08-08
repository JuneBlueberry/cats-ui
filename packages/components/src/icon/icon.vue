<template>
  <div class="cats-icon">
    <svg class="cats-icon__svg" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="cats-icon__badge" :class="dotClass">{{ badge }}</div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import "./font/iconfont.js";
import { computed, defineComponent } from "vue";
import { iconProps } from "./types";
import { createNamespace } from "../utils/create";

const [name] = createNamespace("icon");

export default defineComponent({
  name,
  props: iconProps,
  setup(props, { slots }) {
    const style = computed(() => {
      const _style: any = {};
      const fontSize = Number(props.fontSize);
      if (props.color) _style.color = props.color;
      if (props.fontSize) _style.fontSize = props.fontSize;
      return _style;
    });

    const iconName = computed(() => {
      return `#cats-${props.name}`;
    });

    const dotClass = computed(() => {
      return {
        ["cats-icon__dot"]: props.dot && !props.badge,
      };
    });

    return {
      style,
      iconName,
      dotClass,
    };
  },
});
</script>