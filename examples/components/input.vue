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
      <cats-input
        v-model="value1"
        label="账号"
        placeholder="请输入账号"
      ></cats-input>
      <cats-input
        v-model="value2"
        label="密码"
        type="password"
        placeholder="请输入密码"
      ></cats-input>
    </cats-cell-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">卡片</div>
    </div>
    <cats-cell-group card>
      <cats-input
        v-model="value3"
        label="账号"
        placeholder="请输入账号"
      ></cats-input>
      <cats-input
        v-model="value4"
        label="密码"
        placeholder="请输入密码"
      ></cats-input>
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
    const value1 = ref("");
    const value2 = ref("");
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