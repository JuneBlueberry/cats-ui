<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    @click="clickOverlay"
  ></cats-overlay>
  <transition name="cats-slide-bottom" appear>
    <div class="cats-actionsheet" :style="style" v-show="show">
      <div class="cats-actionsheet__title">标题</div>
      <div class="cats-actionsheet__menus">
        <div class="cats-actionsheet__menus--item">菜单一</div>
        <div class="cats-actionsheet__menus--item">菜单二</div>
        <div class="cats-actionsheet__menus--item">菜单三</div>
      </div>
      <div class="cats-actionsheet__cancel">
        <div class="cats-actionsheet__cancel--btn">取消</div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import CatsOverlay from "../overlay";
import { actionSheetProps } from "./types";

const [name] = createNamespace("action-sheet");

export default defineComponent({
  name,
  props: actionSheetProps,
  emits: ["click", "click-overlay", "close", "open"],
  components: {
    CatsOverlay,
  },
  setup(props, { emit }) {
    let opened: Boolean;

    const style = computed(() => {
      const animationDuration = Number(props.duration);
      return {
        animationDuration: `${animationDuration}ms`,
      };
    });

    const show = computed(() => {
      opened = props.show;
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

    // 点击弹出层事件
    const onClick = (event: MouseEvent) => {
      emit("click", event);
    };
    // 点击蒙层事件
    const clickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);
      close();
    };

    return {
      style,
      show,
      overlayClass: props.overlayClass,
      overlayStyle: props.overlayStyle,
      onClick,
      clickOverlay,
    };
  },
});
</script>