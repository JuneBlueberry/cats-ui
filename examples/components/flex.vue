<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Flex</h1>
      <p class="demo-desc">Flex布局</p>
    </div>
    <div class="demo-content demo-content-padding">
      <div class="demo-content-title">基础</div>
      <div class="demo-group">
        <cats-row class="demo-row">
          <cats-col :span="24"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10">
          <cats-col :span="12"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="12"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10">
          <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10">
          <cats-col :span="4"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="16"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="4"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
      </div>
      <div class="demo-content-title">主轴对齐方式</div>
      <div class="demo-group">
        <cats-row class="demo-row" :gutter="10" justify="end">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10" justify="center">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10" justify="space-between">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row" :gutter="10" justify="space-around">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
      </div>
      <div class="demo-content-title">交叉轴对齐方式</div>
      <div class="demo-group">
        <cats-row class="demo-row demo-row-height" :gutter="10" align="start">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row demo-row-height" :gutter="10" align="center">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
        <cats-row class="demo-row demo-row-height" :gutter="10" align="end">
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
      </div>
      <div class="demo-content-title">换行</div>
      <div class="demo-group">
        <cats-row class="demo-row" :gutter="10" wrap>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"> <div class="demo-col">cats-ui</div></cats-col>
          <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        </cats-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsRow, CatsCol, CatsButton } from "cats-ui";
export default {
  components: {
    CatsRow,
    CatsCol,
    CatsButton,
  },
};
</script>
<style scoped>
.demo-row {
  margin-bottom: 10px;
}
.demo-row-height {
  border: 1px solid #999999;
  height: 80px;
}
.demo-col {
  height: 36px;
  background-color: #f7f7f7;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>