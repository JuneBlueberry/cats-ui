<template>
  <div class="cats-progress">
    <div class="cats-progress__bar" :class="rountClass" :style="barStyle">
      <div
        class="cats-progress__inner-bar"
        :class="rountClass"
        :style="innerStyle"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { createNamespace } from "../utils";
import { progressProps } from "./types";

const [name] = createNamespace("progress");

export default defineComponent({
  name,
  props: progressProps,
  setup(props, { emit }) {
    const rountClass = computed(() => {
      return {
        [`cats-progress--round`]: props.round,
      };
    });

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
      if (props.percentage) {
        let _percentage = Number(props.percentage);
        if (_percentage > 100) _percentage = 100;
        else if (_percentage < 0) _percentage = 0;
        _style.width = `${_percentage}%`;
      }
      if (props.color) _style.backgroundColor = props.color;
      if (props.size) {
        _style.height = `${Number(props.size)}px`;
        _style.borderRadius = `${Number(props.size)}px`;
      }
      return _style;
    });

    return {
      rountClass,
      barStyle,
      innerStyle,
    };
  },
});
</script>