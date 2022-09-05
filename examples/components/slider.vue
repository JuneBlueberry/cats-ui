<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Slider</h1>
      <p class="demo-desc">滑块</p>
    </div>
    <div class="demo-group">
      <cats-slider class="margin-t" v-model="percentage"></cats-slider>
      <cats-slider
        class="margin-t"
        v-model="percentage"
        color="red"
      ></cats-slider>
      <cats-slider
        class="margin-t"
        v-model="percentage"
        color="blue"
        size="8"
        round
      ></cats-slider>
    </div>
    <div class="demo-group">
      <cats-button @click="onClick">加进度</cats-button>
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
    const percentage = ref(0);
    const onClick = () => {
      percentage.value += 10;
    };
    return {
      percentage,
      onClick,
    };
  },
};
</script>
<style scoped>
.demo-group {
  padding: 0 60px;
}
.margin-t {
  margin-top: 50px;
}
</style>