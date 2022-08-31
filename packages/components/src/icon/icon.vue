<template>
  <div class="cats-icon" @click="onClick">
    <svg class="cats-icon__svg" :style="style" aria-hidden="true">
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
  emits: ["click"],
  setup(props, { emit }) {
    const style = computed(() => {
      const _style: any = {};
      if (props.color) _style.color = props.color;
      if (props.size) _style.fontSize = `${Number(props.size)}px`;
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

    const onClick = (event: MouseEvent) => {
      emit("click", event);
    };

    return {
      style,
      iconName,
      dotClass,
      onClick,
    };
  },
});
</script>