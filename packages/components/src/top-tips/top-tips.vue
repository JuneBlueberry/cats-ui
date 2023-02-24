<template>
  <transition :name="animationName" appear>
    <div
      class="cats-toptips"
      :class="styleClass"
      v-show="show"
      @click="onClick"
    >
      {{ title }}
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import { topTipsProps } from "./types";

const [name] = createNamespace("top-tips");

export default defineComponent({
  name,
  props: topTipsProps,
  emits: ["open", "close"],
  setup(props, { emit }) {
    let opened: Boolean;

    const styleClass = computed(() => {
      return {
        [`cats-toptips__type--${props.type}`]: props.type,
      };
    });

    const animationName = computed(() => {
      return props.animation == "fade" ? "cats-fade" : "cats-slide-top";
    });

    const show = computed(() => {
      opened = props.show;
      opened ? open() : close();
      return props.show;
    });

    // 打开弹出层
    const open = () => {
      emit("open");
    };
    // 关闭弹出层
    const close = () => {
      emit("close");
    };

    return {
      styleClass,
      animationName,
      show,
    };
  },
});
</script>