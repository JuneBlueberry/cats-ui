<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">ActionSheet</h1>
      <p class="demo-desc">弹出式菜单</p>
    </div>
    <div class="demo-group">
      <cats-button @click="show1 = true">默认</cats-button>
    </div>
  </div>
  <cats-action-sheet :show="show1" @close="show1 = false"></cats-action-sheet>
</template>
<script lang="ts">
import { CatsButton, CatsActionSheet } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsActionSheet,
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
};
</script>
<style scoped>
</style>