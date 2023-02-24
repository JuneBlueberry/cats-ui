<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Panel</h1>
      <p class="demo-desc">面板</p>
    </div>
    <cats-panel
      :actions="actions1"
      title="图文列表组合"
      show-detail
      @click="onClick"
      @detail="onDetail"
    ></cats-panel>
    <cats-panel
      class="margin-t"
      :actions="actions2"
      title="文字列表组合"
      show-detail
      @click="onClick"
      @detail="onDetail"
    ></cats-panel>
  </div>
</template>
<script lang="ts">
import { CatsPanel } from "cats-ui";
export default {
  components: {
    CatsPanel,
  },
  setup() {
    const actions1 = [
      {
        title: "标题一",
        label:
          "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
        image: "",
        desc: ["2022-08-26", "上海"],
      },
      {
        title: "标题二",
        label:
          "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
        image: "",
      },
    ];

    const actions2 = [
      {
        title: "标题一",
        link: true,
      },
      {
        title: "标题二",
        link: true,
      },
    ];

    return {
      actions1,
      actions2,
    };
  },
  methods: {
    onClick(action, index, actions) {
      console.log(action, index, actions);
    },
    onDetail(e) {
      console.log(e);
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