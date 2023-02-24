<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Rate</h1>
      <p class="demo-desc">评分</p>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">基础</div>
      <cats-rate v-model="value1"></cats-rate>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">设置最大数</div>
      <cats-rate v-model="value2" max="10"></cats-rate>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">自定义图标</div>
      <cats-rate
        v-model="value3"
        active-icon="heart"
        inactive-icon="heart-fill"
      ></cats-rate>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">自定义样式</div>
      <cats-rate
        v-model="value4"
        active-color="#fd8460"
        inactive-color="#fd8460"
      ></cats-rate>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">禁用</div>
      <cats-rate v-model="value5" disabled></cats-rate>
    </div>
    <div class="demo-group demo-content-padding">
      <div class="demo-content-title">只读</div>
      <cats-rate v-model="value6" readonly></cats-rate>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsRate } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsRate,
  },
  setup() {
    const value1 = ref(2);
    const value2 = ref(2);
    const value3 = ref(2);
    const value4 = ref(2);
    const value5 = ref(2);
    const value6 = ref(2);

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
    };
  },
};
</script>
<style scoped>
.demo-content-title {
  margin-left: 0;
}
</style>