<template>
  <div class="cats-row">

  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import { colProps } from "./types";
export default defineComponent({
  name: "cats-col",
  props: colProps,
  setup(props) {

  },
});
</script>