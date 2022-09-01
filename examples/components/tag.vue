<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Tag</h1>
      <p class="demo-desc">标签</p>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">标签类型</span>
      <cats-tag class="margin-r">标签</cats-tag>
      <cats-tag class="margin-r" type="emphasize">标签</cats-tag>
      <cats-tag class="margin-r" type="info">标签</cats-tag>
      <cats-tag class="margin-r" type="warning">标签</cats-tag>
      <cats-tag class="margin-r" type="danger">标签</cats-tag>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">空心标签</span>
      <cats-tag class="margin-r" plain>标签</cats-tag>
      <cats-tag class="margin-r" type="emphasize" plain>标签</cats-tag>
      <cats-tag class="margin-r" type="info" plain>标签</cats-tag>
      <cats-tag class="margin-r" type="warning" plain>标签</cats-tag>
      <cats-tag class="margin-r" type="danger" plain>标签</cats-tag>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">圆角标签</span>
      <cats-tag class="margin-r" round>标签</cats-tag>
      <cats-tag class="margin-r" type="emphasize" round>标签</cats-tag>
      <cats-tag class="margin-r" type="info" round>标签</cats-tag>
      <cats-tag class="margin-r" type="warning" round>标签</cats-tag>
      <cats-tag class="margin-r" type="danger" round>标签</cats-tag>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">标记标签</span>
      <cats-tag class="margin-r" mark>标签</cats-tag>
      <cats-tag class="margin-r" type="emphasize" mark>标签</cats-tag>
      <cats-tag class="margin-r" type="info" mark>标签</cats-tag>
      <cats-tag class="margin-r" type="warning" mark>标签</cats-tag>
      <cats-tag class="margin-r" type="danger" mark>标签</cats-tag>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">自定义样式</span>
      <cats-tag class="margin-r" backgroundColor="#7232dd">标签</cats-tag>
      <cats-tag class="margin-r" backgroundColor="#ffffff" color="#7232dd"
        >标签</cats-tag
      >
      <cats-tag class="margin-r" backgroundColor="#ffe1e1" color="#ad0000"
        >标签</cats-tag
      >
    </div>
    <div class="demo-group">
      <span class="demo-group-title">可关闭标签</span>
      <cats-tag class="margin-r" closeable>标签</cats-tag>
    </div>
    <div class="demo-group">
      <span class="demo-group-title">标签大小</span>
      <cats-tag class="margin-r">标签</cats-tag>
      <cats-tag class="margin-r" size="16" closeable>标签</cats-tag>
      <cats-tag
        class="margin-r"
        :show="show"
        size="20"
        closeable
        @close="onClick"
        >标签</cats-tag
      >
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { CatsTag } from "cats-ui";
export default {
  components: {
    CatsTag,
  },
  setup() {
    const show = ref(true);
    onMounted(() => {
      setTimeout(() => {
        console.log(222);
        show.value = true;
      }, 10000);
    });
    const onClick = () => {
      show.value = false;
    };
    return {
      show,
      onClick,
    };
  },
};
</script>
<style scoped>
.margin-r {
  margin-right: 6px;
}
</style>