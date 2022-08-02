<template>
  <div class="demo-page">
    <div class="demo-group">
      <cats-row>
        <cats-col :span="24"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
    <div class="demo-group">
      <cats-row :gutter="10">
        <cats-col :span="12"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="12"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
    <div class="demo-group">
      <cats-row :gutter="10">
        <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="8"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
    <div class="demo-group">
      <cats-row :gutter="10">
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
    <div class="demo-group">
      <cats-row :gutter="10">
        <cats-col :span="4"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="16"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="4"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
    <div class="demo-group">
      <cats-row :gutter="10" justify="end">
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
        <cats-col :span="6"><div class="demo-col">cats-ui</div></cats-col>
      </cats-row>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsRow, CatsCol, CatsButton } from 'cats-ui'
export default {
  components: {
    CatsRow,
    CatsCol,
    CatsButton
  }
}
</script>
<style scoped>
.demo-group {
  margin: 20px 0;
  padding: 0 20px;
}
.demo-margin-t {
  margin-top: 10px;
}
.demo-margin-lr {
  margin-left: 20px;
  margin-right: 20px;
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