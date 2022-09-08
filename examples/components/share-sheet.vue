<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">ShareSheet</h1>
      <p class="demo-desc">分享菜单</p>
    </div>
    <div class="demo-group">
      <cats-button class="margin-t" shape="secondary" @click="show1 = true"
        >基础用法</cats-button
      >
    </div>
  </div>
  <cats-share-sheet
    :show="show1"
    :actions="actions1"
    @close="show1 = false"
  ></cats-share-sheet>
</template>
<script lang="ts">
import { CatsButton, CatsShareSheet } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsShareSheet,
  },
  data() {
    return {
      actions1: [{ name: "菜单一" }, { name: "菜单二" }],
    };
  },
  setup() {
    const show1 = ref(false);

    return {
      show1,
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