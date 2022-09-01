<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Preview</h1>
      <p class="demo-desc">表单预览</p>
    </div>
    <cats-preview :model="model" @click="onClick"></cats-preview>
  </div>
</template>
<script lang="ts">
import { CatsPreview } from "cats-ui";
export default {
  components: {
    CatsPreview,
  },
  setup() {
    const model = {
      name: "付款金额",
      title: "￥200.00",
      infos: [
        {
          label: "商品",
          value: "电动打蛋机",
        },
        {
          label: "标题标题",
          value: "名字名字名字",
        },
        {
          label: "标题标题",
          value: "名字名字名字这是一个很长的名字名字名字名字",
        },
      ],
      buttons: [{ name: "辅助操作", color: "#000000" }, { name: "操作" }],
    };
    return {
      model,
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    onDetail() {
      console.log(222);
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