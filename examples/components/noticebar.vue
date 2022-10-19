<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Noticebar</h1>
      <p class="demo-desc">通知栏</p>
    </div>
    <div class="demo-group">
      <cats-noticebar class="margin-t"></cats-noticebar>
      <!-- <cats-noticebar class="margin-t"></cats-noticebar>
      <cats-noticebar class="margin-t"></cats-noticebar> -->
    </div>
  </div>
</template>
<script lang="ts">
import { CatsNoticebar } from "cats-ui";
export default {
  components: {
    CatsNoticebar,
  },
  setup() {},
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>