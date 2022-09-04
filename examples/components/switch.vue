<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Swicth</h1>
      <p class="demo-desc">开关</p>
    </div>
    <cats-cell-group>
      <cats-cell title="基础用法">
        <cats-switch v-model="switch1" @change="change"></cats-switch>
      </cats-cell>
      <cats-cell title="禁止点击">
        <cats-switch v-model="switch2" disabled></cats-switch>
      </cats-cell>
      <cats-cell title="加载">
        <cats-switch v-model="switch3" loading></cats-switch>
      </cats-cell>
      <cats-cell title="自定义样式">
        <cats-switch
          v-model="switch4"
          active-color="blue"
          inactive-color="red"
        ></cats-switch>
      </cats-cell>
      <cats-cell title="背景内容插槽">
        <cats-switch v-model="switch5">
          <span>{{ switch5 ? "开" : "关" }}</span>
        </cats-switch>
      </cats-cell>
    </cats-cell-group>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { CatsCell, CatsCellGroup, CatsIcon, CatsSwitch } from "cats-ui";
export default {
  components: {
    CatsCell,
    CatsCellGroup,
    CatsIcon,
    CatsSwitch,
  },
  setup() {
    const switch1 = ref(false);
    const switch2 = ref(true);
    const switch3 = ref(true);
    const switch4 = ref(false);
    const switch5 = ref(false);

    const change = (value) => {
      console.log(value);
    };

    return {
      switch1,
      switch2,
      switch3,
      switch4,
      switch5,
      change,
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