<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Toast</h1>
      <p class="demo-desc">提示框</p>
    </div>
    <div class="demo-group">
      <cats-button shape="secondary" @click="showToast1">成功</cats-button>
      <cats-button class="margin-t" shape="secondary" @click="showToast2"
        >警告</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast3"
        >失败</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast4"
        >加载</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="showToast5"
        >文字</cats-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton, Toast } from "cats-ui";
import { ref } from "vue";
export default {
  components: {
    CatsButton,
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
  methods: {
    showToast1() {
      Toast({
        icon: "success",
        title: "已完成",
      });
    },
    showToast2() {
      Toast({
        icon: "warning",
        title: "警告",
      });
    },
    showToast3() {
      Toast({
        icon: "error",
        title: "失败",
      });
    },
    showToast4() {
      Toast({
        icon: "loading",
        title: "加载中",
      });
      setTimeout(() => {
        Toast.close();
      }, 3000);
    },
    showToast5() {
      Toast({
        icon: "none",
        title: "这是一条toast",
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