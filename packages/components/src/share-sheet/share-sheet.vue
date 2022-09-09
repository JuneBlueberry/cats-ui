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
      <div
        class="cats-sharesheet__main"
        v-for="(line, index) in menus"
        :key="index"
      >
        <div
          class="cats-sharesheet__main-item"
          v-for="(menu, index2) in line"
          :key="index2"
        >
          <div class="cats-sharesheet__main-item--icon">
            <cats-icon :name="menu.icon" size="36"></cats-icon>
          </div>
          <div class="cats-sharesheet__main-item--name">{{ menu.name }}</div>
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
import CatsIcon from "../icon";
import { shareSheetProps } from "./types";
import { Actions, ActionsArray } from "../share-sheet/types";

const [name] = createNamespace("share-sheet");

export default defineComponent({
  name,
  props: shareSheetProps,
  emits: ["click", "click-overlay", "close", "open", "cancel", "select"],
  components: {
    CatsOverlay,
    CatsIcon,
  },
  setup(props, { emit }) {
    let opened: Boolean;
    let single: Boolean;

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
      let _menus: Actions[][] = [];
      const result: Actions[][] = [];
      if (props.actions.length == 0) return [];
      if (!Array.isArray(props.actions[0])) {
        single = true;
        _menus.push(props.actions as Actions[]);
      } else {
        single = false;
        _menus = props.actions as Actions[][];
      }
      _menus.forEach((element) => {
        const _result: Actions[] = [];
        element.forEach((item, index) => {
          _result.push({
            ...item,
            key: item.key || index,
            icon: item.type ? `color-${item.type}` : item.icon,
          });
        });
        result.push(_result);
      });
      return result;
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