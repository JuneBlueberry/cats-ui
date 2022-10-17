<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Watermark</h1>
      <p class="demo-desc">水印</p>
    </div>
    <div class="demo-group">
      <cats-button shape="secondary" @click="showToast1">文字水印</cats-button>
    </div>
    <CatsWatermark></CatsWatermark>
  </div>
</template>
<script lang="ts">
import { CatsButton, CatsWatermark } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsWatermark,
  },
  setup() {
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const show5 = ref(false);
    const show6 = ref(false);

    return {
      show1,
      show2,
      show3,
      show4,
      show5,
      show6,
    };
  },
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>