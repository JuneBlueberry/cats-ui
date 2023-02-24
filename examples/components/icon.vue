<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Icon</h1>
      <p class="demo-desc">图标</p>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">基础用法</span>
      <cats-icon name="check"></cats-icon>
      <cats-icon name="exclaimination"></cats-icon>
      <cats-icon name="close"></cats-icon>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">徽章</span>
      <cats-icon name="accountbook"></cats-icon>
      <cats-icon name="accountbook" dot></cats-icon>
      <cats-icon name="accountbook" dot badge="10"></cats-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsIcon } from "cats-ui";
export default {
  components: {
    CatsIcon,
  },
  setup() {},
};
</script>
<style scoped>
</style>