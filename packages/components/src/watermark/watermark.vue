<template>
  <div class="cats-watermark"></div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent } from "vue";
import { watermarkProps } from "./types";
import { createNamespace } from "../utils/create";

const [name] = createNamespace("watermark");

export default defineComponent({
  name,
  props: watermarkProps,
  setup(props) {},
});
</script>