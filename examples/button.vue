<template>
  <div class="page">
    <div class="group">
      <span>按钮类型</span>
      <cats-button class="margin-t">主要-默认按钮</cats-button>
      <cats-button class="margin-t" type="emphasize">主要-强调按钮</cats-button>
      <cats-button class="margin-t" type="info">主要-信息按钮</cats-button>
      <cats-button class="margin-t" type="warning">主要-警告按钮</cats-button>
      <cats-button class="margin-t" type="danger">主要-危险按钮</cats-button>
    </div>
    <div class="group">
      <span>按钮类型</span>
      <cats-button class="margin-t" shape="secondary">主要-默认按钮</cats-button>
      <cats-button class="margin-t" type="emphasize" shape="secondary">主要-强调按钮</cats-button>
      <cats-button class="margin-t" type="info" shape="secondary">主要-信息按钮</cats-button>
      <cats-button class="margin-t" type="warning" shape="secondary">主要-警告按钮</cats-button>
      <cats-button class="margin-t" type="danger" shape="secondary">主要-危险按钮</cats-button>
    </div>
    <div class="group">
      <span>块状按钮</span>
      <cats-button class="margin-t" shape="block">主要-默认按钮</cats-button>
      <cats-button class="margin-t" type="emphasize" shape="block">主要-强调按钮</cats-button>
      <cats-button class="margin-t" type="info" shape="block">主要-信息按钮</cats-button>
      <cats-button class="margin-t" type="warning" shape="block">主要-警告按钮</cats-button>
      <cats-button class="margin-t" type="danger" shape="block">主要-危险按钮</cats-button>
    </div>
    <div class="group">
      <span>禁用按钮</span>
      <cats-button class="margin-t" disable>主要-默认按钮</cats-button>
      <cats-button class="margin-t" shape="secondary" disable>主要-强调按钮</cats-button>
      <cats-button class="margin-t" shape="block" disable>主要-信息按钮</cats-button>
    </div>
    <div class="group">
      <span>mini按钮</span>
      <div>
        <cats-button class="margin-t margin-lr" mini>按钮</cats-button>
        <cats-button class="margin-t margin-lr" mini shape="secondary">按钮</cats-button>
        <cats-button class="margin-t margin-lr" mini disable>按钮</cats-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton } from 'cats-ui'
export default {
  components: {
    CatsButton
  }
}
</script>
<style scoped>
.group {
  margin-bottom: 20px;
}
.margin-t {
  margin-top: 10px;
}
.margin-lr {
  margin-left: 20px;
  margin-right: 20px;
}
</style>