<template>
  <div class="cats-switch" :class="styleClass" :style="style" @click="onClick">
    <div class="cats-switch__node" :class="nodeClass">
      <slot>
        <cats-loading v-if="loading" :color="loadingColor"></cats-loading>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import CatsLoading from "../loading";
import { createNamespace } from "../utils";
import { switchProps } from "./types";

const [name] = createNamespace("switch");

export default defineComponent({
  name,
  props: switchProps,
  emits: ["update:modelValue", "click", "change"],
  components: {
    CatsLoading,
  },
  setup(props, { emit }) {
    const styleClass = computed(() => {
      return {
        ["cats-switch--active"]: props.modelValue,
        ["cats-switch--disabled"]: props.disabled,
      };
    });

    const nodeClass = computed(() => {
      return {
        ["cats-switch__node--active"]: props.modelValue,
      };
    });

    const style = computed(() => {
      const _bgColor = props.modelValue
        ? props.activeColor
        : props.inactiveColor;
      return {
        backgroundColor: _bgColor,
      };
    });

    const onClick = (event: MouseEvent) => {
      if (props.disabled) return;

      emit("click", event);
      emit("update:modelValue", !props.modelValue);
      emit("change", !props.modelValue);
    };

    return {
      styleClass,
      nodeClass,
      style,
      onClick,
    };
  },
});
</script>

<style>
</style>