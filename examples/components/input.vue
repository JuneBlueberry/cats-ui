<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Input</h1>
      <p class="demo-desc">输入框</p>
    </div>
    <div class="demo-content demo-content-padding">
      <div class="demo-content-title">基础</div>
    </div>
    <cats-cell-group>
      <cats-input title="账号" placeholder="请输入账号"></cats-input>
      <cats-input
        title="密码"
        type="password"
        placeholder="请输入密码"
      ></cats-input>
      <cats-input
        title="标题文本"
        label="副标题"
        placeholder="请输入文本"
      ></cats-input>
    </cats-cell-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">图标</div>
    </div>
    <cats-cell-group>
      <cats-input
        title="左图标"
        placeholder="请输入"
        leftIcon="image"
      ></cats-input>
      <cats-input
        title="右图标"
        placeholder="请输入"
        rightIcon="image"
      ></cats-input>
      <cats-input title="清除图标" placeholder="请输入" clearable></cats-input>
      <cats-input
        title="只读"
        placeholder="请输入"
        v-model="value1"
        readonly
      ></cats-input>
      <cats-input
        title="禁止"
        placeholder="请输入"
        v-model="value2"
        disabled
      ></cats-input>
    </cats-cell-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">卡片</div>
    </div>
    <cats-cell-group card>
      <cats-input title="账号" placeholder="请输入账号"></cats-input>
      <cats-input title="密码" placeholder="请输入密码"></cats-input>
    </cats-cell-group>
  </div>
</template>
<script lang="ts">
import { CatsCellGroup, CatsInput } from "cats-ui";
import { ref } from "@vue/reactivity";
export default {
  components: {
    CatsCellGroup,
    CatsInput,
  },
  setup() {
    const value1 = ref("只读输入框");
    const value2 = ref("禁止输入框");
    const value3 = ref("");
    const value4 = ref("");

    return {
      value1,
      value2,
      value3,
      value4,
    };
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