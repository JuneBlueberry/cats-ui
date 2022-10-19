<template>
  <div class="cats-noticebar">
    <div class="cats-noticebar__left-icon"></div>
    <div ref="contentRef" class="cats-noticebar__content">
      <div
        ref="textRef"
        class="cats-noticebar__content-text cats-noticebar__content-text--cycle"
      >
        我是一个提示小时哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </div>
    <div class="cats-noticebar__right-icon"></div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, ref, nextTick } from "vue";
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
    const contextWidth = ref(0);
    const textWidth = ref(0);
    const textStyle = ref({});

    const contentRef = ref<HTMLElement>();
    const textRef = ref<HTMLElement>();
    nextTick(() => {
      contextWidth.value = contentRef.value?.clientWidth || 0;
      textWidth.value = textRef.value?.clientWidth || 0;
    });

    const scroll = () => {};

    return {
      contentRef,
      textRef,
      contextWidth,
      textWidth,
    };
  },
});
</script>

<style>
</style>