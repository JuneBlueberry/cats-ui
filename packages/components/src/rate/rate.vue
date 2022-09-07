<template>
  <div class="cats-rate">
    <template v-for="item in Number(max)" :key="item">
      <cats-icon
        v-if="item > modelValue"
        name="star"
        :color="inactiveColor"
        @click="onClick(item)"
      ></cats-icon>
      <cats-icon
        v-else
        name="star-fill"
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
    const onClick = (item) => {
      console.log(item);
      emit("click", item);
      emit("update:modelValue", item);
    };

    return {
      onClick,
    };
  },
});
</script>

<style>
</style>