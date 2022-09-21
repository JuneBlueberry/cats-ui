<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Picker</h1>
      <p class="demo-desc">选择器</p>
    </div>
    <cats-picker></cats-picker>
  </div>
</template>
<script lang="ts">
import { CatsPicker } from "cats-ui";
export default {
  components: {
    CatsPicker,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.margin-r {
  width: 32px;
}
.margin-l {
  margin-left: 12px;
}
</style>