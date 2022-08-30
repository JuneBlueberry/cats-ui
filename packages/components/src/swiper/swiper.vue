<template>
  <div class="cats-swiper">
    <div
      class="cats-swiper__wrapper"
      ref="warpper"
      :style="style"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
      <div class="cats-swiper__item">111</div>
      <div class="cats-swiper__item">222</div>
      <div class="cats-swiper__item">333</div>
      <div class="cats-swiper__item">444</div>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import {
  defineComponent,
  computed,
  ref,
  nextTick,
  reactive,
  onMounted,
} from "vue";
import { createNamespace } from "../utils";
import { swiperProps } from "./types";

const [name] = createNamespace("swiper");

type Pos = {
  x: number;
  y: number;
  time?: Number | any;
};

type Positon = "left" | "right" | "top" | "bottom";

export default defineComponent({
  name,
  props: swiperProps,
  setup(props) {
    const style = ref({
      transitionDuration: "0ms",
      transform: "",
    });
    let maxNum = 4;
    let num = 0;
    let width: number;
    let height: number;
    let startPos: Pos;
    let endPos: Pos;
    //isScrolling为1时，表示纵向滑动，0为横向滑动
    let scrolling: Number = 0;
    let position: Positon;

    const warpper = ref<HTMLElement>();

    nextTick(() => {
      console.log(warpper.value);
      width = warpper.value?.clientWidth || 0;
      height = warpper.value?.clientHeight || 0;
    });

    const start = (event) => {
      const touch = event.targetTouches[0];
      startPos = {
        x: touch.pageX,
        y: touch.pageY,
        time: +new Date(),
      };
    };

    const move = (event) => {
      //当屏幕有多个touch或者页面被缩放过，就不执行move操作
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

    const end = (event) => {
      endPos.time = +new Date() - startPos.time;
      change(true, endPos);
    };

    const change = (isEnd: Boolean, endPos: Pos) => {
      let distance = "";
      let transitionDuration = "";
      // 判断方向
      position =
        scrolling === 0
          ? endPos.x >= 0
            ? "left"
            : "right"
          : endPos.y >= 0
          ? "top"
          : "bottom";
      if (
        (position === "right" && num >= maxNum - 1) ||
        (position === "left" && num <= 0)
      )
        return;
      if (isEnd) {
        if (scrolling === 0) {
          if (Number(endPos.time) > 10) {
            //判断是左移还是右移，当偏移量大于10时执行
            if (position === "left" && endPos.x > 50) {
              num--;
            } else if (position === "right" && endPos.x < -50) {
              num++;
            }
            distance = `-${num * width}px`;
            transitionDuration = "300ms";
          }
        }
      } else {
        if (scrolling === 0) {
          distance = `${endPos.x - num * width}px`;
          transitionDuration = "0ms";
        }
      }
      style.value = {
        transform: `translate3d(${distance}, 0px, 0px)`,
        transitionDuration,
      };
    };

    return {
      start,
      move,
      end,
      style,
      warpper,
    };
  },
});
</script>

<style>
</style>