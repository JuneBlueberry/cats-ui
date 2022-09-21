<template>
  <div class="cats-picker">
    <div class="cats-picker__header"></div>
    <div class="cats-picker__wrapper"></div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { createNamespace } from "../utils";
import { pickerProps } from "./types";

const [name] = createNamespace("picker");

export default defineComponent({
  name,
});
</script>

<style>
</style>