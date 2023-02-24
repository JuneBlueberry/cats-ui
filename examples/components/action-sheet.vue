<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">ActionSheet</h1>
      <p class="demo-desc">弹出式菜单</p>
    </div>
    <div class="demo-group">
      <cats-button class="margin-t" shape="secondary" @click="show1 = true"
        >默认</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="show2 = true"
        >带取消按钮</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="show3 = true"
        >自定义样式</cats-button
      >
    </div>
  </div>
  <cats-action-sheet
    :show="show1"
    :actions="actions1"
    @close="show1 = false"
  ></cats-action-sheet>
  <cats-action-sheet
    title="标题"
    :show="show2"
    show-cancel
    :actions="actions2"
    @close="show2 = false"
  ></cats-action-sheet>
  <cats-action-sheet
    title="请选择菜单"
    :show="show3"
    show-cancel
    :actions="actions3"
    cancelText="我知道了"
    cancelColor="red"
    @close="show3 = false"
    @select="onSelect"
  ></cats-action-sheet>
</template>
<script lang="ts">
import { CatsButton, CatsActionSheet } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsActionSheet,
  },
  data() {
    return {
      actions1: [{ name: "菜单一" }, { name: "菜单二" }],
      actions2: [{ name: "菜单一" }, { name: "菜单二" }, { name: "菜单三" }],
      actions3: [
        { name: "菜单一", color: "blue" },
        {
          name: "菜单二",
          color: "green",
          callback: (action, index, actions) => {
            console.log(action, index, actions);
          },
        },
        { name: "菜单三", loading: true },
        { name: "菜单四", disabled: true },
      ],
    };
  },
  setup() {
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const show5 = ref(false);
    const show6 = ref(false);

    return {
      show1,
      show2,
      show3,
      show4,
      show5,
      show6,
    };
  },
  methods: {
    onSelect(action, index, actions) {
      console.log(action, index, actions);
    },
  },
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>