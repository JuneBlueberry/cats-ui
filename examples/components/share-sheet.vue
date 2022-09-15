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
      <cats-button class="margin-t" shape="secondary" @click="show2 = true"
        >多行显示</cats-button
      >
    </div>
  </div>
  <cats-share-sheet
    title="CatsUI"
    :show="show1"
    :actions="actions1"
    @close="show1 = false"
    @click="onClick"
  ></cats-share-sheet>
  <cats-share-sheet
    title="CatsUI"
    :show="show2"
    :actions="actions2"
    @close="show2 = false"
    @click="onClick"
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
      actions1: [
        {
          type: "QQ",
          name: "QQ",
        },
        {
          type: "wechat",
          name: "微信",
        },
        {
          type: "enterprise-wechat",
          name: "企业微信",
        },
        {
          type: "QQ-space",
          name: "QQ空间",
        },
        {
          type: "weibo",
          name: "微博",
        },
        {
          type: "friends",
          name: "朋友圈",
        },
      ],
      actions2: [
        [
          {
            type: "QQ",
            name: "QQ",
          },
          {
            type: "wechat",
            name: "微信",
          },
          {
            type: "enterprise-wechat",
            name: "企业微信",
          },
          {
            type: "QQ-space",
            name: "QQ空间",
          },
          {
            type: "weibo",
            name: "微博",
          },
          {
            type: "friends",
            name: "朋友圈",
          },
        ],
        [
          {
            icon: "share",
            name: "分享",
          },

          {
            icon: "error",
            name: "投诉",
          },
          {
            icon: "link",
            name: "链接",
          },
          {
            icon: "reload",
            name: "刷新",
          },
          {
            icon: "search",
            name: "搜索",
          },
          {
            icon: "scan",
            name: "二维码",
          },
        ],
      ],
    };
  },
  setup() {
    const show1 = ref(false);
    const show2 = ref(false);

    const onClick = (action, index, actions) => {
      console.log(action, index, actions);
      show1.value = false;
      show2.value = false;
    };

    return {
      show1,
      show2,
      onClick,
    };
  },
};
</script>
<style scoped>
.demo-page {
  background-color: #ffffff;
}
</style>