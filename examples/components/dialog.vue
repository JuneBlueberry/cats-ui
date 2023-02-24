<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Dialog</h1>
      <p class="demo-desc">对话框</p>
    </div>
    <div class="demo-group">
      <cats-button shape="secondary" @click="showDialog">插件调用</cats-button>
      <cats-button class="margin-t" shape="secondary" @click="show1 = true"
        >基础样式</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="show2 = true"
        >设置样式</cats-button
      >
      <cats-button class="margin-t" shape="secondary" @click="show3 = true"
        >确认弹窗</cats-button
      >
    </div>
  </div>
  <cats-dialog :show="show1" @close="show1 = false"></cats-dialog>
  <cats-dialog
    :show="show2"
    confrimText="主要按钮"
    confrimColor="green"
    @close="show2 = false"
  ></cats-dialog>
  <cats-dialog
    :show="show3"
    :showTitle="false"
    :showCancel="false"
    confrimText="知道了"
    @close="show3 = false"
  ></cats-dialog>
</template>
<script lang="ts">
import { CatsButton, CatsDialog, Dialog } from "cats-ui";
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
  methods: {
    showDialog() {
      Dialog({
        title: "标题",
        content: "哈哈哈哈哈",
        onCancel: function () {
          console.log("cancel");
        },
      });
      setTimeout(() => {
        Dialog.close();
      }, 1500);
    },
  },
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>