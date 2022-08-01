<template>
  <div class="page">
    <div class="group">
      <cats-row>
        <cats-col>111</cats-col>
        <cats-col>111</cats-col>
        <cats-col>111</cats-col>
        <cats-col>111</cats-col>
      </cats-row>
      <cats-button class="margin-t margin-lr" mini>按钮</cats-button>
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