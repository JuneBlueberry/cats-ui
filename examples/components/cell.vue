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
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">使用插槽</div>
    </div>
    <cats-cell-group>
      <cats-cell title="主标题" value="内容说明">
        <template v-slot:icon>
          <cats-icon class="margin-r" name="wechat-fill" :size="20"></cats-icon>
        </template>
        <template v-slot:title>
          <strong>自定义主题</strong>
        </template>
        <template v-slot:label>
          <em>自定义副主题</em>
        </template>
        <span>自定义内容</span>
        <template v-slot:right>
          <cats-icon class="margin-l" name="menu" :size="17"></cats-icon>
        </template>
      </cats-cell>
    </cats-cell-group>
  </div>
</template>
<script lang="ts">
import { CatsCell, CatsCellGroup, CatsIcon } from "cats-ui";
export default {
  components: {
    CatsCell,
    CatsCellGroup,
    CatsIcon,
  },
  methods: {
    onClick() {
      console.log(111);
    },
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