<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Picker</h1>
      <p class="demo-desc">选择器</p>
    </div>
    <cats-picker :actions="actions1"></cats-picker>
  </div>
</template>
<script lang="ts">
import { CatsPicker } from "cats-ui";
export default {
  components: {
    CatsPicker,
  },
  setup() {
    const actions1 = [
      {
        title: "111",
      },
      {
        title: "222",
      },
      {
        title: "333",
      },
      {
        title: "444",
      },
      {
        title: "555",
      },
      {
        title: "666",
      },
      {
        title: "777",
      },
      {
        title: "888",
      },
      {
        title: "999",
      },
    ];
    return {
      actions1,
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