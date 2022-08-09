<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Popup</h1>
      <p class="demo-desc">弹出层</p>
    </div>
    <div class="demo-group">
      <cats-button @click="show1 = true">基础用法</cats-button>
    </div>
  </div>
  <cats-dialog :show="show1" @close="show1 = false"></cats-dialog>
</template>
<script lang="ts">
import { CatsButton, CatsDialog } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsDialog,
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