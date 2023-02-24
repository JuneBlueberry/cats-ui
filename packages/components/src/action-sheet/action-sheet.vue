<template>
  <cats-overlay
    :show="show"
    :duration="duration"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    @click="onClickOverlay"
  ></cats-overlay>
  <transition name="cats-slide-bottom" appear>
    <div class="cats-actionsheet" :style="style" v-show="show">
      <div class="cats-actionsheet__title" v-if="title">{{ title }}</div>
      <div class="cats-actionsheet__menus">
        <div
          :class="[
            'cats-actionsheet__menus--item',
            menu.disabled ? 'cats-actionsheet__menus--disabled' : '',
          ]"
          :style="menu.style"
          v-for="menu in menus"
          :key="menu.key"
          @click="onSelect(menu)"
        >
          <cats-loading
            class="cats-actionsheet__menus--loading"
            v-if="menu.loading"
          ></cats-loading>
          {{ menu.name }}
        </div>
      </div>
      <div class="cats-actionsheet__cancel" v-if="showCancel">
        <div
          class="cats-actionsheet__cancel--btn"
          :style="cancelStyle"
          @click="onCancel"
        >
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
import { actionSheetProps } from "./types";

const [name] = createNamespace("action-sheet");

export default defineComponent({
  name,
  props: actionSheetProps,
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
      props.actions.forEach((action, index) => {
        _menus.push(
          Object.assign({}, action, {
            index,
            key: action.key || index,
            style: action.color ? { color: action.color } : {},
          })
        );
      });
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
      if (menu.loading || menu.disabled) return;
      menu.callback &&
        menu.callback(props.actions[menu.index], menu.index, props.actions);
      emit("select", props.actions[menu.index], menu.index, props.actions);
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