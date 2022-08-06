<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Button</h1>
      <p class="demo-desc">Button 按钮</p>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">按钮类型</span>
      <cats-button class="margin-t">主要-默认按钮</cats-button>
      <cats-button class="margin-t" type="emphasize">主要-强调按钮</cats-button>
      <cats-button class="margin-t" type="info">主要-信息按钮</cats-button>
      <cats-button class="margin-t" type="warning">主要-警告按钮</cats-button>
      <cats-button class="margin-t" type="danger">主要-危险按钮</cats-button>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">按钮类型</span>
      <cats-button class="margin-t" type="emphasize" shape="primary"
        >主要按钮</cats-button
      >
      <cats-button class="margin-t" type="emphasize" shape="secondary"
        >次要按钮</cats-button
      >
      <cats-button class="margin-t" type="emphasize" shape="block"
        >块状按钮</cats-button
      >
    </div>
    <div class="demo-group">
      <span class="demo-group-title">禁用按钮</span>
      <cats-button class="margin-t" disabled>主要-默认按钮</cats-button>
      <cats-button class="margin-t" shape="secondary" disabled
        >主要-强调按钮</cats-button
      >
      <cats-button class="margin-t" shape="block" disabled
        >主要-信息按钮</cats-button
      >
    </div>
    <div class="demo-group">
      <span class="demo-group-title">mini按钮</span>
      <div>
        <cats-button class="margin-t margin-lr" mini>按钮</cats-button>
        <cats-button class="margin-t margin-lr" mini shape="secondary"
          >按钮</cats-button
        >
        <cats-button class="margin-t margin-lr" mini disabled>按钮</cats-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton } from "cats-ui";
export default {
  components: {
    CatsButton,
  },
};
</script>
<style scoped>
</style>