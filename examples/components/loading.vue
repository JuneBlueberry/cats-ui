<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Loading</h1>
      <p class="demo-desc">加载</p>
    </div>
    <div class="demo-group">
      <cats-loading class="margin-lr"></cats-loading>
      <cats-loading class="margin-lr" color="#07c160"></cats-loading>
      <cats-loading class="margin-lr" size="24"></cats-loading>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsLoading } from "cats-ui";
export default {
  components: {
    CatsLoading,
  },
  setup() {},
};
</script>
<style scoped>
</style>