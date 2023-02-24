<template>
  <div class="cats-swiper" :style="swiperStyle">
    <div
      class="cats-swiper__wrapper"
      ref="warpper"
      :style="style"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
      <template v-if="imgList.length > 0">
        <img
          class="cats-swiper__item"
          v-for="(img, index) in imgList"
          :key="index"
          :src="img"
        />
      </template>
    </div>
    <div
      v-if="showSubscript"
      :class="[
        'cats-swiper__indicator',
        showShadow ? 'cats-swiper__indicator--shadow' : '',
      ]"
    >
      <span
        :class="[
          'cats-swiper__indicator--dot',
          index == num ? 'cats-swiper__indicator--active' : '',
        ]"
        v-for="(img, index) in imgList"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref, nextTick, watchEffect } from "vue";
import { createNamespace } from "../utils";
import { swiperProps } from "./types";

const [name] = createNamespace("swiper");

type Pos = {
  x: number;
  y: number;
  time?: Number | any;
};

type Position = "left" | "right" | "top" | "bottom";

export default defineComponent({
  name,
  props: swiperProps,
  emits: ["previous", "next", "start", "end"],
  setup(props, { emit }) {
    const swiperStyle = computed(() => {
      const _style: any = {};
      if (props.height) _style.height = `${Number(props.height)}px`;
      return _style;
    });
    const style = ref({
      transitionDuration: "0ms",
      transform: "",
    });
    const maxNum = computed(() => {
      return props.imgList.length;
    });
    let num = ref(Number(props.active));
    let width: number;
    let height: number;
    let startPos: Pos;
    let endPos: Pos;
    //isScrolling为1时，表示纵向滑动，0为横向滑动
    let scrolling: Number = 0;
    let timer: any = null;

    const warpper = ref<HTMLElement>();
    nextTick(() => {
      width = warpper.value?.clientWidth || 0;
      height = warpper.value?.clientHeight || 0;

      // 是否有初始值
      watchEffect(() => {
        style.value.transform = `translate3d(-${
          num.value * width
        }px, 0px, 0px)`;
      });
    });

    // 是否自动轮播
    watchEffect(() => {
      if (props.auto) {
        timer = setInterval(() => {
          change(true, { x: 0, y: 0 }, "right", true);
        }, Number(props.interval));
      } else {
        clearInterval(timer);
      }
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
      change(false, endPos, getPosition(endPos));
    };

    const end = (event: TouchEvent) => {
      endPos.time = +new Date() - startPos.time;
      change(true, endPos, getPosition(endPos));
      emit("end", event);
    };

    const change = (
      isEnd: Boolean,
      endPos: Pos,
      position: Position,
      isAuto?: Boolean
    ) => {
      let distance = "";
      let transitionDuration = "";
      if (
        !isAuto &&
        ((position === "right" && num.value >= maxNum.value - 1) ||
          (position === "left" && num.value <= 0))
      ) {
        return;
      }
      if (isEnd) {
        if (isAuto) {
          if (position === "left") {
            num.value =
              num.value <= 0 ? (props.loop ? maxNum.value : 0) : num.value - 1;
          } else if (position === "right") {
            num.value =
              num.value >= maxNum.value - 1
                ? props.loop
                  ? 0
                  : maxNum.value - 1
                : num.value + 1;
          }
        } else if (
          Number(endPos.time) > 10 &&
          (endPos.x > Number(props.threshold) ||
            endPos.x < -Number(props.threshold))
        ) {
          if (position === "left") {
            num.value = num.value <= 0 ? 0 : num.value - 1;
          } else if (position === "right") {
            num.value =
              num.value >= maxNum.value - 1 ? maxNum.value - 1 : num.value + 1;
          }
        }
      }

      if (isEnd) {
        if (scrolling === 0) {
          distance = `-${num.value * width}px`;
          transitionDuration = "300ms";
        }
        if (position === "right" || position === "bottom") {
          emit("next", num.value, props.imgList[num.value]);
        } else {
          emit("previous", num.value, props.imgList[num.value]);
        }
      } else {
        if (scrolling === 0) {
          distance = `${endPos.x - num.value * width}px`;
          transitionDuration = "0ms";
        }
      }
      style.value = {
        transform: `translate3d(${distance}, 0px, 0px)`,
        transitionDuration,
      };
    };

    const getPosition = (endPos: Pos): Position => {
      if (scrolling === 0) {
        return endPos.x >= 0 ? "left" : "right";
      } else {
        return endPos.y >= 0 ? "top" : "bottom";
      }
    };

    return {
      style,
      swiperStyle,
      warpper,
      num,
      maxNum,
      start,
      move,
      end,
    };
  },
});
</script>

<style>
</style>