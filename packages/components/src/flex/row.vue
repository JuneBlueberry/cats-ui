<template>
  <div class="cats-row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { rowProps } from "./types";
export default defineComponent({
  name: "cats-row",
  props: rowProps,
  setup(props) {

  },
});
</script>