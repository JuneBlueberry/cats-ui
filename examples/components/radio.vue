<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Radio</h1>
      <p class="demo-desc">单选框</p>
    </div>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">基础</div>
    </div>
    <cats-radio-group v-model="checkeds1">
      <cats-radio name="a">HTML</cats-radio>
      <cats-radio name="b">CSS</cats-radio>
    </cats-radio-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">禁止选择</div>
    </div>
    <cats-radio-group v-model="checkeds2">
      <cats-radio name="a" disabled>HTML</cats-radio>
      <cats-radio name="b" disabled>CSS</cats-radio>
      <cats-radio name="c">JavaScript</cats-radio>
    </cats-radio-group>
    <div class="demo-content demo-content-padding margin-t">
      <div class="demo-content-title">自定义样式</div>
    </div>
    <cats-radio-group v-model="checkeds3">
      <cats-radio name="a" color="#ee0a24">HTML</cats-radio>
      <cats-radio name="b" color="#1989fa">CSS</cats-radio>
      <cats-radio name="c" color="#ee0a24" square>
        <div class="demo-title">JavaScript</div>
        <div class="demo-desc">
          能用JavaScript实现的最终都会用JavaScript实现
        </div>
      </cats-radio>
      <cats-radio name="d" color="#1989fa" square>
        <div class="demo-title">CatsUI</div>
        <div class="demo-desc">基于Vue3的微信视觉UI组件库</div>
      </cats-radio>
    </cats-radio-group>
  </div>
</template>
<script lang="ts">
import { CatsRadio, CatsRadioGroup } from "cats-ui";
export default {
  components: {
    CatsRadio,
    CatsRadioGroup,
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      checkeds1: "a",
      checkeds2: "a",
      checkeds3: "a",
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