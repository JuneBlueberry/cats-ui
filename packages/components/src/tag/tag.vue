<template>
  <span v-show="opened" class="cats-tag" :class="styleClass" :style="style">
    <slot />
    <cats-icon
      v-if="closeable"
      name="close"
      :size="size"
      @click="onClose"
    ></cats-icon>
  </span>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref, watchEffect } from "vue";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";
import { tagProps } from "./types";

const [name] = createNamespace("tag");

export default defineComponent({
  name,
  props: tagProps,
  components: {
    CatsIcon,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const opened = ref(true);

    const styleClass = computed(() => {
      return {
        [`cats-tag__type--${props.type}`]: props.type,
        [`cats-tag--plain`]: props.plain,
        [`cats-tag--round`]: props.round,
        [`cats-tag--mark`]: props.mark,
      };
    });

    const style = computed(() => {
      const _style: any = {};
      if (props.backgroundColor) _style.backgroundColor = props.backgroundColor;
      if (props.color) {
        _style.color = props.color;
        _style.border = `1px solid ${props.color}`;
      }
      if (props.size) {
        _style.fontSize = `${Number(props.size)}px`;
      }
      return _style;
    });

    const onClose = () => {
      opened.value = false;
      emit("close");
    };

    return {
      styleClass,
      style,
      opened,
      onClose,
    };
  },
});
</script>
