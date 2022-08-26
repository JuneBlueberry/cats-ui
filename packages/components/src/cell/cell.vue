<template>
  <div class="cats-cell" :class="styleClass" @click="onClick">
    <slot name="icon">
      <div v-if="icon" class="cats-cell__left">
        <cats-icon :name="icon" :size="20"></cats-icon>
      </div>
    </slot>
    <div class="cats-cell__content">
      <slot name="title">
        <div class="cats-cell__content--title">{{ title }}</div>
      </slot>
      <slot name="label">
        <div class="cats-cell__content--label" v-if="label">{{ label }}</div>
      </slot>
    </div>
    <div class="cats-cell__right">
      <slot>
        <div class="cats-cell__right--desc">{{ value }}</div>
      </slot>
      <slot name="right">
        <cats-icon
          class="cats-cell__right--icon"
          v-if="showLink"
          name="right"
          :size="17"
        ></cats-icon>
      </slot>
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
      emit("click", event);
    };

    return {
      styleClass,
      onClick,
    };
  },
});
</script>