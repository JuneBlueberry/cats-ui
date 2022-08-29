<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Porgress</h1>
      <p class="demo-desc">进度条</p>
    </div>
    <div class="demo-group">
      <cats-progress class="margin-t" :percentage="percentage"></cats-progress>
      <cats-progress
        class="margin-t"
        :percentage="percentage"
        color="red"
      ></cats-progress>
      <cats-progress
        class="margin-t"
        :percentage="percentage"
        color="blue"
        size="8"
        round
      ></cats-progress>
    </div>
    <div class="demo-group">
      <cats-button @click="onClick">加进度</cats-button>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsProgress, CatsButton } from "cats-ui";
import { computed, ref } from "vue";
export default {
  components: {
    CatsProgress,
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
.demo-page {
  background-color: #ffffff;
}
.demo-group {
  padding: 0 60px;
}
</style>