<template>
  <div class="cats-swiperitem"></div>
</template>

<script>
import "./style/index.scss";
import { defineComponent } from "vue";
import { createNamespace } from "../utils";
import { swiperItemProps } from "./types";

const [name] = createNamespace("swiper-item");
export default defineComponent({
  name,
  props: swiperItemProps,
});
</script>

<style>
</style>