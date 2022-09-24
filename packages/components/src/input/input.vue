<template>
  <div class="cats-input">
    <div class="cats-input__left">
      <span>{{ label }}</span>
    </div>
    <div class="cats-input__content">
      <input
        class="cats-input__content-input"
        v-model="modelValue"
        type="text"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { inputProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";

const [name] = createNamespace("input");

export default defineComponent({
  name,
  props: inputProps,
  setup(props) {},
});
</script>

<style>
</style>