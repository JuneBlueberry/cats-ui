<template>
  <div class="cats-rate" :class="styleClass">
    <template v-for="item in Number(max)" :key="item">
      <cats-icon
        v-if="item > modelValue"
        :name="activeIcon"
        :color="inactiveColor"
        @click="onClick(item)"
      ></cats-icon>
      <cats-icon
        v-else
        :name="inactiveIcon"
        :color="activeColor"
        @click="onClick(item)"
      ></cats-icon>
    </template>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { rateProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";

const [name] = createNamespace("navbar");

export default defineComponent({
  name,
  props: rateProps,
  emits: ["click", "update:modelValue"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const styleClass = () => {
      return {
        ["cats-rate--disabled"]: props.disabled,
      };
    };

    const activeColor = computed(() => {
      return props.disabled ? "rgba(0,0,0,0.2)" : props.activeColor;
    });

    const onClick = (item) => {
      if (props.disabled || props.readonly) return;
      emit("click", item);
      emit("update:modelValue", item);
    };

    return {
      styleClass,
      activeColor,
      onClick,
    };
  },
});
</script>

<style>
</style>