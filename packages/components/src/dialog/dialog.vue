<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    @click="onClickOverlay"
  ></cats-overlay>
  <transition name="cats-scale" appear>
    <div class="cats-dialog" v-show="show" :style="style" @click="onClick">
      <div class="cats-dialog__header">
        <slot name="header">
          <strong class="cats-dialog__header--title" v-if="showTitle">{{
            title
          }}</strong>
        </slot>
      </div>
      <div class="cats-dialog__body">
        <slot>
          <span class="cats-dialog__body--content">{{ content }}</span>
        </slot>
      </div>
      <div class="cats-dialog__footer">
        <slot>
          <div class="cats-dialog__footer-btns">
            <div
              class="
                cats-dialog__footer-btns--item cats-dialog__footer-btns--cancel
              "
              v-if="showCancel"
              @click="onClickCancel"
            >
              {{ cancelText }}
            </div>
            <div
              class="
                cats-dialog__footer-btns--item cats-dialog__footer-btns--confirm
              "
              :style="confirmStyle"
              v-if="showConfirm"
              @click="onClickConfirm"
            >
              {{ confrimText }}
            </div>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import CatsOverlay from "../overlay";
import { dialogProps } from "./types";

const [name] = createNamespace("popup");

export default defineComponent({
  name,
  props: dialogProps,
  emits: [
    "click",
    "click-overlay",
    "cancel",
    "confirm",
    "open",
    "close",
    "updateShow",
  ],
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

    const confirmStyle = computed(() => {
      return {
        color: props.confrimColor,
      };
    });

    const show = computed(() => {
      opened = props.show;
      return props.show;
    });

    const updateShow = (value: boolean) => emit("updateShow", value);

    // 点击蒙层事件
    const onClickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);
      props.closeClickOverlay && close();
    };
    // 点击取消按钮
    const onClickCancel = (event: MouseEvent) => {
      emit("cancel", event);
      close();
    };
    // 点击确定按钮
    const onClickConfirm = (event: MouseEvent) => {
      emit("confirm", event);
      close();
    };
    // 打开弹出层
    const open = () => {
      emit("open");
    };
    // 关闭弹出层
    const close = () => {
      emit("close");
      updateShow(false);
    };

    return {
      style,
      confirmStyle,
      show,
      overlayClass: props.overlayClass,
      overlayStyle: props.overlayStyle,
      onClickOverlay,
      onClickCancel,
      onClickConfirm,
    };
  },
});
</script>