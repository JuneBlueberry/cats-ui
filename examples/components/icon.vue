<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Icon</h1>
      <p class="demo-desc">图标</p>
    </div>
    <div class="demo-group">
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