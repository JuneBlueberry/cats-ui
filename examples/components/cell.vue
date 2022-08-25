<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Cell</h1>
      <p class="demo-desc">列表</p>
    </div>
    <div class="demo-content demo-content-padding">
      <div class="demo-content-title">基础</div>
    </div>
    <cats-cell-group>
      <cats-cell title="主标题" value="内容说明"></cats-cell>
      <cats-cell title="主标题" value="内容说明" show-link></cats-cell>
      <cats-cell
        title="主标题"
        value="内容说明"
        icon="image"
        show-link
      ></cats-cell>
      <cats-cell
        title="主标题"
        value="内容说明"
        label="我是一个副标题"
        show-link
      ></cats-cell>
    </cats-cell-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">卡片</div>
    </div>
    <cats-cell-group card>
      <cats-cell title="主标题" value="内容说明" @click="onClick"></cats-cell>
      <cats-cell title="主标题" value="内容说明"></cats-cell>
    </cats-cell-group>
  </div>
</template>
<script lang="ts">
import { CatsCell, CatsCellGroup } from "cats-ui";
export default {
  components: {
    CatsCell,
    CatsCellGroup,
  },
  methods: {
    onClick() {
      console.log(111);
    },
  },
};
</script>
<style scoped>
</style>