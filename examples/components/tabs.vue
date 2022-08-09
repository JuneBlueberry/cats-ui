<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Tabs</h1>
      <p class="demo-desc">Tabs</p>
    </div>
    <div class="demo-group">
      <cats-tabs>哈哈</cats-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsTabs } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsTabs,
  },
  setup() {},
};
</script>
<style scoped>
.demo-warpper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.demo-warpper-content {
  width: 200px;
  height: 200px;
  background-color: #ffffff;
}
</style>