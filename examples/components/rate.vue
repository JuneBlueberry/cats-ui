<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Rate</h1>
      <p class="demo-desc">评分</p>
    </div>
    <div class="demo-group">
      <cats-rate v-model="value1"></cats-rate>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsRate } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsRate,
  },
  setup() {
    const value1 = ref(0);

    return {
      value1,
    };
  },
};
</script>
<style scoped>
</style>