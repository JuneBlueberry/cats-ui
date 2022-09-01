<template>
  <div class="cats-preview">
    <preview-default :model="model" @click="onClick"></preview-default>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { createNamespace } from "../utils";
import { previewProps, ButtonInfo } from "./types";
import PreviewDefault from "./preview-default.vue";

const [name] = createNamespace("preview");

export default defineComponent({
  name,
  props: previewProps,
  emits: ["click"],
  components: {
    PreviewDefault,
  },
  setup(props, { emit }) {
    const onClick = (btn: ButtonInfo) => {
      emit("click", btn);
    };

    return {
      onClick,
    };
  },
});
</script>

<style>
</style>