<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Gallery</h1>
      <p class="demo-desc">画廊</p>
    </div>
    <div class="demo-group">
      <cats-gallery
        :show="true"
        :urls="imgList"
        current="https://weui.io/images/pic_article.png"
        icon="delete"
      ></cats-gallery>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsGallery } from "cats-ui";
import { computed, ref } from "vue";
export default {
  components: {
    CatsGallery,
  },
  setup() {
    const imgList = [
      "",
      "https://weui.io/images/pic_article.png",
      "https://weui.io/images/pic_article.png",
      "https://weui.io/images/pic_article.png",
    ];

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