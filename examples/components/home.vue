<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">CatsUI</h1>
      <p class="demo-desc">
        CatsUI是一套基于vue3、视觉体验同微信原生一致的UI基础组件库
      </p>
    </div>
    <div class="demo-group" v-for="(comp, index) in comps" :key="index">
      <div class="demo-content-title">{{ comp.group }}</div>
      <cats-cell-group>
        <cats-cell
          v-for="(item, index2) in comp.children"
          :key="index2"
          :title="item.title"
          :value="item.value"
          show-link
          @click="clickLink(item.title)"
        ></cats-cell>
      </cats-cell-group>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton, CatsCellGroup, CatsCell } from "cats-ui";
export default {
  components: {
    CatsButton,
    CatsCellGroup,
    CatsCell,
  },
  setup() {
    const comps = [
      {
        group: "基础组件",
        children: [
          { title: "Button", value: "按钮" },
          { title: "Flex", value: "弹性布局" },
          { title: "Cell", value: "列表" },
          { title: "Icon", value: "图标" },
        ],
      },
      {
        group: "展示组件",
        children: [{ title: "Loading", value: "加载" }],
      },
      {
        group: "导航组件",
        children: [
          { title: "Tabs", value: "标签页" },
          { title: "Navbar", value: "头部导航" },
        ],
      },
      {
        group: "反馈组件",
        children: [
          { title: "ActionSheet", value: "弹出式菜单" },
          { title: "Overlay", value: "遮罩层" },
          { title: "Popup", value: "弹出层" },
          { title: "Toast", value: "提示框" },
          { title: "Dialog", value: "对话框" },
          { title: "TopTips", value: "顶部提示条" },
        ],
      },
    ];
    return {
      comps,
    };
  },
  methods: {
    clickLink(name) {
      this.$router.push(`${name}`);
    },
  },
};
</script>
<style scoped>
.demo-group {
  margin-bottom: 20px;
}
</style>