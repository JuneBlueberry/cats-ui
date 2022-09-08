<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    @click="onClickOverlay"
  ></cats-overlay>
  <transition name="cats-slide-bottom" appear>
    <div class="cats-sharesheet" :style="style" v-show="show">
      <div class="cats-sharesheet__header">
        <div class="cats-sharesheet__header-wrapper">
          <div class="cats-sharesheet__header-wrapper--title">CatsUI</div>
        </div>
      </div>
      <div class="cats-sharesheet__main">
        <div class="cats-sharesheet__main-item">
          <div class="cats-sharesheet__main-item--icon"></div>
          <div class="cats-sharesheet__main-item--name">QQ</div>
        </div>
        <div class="cats-sharesheet__main-item">
          <div class="cats-sharesheet__main-item--icon"></div>
          <div class="cats-sharesheet__main-item--name">QQ</div>
        </div>
        <div class="cats-sharesheet__main-item">
          <div class="cats-sharesheet__main-item--icon"></div>
          <div class="cats-sharesheet__main-item--name">QQ</div>
        </div>
      </div>
      <div class="cats-sharesheet__cancel" v-if="showCancel" @click="onCancel">
        <div class="cats-sharesheet__cancel--btn" :style="cancelStyle">
          {{ cancelText }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import CatsOverlay from "../overlay";
import CatsLoading from "../loading";
import { shareSheetProps } from "./types";
import { Actions } from "../action-sheet/types";

const [name] = createNamespace("share-sheet");

export default defineComponent({
  name,
  props: shareSheetProps,
  emits: ["click", "click-overlay", "close", "open", "cancel", "select"],
  components: {
    CatsOverlay,
    CatsLoading,
  },
  setup(props, { emit }) {
    let opened: Boolean;

    const style = computed(() => {
      const animationDuration = Number(props.duration);
      return {
        animationDuration: `${animationDuration}ms`,
      };
    });

    const cancelStyle = computed(() => {
      return {
        color: props.cancelColor,
      };
    });

    const menus = computed(() => {
      const _menus: any = [];

      return _menus;
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
      opened && emit("close");
    };
    // 点击取消按钮事件
    const onCancel = (event: MouseEvent) => {
      emit("cancel", event);
      close();
    };
    // 点击蒙层事件
    const onClickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);
      close();
    };
    // 点击菜单
    const onSelect = (menu) => {
      // if (menu.loading || menu.disabled) return;
      // menu.callback &&
      //   menu.callback(props.actions[menu.index], menu.index, props.actions);
      // emit("select", props.actions[menu.index], menu.index, props.actions);
    };

    return {
      style,
      cancelStyle,
      show,
      menus,
      overlayClass: props.overlayClass,
      overlayStyle: props.overlayStyle,
      onCancel,
      onSelect,
      onClickOverlay,
    };
  },
});
</script>