<template>
  <div class="cats-slider">
    <div ref="warpper" class="cats-slider__bar" :style="barStyle">
      <div
        class="cats-slider__inner-bar"
        :style="{ width: percentage + '%', ...innerStyle }"
      >
        <div class="cats-slider__inner-bar--startnode"></div>
        <div
          class="cats-slider__inner-bar--endnode"
          @touchstart="start('max', $event)"
          @touchmove="move('max', $event)"
          @touchend="end('max', $event)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref, watch, nextTick } from "vue";
import { createNamespace } from "../utils";
import { sliderProps } from "./types";

const [name] = createNamespace("slider");

type NodeType = "min" | "max";
type Pos = {
  x: number;
  y: number;
  time?: Number | any;
};

export default defineComponent({
  name,
  props: sliderProps,
  emits: ["start", "move", "end", "update:modelValue"],
  setup(props, { emit }) {
    const percentage = ref(Number(props.modelValue));
    let width: number;
    let height: number;
    let startnode: number;
    let endnode: number;
    let scale: number;
    let startPos: Pos;
    let endPos: Pos;

    const warpper = ref<HTMLElement>();
    nextTick(() => {
      width = warpper.value?.clientWidth || 0;
      height = warpper.value?.clientHeight || 0;
      percentage.value = endnode = (width * Number(percentage.value)) / 100;
      scale = width / (Number(props.max) - Number(props.min));
    });

    watch(
      () => props.modelValue,
      (value) => {
        if (value > props.max) value = 100;
        percentage.value = Number(value);
        if (width) {
          endnode = (width * Number(percentage.value)) / 100;
        }
      }
    );

    const barStyle = computed(() => {
      const _style: any = {};
      if (props.size) {
        _style.height = `${Number(props.size)}px`;
        _style.borderRadius = `${Number(props.size)}px`;
      }
      return _style;
    });

    const innerStyle = computed(() => {
      const _style: any = {};
      // if (props.modelValue) {
      //   let _percentage = Number(props.modelValue);
      //   if (_percentage > 100) _percentage = 100;
      //   else if (_percentage < 0) _percentage = 0;
      //   _style.width = `${_percentage}%`;
      // }
      if (props.color) _style.backgroundColor = props.color;
      if (props.size) {
        _style.height = `${Number(props.size)}px`;
        _style.borderRadius = `${Number(props.size)}px`;
      }
      return _style;
    });

    const start = (type: NodeType, event: TouchEvent) => {
      if (!checkMeetMove()) return;
      const touch = event.targetTouches[0];
      startPos = {
        x: touch.pageX,
        y: touch.pageY,
        time: +new Date(),
      };
      emit("start", event);
    };

    const move = (type: NodeType, event) => {
      if (!checkMeetMove()) return;
      if (event.targetTouches.length > 1 || (event.scale && event.scale !== 1))
        return;
      const touch = event.targetTouches[0];
      endPos = {
        x: touch.pageX - startPos.x,
        y: touch.pageY - startPos.y,
      };
      //阻止触摸事件的默认行为，即阻止滚屏
      event.preventDefault();

      getPercentage(endPos);
    };

    const end = (type: NodeType, event: TouchEvent) => {
      if (!checkMeetMove()) return;
      endPos.time = +new Date() - startPos.time;
      const _endnode = endnode + endPos.x;
      endnode = _endnode > width ? width : _endnode < 0 ? 0 : _endnode;
      emit(
        "update:modelValue",
        Math.round((Number(props.max) * percentage.value) / 100)
      );
      emit("end", event);
    };

    const getPercentage = (value: Pos) => {
      const _endnode = endnode + value.x;
      if (width) {
        const _percentage = (_endnode / width) * 100;
        percentage.value =
          _percentage > 100 ? 100 : _percentage < 0 ? 0 : _percentage;
      }
      console.log(percentage.value, _endnode);
    };

    const checkMeetMove = () => {
      if (endnode > width || endnode < 0) return false;
      if (percentage.value > 100 || percentage.value < 0) return false;
      return true;
    };

    return {
      barStyle,
      innerStyle,
      percentage,
      warpper,
      start,
      move,
      end,
    };
  },
});
</script>