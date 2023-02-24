<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Popup</h1>
      <p class="demo-desc">弹出层</p>
    </div>
    <div class="demo-group">
      <cats-button @click="show1 = true">默认</cats-button>
      <cats-button class="margin-t" @click="show2 = true">上方弹出</cats-button>
      <cats-button class="margin-t" @click="show3 = true">左侧弹出</cats-button>
      <cats-button class="margin-t" @click="show4 = true">右侧弹出</cats-button>
      <cats-button class="margin-t" @click="show5 = true">直角</cats-button>
      <cats-button class="margin-t" @click="show6 = true">设置高度</cats-button>
    </div>
  </div>
  <cats-popup :show="show1" @close="show1 = false"></cats-popup>
  <cats-popup :show="show2" position="top" @close="show2 = false"></cats-popup>
  <cats-popup :show="show3" position="left" @close="show3 = false"></cats-popup>
  <cats-popup
    :show="show4"
    position="right"
    @close="show4 = false"
  ></cats-popup>
  <cats-popup :show="show5" :round="false" @close="show5 = false"></cats-popup>
  <cats-popup
    :show="show6"
    :size="60"
    @close="show6 = false"
    overlay-class="haha"
  ></cats-popup>
</template>
<script lang="ts">
import { CatsButton, CatsPopup } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
    CatsPopup,
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