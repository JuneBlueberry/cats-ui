<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Navtab</h1>
      <p class="demo-desc">头部导航</p>
    </div>
    <div class="demo-group">
      <cats-navbar class="margin-t" color="#999999">这是一个标题</cats-navbar>
      <cats-navbar class="margin-t" show-left show-right>主页</cats-navbar>
      <cats-navbar class="margin-t" show-left show-right>
        <template v-slot:left>返回</template>
        主页
        <template v-slot:right>操作</template>
      </cats-navbar>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsNavbar } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsNavbar,
  },
  setup() {},
};
</script>
<style scoped>
</style>