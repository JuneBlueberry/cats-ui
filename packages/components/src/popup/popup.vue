<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    @click="onClickOverlay"
  ></cats-overlay>
  <transition :name="transitionName" appear>
    <div
      class="cats-popup"
      :class="styleClass"
      :style="style"
      v-show="show"
      @click="onClick"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import CatsOverlay from "../overlay";
import { popupProps } from "./types";

const [name] = createNamespace("popup");

export default defineComponent({
  name,
  props: popupProps,
  emits: ["click", "click-overlay", "close", "open"],
  components: {
    CatsOverlay,
  },
  setup(props, { emit }) {
    let opened: Boolean;

    const styleClass = computed(() => {
      return [
        `cats-popup__position--${props.position}`,
        {
          "cats-popup__position--round": !props.round,
        },
      ];
    });

    const style = computed(() => {
      let _style: any = {};
      const animationDuration = Number(props.duration);
      const size = Number(props.size) === 0 ? "auto" : `${Number(props.size)}%`;
      const isvertical =
        props.position === "top" || props.position === "bottom";
      _style.animationDuration = `${animationDuration}ms`;
      if (isvertical) {
        _style.height = size;
      } else {
        _style.width = size;
      }
      return _style;
    });
    // transition 的动画名称
    const transitionName = computed(() => {
      return `cats-slide-${props.position}`;
    });

    const show = computed(() => {
      opened = props.show;
      opened && open();
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
    const onClickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);
      close();
    };

    return {
      styleClass,
      style,
      show,
      transitionName,
      overlayClass: props.overlayClass,
      overlayStyle: props.overlayStyle,
      onClick,
      onClickOverlay,
    };
  },
});
</script>