<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">CatsUI</h1>
      <p class="demo-desc">
        CatsUI是一套基于vue3、视觉体验同微信原生一致的UI基础组件库
      </p>
    </div>
    <div class="demo-group">
      <cats-button class="margin-t" type="info" @click="clickLink('button')"
        >Button 按钮</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('flex')"
        >Flex 弹性布局</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('overlay')"
        >Overlay 蒙层</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('popup')"
        >Popup 弹出层</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('tabs')"
        >Tabs 标签页</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('navbar')"
        >Navbar 头部导航</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('icon')"
        >Icon 图标</cats-button
      >
      <cats-button class="margin-t" type="info" @click="clickLink('loading')"
        >Loading 图标</cats-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton } from "cats-ui";
export default {
  components: {
    CatsButton,
  },
  setup() {
    return {};
  },
  methods: {
    clickLink(name) {
      this.$router.push(`${name}`);
    },
  },
};
</script>
<style scoped>
</style>