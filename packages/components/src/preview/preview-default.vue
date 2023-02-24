<template>
  <div class="cats-preview-default">
    <div class="cats-preview-default__header">
      <label class="cats-preview-default__header--name">{{ model.name }}</label>
      <em class="cats-preview-default__header--title">{{ model.title }}</em>
    </div>
    <div class="cats-preview-default__main">
      <div
        class="cats-preview-default__main-item"
        v-for="(info, index) in model.infos"
        :key="index"
      >
        <label class="cats-preview-default__main-item--key">{{
          info.label
        }}</label>
        <span class="cats-preview-default__main-item--value">{{
          info.value
        }}</span>
      </div>
    </div>
    <div class="cats-preview-default__footer">
      <a
        class="cats-preview-default__footer--btn"
        v-for="(btn, index) in model.buttons"
        :key="index"
        :style="{ color: btn.color }"
        @click="onClick(btn)"
      >
        {{ btn.name }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { previewProps, ButtonInfo } from "./types";
export default defineComponent({
  name: "PreviewDefault",
  props: previewProps,
  emits: ["click"],
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