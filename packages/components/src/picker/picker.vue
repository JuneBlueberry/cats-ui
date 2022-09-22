<template>
  <div class="cats-picker">
    <div class="cats-picker__header">
      <span class="cats-picker__header--btn cats-picker__header--btn--cancel"
        >取消</span
      >
      <span class="cats-picker__header--btn cats-picker__header--btn--confirm"
        >确定</span
      >
    </div>
    <div class="cats-picker__body">
      <div class="cats-picker__group">
        <div class="cats-picker__mask"></div>
        <div
          class="cats-picker__content"
          :style="style"
          @touchstart="start($event)"
          @touchmove="move($event)"
          @touchend="end($event)"
        >
          <div
            class="cats-picker__item"
            v-for="(item, index) in items"
            :key="index"
            :style="item.style"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils";
import { pickerProps } from "./types";

const [name] = createNamespace("picker");

type Pos = {
  x: number;
  y: number;
  time?: Number | any;
};

export default defineComponent({
  name,
  props: pickerProps,
  emits: ["start", "move", "end"],
  setup(props, { emit }) {
    let startPos: Pos;
    let endPos: Pos;
    const count = 7;
    const middle = count % 2 == 0 ? count / 2 : (count + 1) / 2;
    const height = 42;
    const init = ref(0);
    let current = 0;
    const style = ref({
      transform: "",
      transition: "",
    });

    const items = computed(() => {
      console.log(props.actions);

      return props.actions.map((x, index) => {
        const _style: any = {};
        if (index <= count) {
          _style.transform = `rotateX(${15 * (middle - index - 1)}deg)`;
        }
        return {
          ...x,
          style: _style,
        };
      });
    });

    const start = (event: TouchEvent) => {
      const touch = event.targetTouches[0];
      startPos = {
        x: touch.pageX,
        y: touch.pageY,
        time: +new Date(),
      };
      emit("start", event);
    };

    const move = (event) => {
      if (event.targetTouches.length > 1 || (event.scale && event.scale !== 1))
        return;
      const touch = event.targetTouches[0];
      endPos = {
        x: touch.pageX - startPos.x,
        y: touch.pageY - startPos.y,
      };
      //阻止触摸事件的默认行为，即阻止滚屏
      event.preventDefault();

      change(false, endPos);
    };

    const end = (event: TouchEvent) => {
      emit("end", event);

      change(true, endPos);
    };

    const change = (isEnd: Boolean, endPos: Pos) => {
      let distance = endPos.y;
      if (isEnd) {
        current += Math.round(endPos.y / 42);
        distance = current * 42;

        style.value = {
          transform: `translate3d(0px, ${distance}px, 0px)`,
          transition: "all 0.2s ease 0.2s",
        };
      } else {
        distance = current * 42 + endPos.y;
        style.value = {
          transform: `translate3d(0px, ${distance}px, 0px)`,
          transition: "all 0s ease 0s",
        };
      }
    };

    return {
      style,
      items,
      start,
      move,
      end,
    };
  },
});
</script>

<style>
</style>