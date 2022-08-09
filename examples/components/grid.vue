<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Grid</h1>
      <p class="demo-desc">Grid 按钮</p>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">按钮类型</span>
      <cats-grid class="margin-t">主要-默认按钮</cats-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsGrid } from "cats-ui";
export default {
  components: {
    CatsGrid,
  },
};
</script>
<style scoped>
</style>