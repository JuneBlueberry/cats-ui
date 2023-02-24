<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Slider</h1>
      <p class="demo-desc">滑块</p>
    </div>
    <div class="demo-group">
      <div class="demo-content-title">基础</div>
      <cats-slider class="margin-t" v-model="model1"></cats-slider>
      <div class="demo-content-title">指定范围</div>
      <cats-slider
        class="margin-t"
        min="-50"
        max="50"
        v-model="model2"
      ></cats-slider>
      <div class="demo-content-title">自定义样式</div>
      <cats-slider
        class="margin-t"
        v-model="model3"
        color="blue"
        size="8"
        round
      ></cats-slider>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsSlider, CatsButton } from "cats-ui";
import { computed, ref } from "vue";
export default {
  components: {
    CatsSlider,
    CatsButton,
  },
  setup() {
    const model1 = ref(50);
    const model2 = ref(0);
    const model3 = ref(50);

    return {
      model1,
      model2,
      model3,
    };
  },
};
</script>
<style scoped>
.demo-group {
  padding: 0 40px;
}
.demo-content-title {
  margin: 30px 0 10px 0;
}
.demo-content-title:first-child {
  margin-top: 0;
}
</style>