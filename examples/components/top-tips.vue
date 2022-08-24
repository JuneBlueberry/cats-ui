<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Toptips</h1>
      <p class="demo-desc">顶部提示条</p>
    </div>
    <div class="demo-group">
      <cats-button shape="secondary" @click="showToast1">主要提示</cats-button>
      <cats-button class="margin-t" shape="secondary" @click="showToast2"
        >强调提示</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast3"
        >信息提示</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast4"
        >警告提示</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast5"
        >危险提示</cats-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton, TopTips } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
  },
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
  methods: {
    showToast1() {
      TopTips({
        title: "这是一条顶部提示条",
        type: "primary",
      });
    },
    showToast2() {
      TopTips({
        title: "这是一条顶部提示条",
        type: "emphasize",
        duration: 3000,
      });
    },
    showToast3() {
      TopTips({
        title: "这是一条顶部提示条",
        type: "info",
      });
    },
    showToast4() {
      TopTips({
        title: "这是一条顶部提示条",
        type: "warning",
      });
      setTimeout(() => {
        TopTips.close();
      }, 1500);
    },
    showToast5() {
      TopTips({
        title: "这是一条顶部提示条",
        type: "danger",
        animation: "slide",
      });
    },
  },
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>