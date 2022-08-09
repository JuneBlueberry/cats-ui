<template>
  <div class="cats-navbar" :style="style">
    <div class="cats-navbar__left" v-if="showLeft">
      <slot name="left">
        <cats-icon name="left"></cats-icon>
      </slot>
    </div>
    <div class="cats-navbar__middle">
      <slot></slot>
    </div>
    <div class="cats-navbar__right" v-if="showRight">
      <slot name="right">
        <cats-icon name="ellipsis"></cats-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { navbarProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";

const [name] = createNamespace("navbar");

export default defineComponent({
  name,
  props: navbarProps,
  components: {
    CatsIcon,
  },
  setup(props, { slots }) {
    const style = computed(() => {
      const _style: any = {};
      if (props.backgroundColor) _style.backgroundColor = props.backgroundColor;
      if (props.color) _style.color = props.color;
      return _style;
    });

    return {
      style,
    };
  },
});
</script>