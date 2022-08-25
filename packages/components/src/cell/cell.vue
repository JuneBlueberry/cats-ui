<template>
  <div class="cats-cell" :class="styleClass" @click="onClick">
    <div v-if="icon" class="cats-cell__left">
      <cats-icon :name="icon" :size="20"></cats-icon>
    </div>
    <div class="cats-cell__content">
      <div class="cats-cell__content--title">{{ title }}</div>
      <div class="cats-cell__content--label" v-if="label">{{ label }}</div>
    </div>
    <div class="cats-cell__right">
      <div class="cats-cell__right--desc">{{ value }}</div>
      <cats-icon v-if="showLink" name="right" :size="17"></cats-icon>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import CatsIcon from "../icon";
import { createNamespace } from "../utils";
import { cellProps } from "./types";

const [name] = createNamespace("cell");

export default defineComponent({
  name,
  props: cellProps,
  emits: ["click"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const styleClass = computed(() => {
      return {
        ["cats-cell--icon"]: props.icon,
        ["cats-cell--active"]: props.showLink,
      };
    });

    const onClick = (event: MouseEvent) => {
      console.log("11");
      emit("click", event);
    };

    return {
      styleClass,
      onClick,
    };
  },
});
</script>