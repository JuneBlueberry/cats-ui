<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Footer</h1>
      <p class="demo-desc">脚页</p>
    </div>
    <div class="demo-group">
      <cats-footer class="margin-t" color="#999999" title="Copyright © 2022-2023 catsui.io"/>
    </div>
    <div class="demo-group">
      <cats-footer class="margin-t" color="#999999" title="Copyright © 2022-2023 catsui.io"  :links="link" @click="click"/>
    </div>
    <div class="demo-group">
      <cats-footer class="margin-t" color="#999999" title="Copyright © 2022-2023 catsui.io"  :links="linkList" @click="click"/>
    </div>
    <div class="demo-group">
      <cats-footer class="margin-t" color="#999999" bottom title="Copyright © 2022-2023 catsui.io" :links="link" @click="click"/>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsFooter } from "cats-ui";
import { ref } from 'vue'
export default {
  components: {
    CatsFooter,
  },
  setup() {
    const link = ref([{text:'底部链接',link:'https://www.baidu.com/'}]);
    const linkList = ref([{text:'底部链接',link:'https://cn.vuejs.org/'},{text:'底部链接',link:'https://www.google.cn/'}]);
    return { link, linkList};
   },
  methods: {
    click(e) {
      window.location.href = e;
    },
  },
};
</script>
<style scoped>
</style>