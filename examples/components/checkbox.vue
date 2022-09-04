<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Checkbox</h1>
      <p class="demo-desc">复选框</p>
    </div>
    <div class="demo-content demo-content-padding">
      <div class="demo-content-title">基础</div>
      <cats-checkbox v-model="checked1">HTML</cats-checkbox>
      <cats-checkbox class="margin-t" v-model="checked2">CSS</cats-checkbox>
    </div>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">分组</div>
    </div>
    <cats-checkbox-group v-model="checkeds1">
      <cats-checkbox name="a">HTML</cats-checkbox>
      <cats-checkbox name="b">CSS</cats-checkbox>
    </cats-checkbox-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">对换位置</div>
    </div>
    <cats-checkbox-group v-model="checkeds4">
      <cats-checkbox name="a" opposite>HTML</cats-checkbox>
      <cats-checkbox name="b" opposite>CSS</cats-checkbox>
    </cats-checkbox-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">最大选择数</div>
    </div>
    <cats-checkbox-group v-model="checkeds5" :max="2">
      <cats-checkbox name="a">HTML</cats-checkbox>
      <cats-checkbox name="b">CSS</cats-checkbox>
      <cats-checkbox name="c">JavaScript</cats-checkbox>
    </cats-checkbox-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">禁止选择</div>
    </div>
    <cats-checkbox-group v-model="checkeds6">
      <cats-checkbox name="a" disabled>HTML</cats-checkbox>
      <cats-checkbox name="b" disabled>CSS</cats-checkbox>
      <cats-checkbox name="c">JavaScript</cats-checkbox>
    </cats-checkbox-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">最大选择数</div>
    </div>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">方形</div>
    </div>
    <cats-checkbox-group v-model="checkeds2">
      <cats-checkbox name="a" square>HTML</cats-checkbox>
      <cats-checkbox name="b" square>CSS</cats-checkbox>
    </cats-checkbox-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">自定义样式</div>
    </div>
    <cats-checkbox-group v-model="checkeds3">
      <cats-checkbox name="a" color="#ee0a24">HTML</cats-checkbox>
      <cats-checkbox name="b" color="#1989fa">CSS</cats-checkbox>
      <cats-checkbox name="c" color="#ee0a24" square>
        <div class="demo-title">JavaScript</div>
        <div class="demo-desc">
          能用JavaScript实现的最终都会用JavaScript实现
        </div>
      </cats-checkbox>
      <cats-checkbox name="d" color="#1989fa" square>
        <div class="demo-title">CatsUI</div>
        <div class="demo-desc">基于Vue3的微信视觉UI组件库</div>
      </cats-checkbox>
    </cats-checkbox-group>
  </div>
</template>
<script lang="ts">
import { CatsCheckbox, CatsCheckboxGroup } from "cats-ui";
export default {
  components: {
    CatsCheckbox,
    CatsCheckboxGroup,
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      checkeds1: ["a"],
      checkeds2: ["b"],
      checkeds3: ["a", "b", "c", "d"],
      checkeds4: [],
      checkeds5: ["a", "b"],
      checkeds6: ["a"],
    };
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
.demo-content-title {
  margin-left: 0;
}
</style>