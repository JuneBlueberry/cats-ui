<template>
  <div class="cats-noticebar">
    <div class="cats-noticebar__left-icon"></div>
    <div ref="contentRef" class="cats-noticebar__content">
      <div
        ref="textRef"
        :class="contentClass"
        :style="textStyle"
        @transitionend="transitionend"
      >
        我是一个提示小时哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </div>
    <div class="cats-noticebar__right-icon"></div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, ref, nextTick, computed } from "vue";
import { navbarProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";

const [name] = createNamespace("noticebar");

export default defineComponent({
  name,
  props: navbarProps,
  components: {
    CatsIcon,
  },
  setup(props) {
    let scrollCount = 0;
    const contextWidth = ref(0);
    const textWidth = ref(0);
    const textStyle = ref({
      transitionDuration: "0ms",
      transform: "",
    });

    const contentClass = computed(() => {
      return [
        "cats-noticebar__content-text",
        `cats-noticebar__content-text--${props.mode}`,
      ];
    });

    const contentRef = ref<HTMLElement>();
    const textRef = ref<HTMLElement>();
    nextTick(() => {
      contextWidth.value = contentRef.value?.clientWidth || 0;
      textWidth.value = textRef.value?.clientWidth || 0;

      scroll();
    });

    const scroll = () => {
      const _speed = (textWidth.value / Number(props.speed)) * 1000;
      textStyle.value = {
        transitionDuration: `${_speed}ms`,
        transform: `translate3d(-${textWidth.value}px, 0px, 0px)`,
      };
    };

    const transitionend = () => {
      textStyle.value = {
        transitionDuration: ``,
        transform: `translate3d(${contextWidth.value}px, 0px, 0px)`,
      };
      requestAnimationFrame(() => {
        const width = textWidth.value + contextWidth.value;
        const _speed = (width / Number(props.speed)) * 1000;
        textStyle.value = {
          transitionDuration: `${_speed}ms`,
          transform: `translate3d(-${textWidth.value}px, 0px, 0px)`,
        };
      });
    };

    return {
      contentClass,
      textStyle,
      contentRef,
      textRef,
      contextWidth,
      textWidth,
      transitionend,
    };
  },
});
</script>

<style>
</style>