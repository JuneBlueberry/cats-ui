<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Swiper</h1>
      <p class="demo-desc">轮播图</p>
    </div>
    <div class="demo-group">
      <cats-swiper
        :img-list="imgList"
        @next="next"
        @previous="previous"
      ></cats-swiper>
    </div>
    <div class="demo-group">
      <cats-swiper :img-list="imgList" auto loop show-shadow></cats-swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsSwiper } from "cats-ui";
import { computed, ref } from "vue";
export default {
  components: {
    CatsSwiper,
  },
  setup() {
    const imgList = ["", "", "", ""];

    return {
      imgList,
    };
  },
  methods: {
    next(index, img) {
      console.log(index, img);
    },
    previous(index, img) {
      console.log(index, img);
    },
  },
};
</script>