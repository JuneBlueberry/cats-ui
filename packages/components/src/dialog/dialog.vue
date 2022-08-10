<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :custom-class="overlayClass"
    :custom-style="overlayStyle"
    @click="clickOverlay"
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
          <span class="cats-dialog__body--constent">{{ content }}</span>
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
            >
              {{ cancelText }}
            </div>
            <div
              class="
                cats-dialog__footer-btns--item cats-dialog__footer-btns--confirm
              "
              :style="confirmStyle"
              v-if="showConfirm"
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
import { dialogPopup } from "./types";

const [name] = createNamespace("popup");

export default defineComponent({
  name,
  props: dialogPopup,
  emits: ["click", "click-overlay", "open", "close"],
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

    // 点击蒙层事件
    const clickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);
      props.closeClickOverlay && close();
    };
    // 打开弹出层
    const open = () => {
      emit("open");
    };
    // 关闭弹出层
    const close = () => {
      emit("close");
    };

    return {
      style,
      confirmStyle,
      show,
      overlayClass: props.overlayClass,
      overlayStyle: props.overlayStyle,
      clickOverlay,
    };
  },
});
</script>