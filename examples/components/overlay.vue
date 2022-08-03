<template>
  <div class="page">
    <div class="demo-header">
      <h1 class="demo-title">Overlay</h1>
      <p class="demo-desc">遮罩层</p>
    </div>
    <div class="demo-group">
      <cats-button @click="show1 = true">显示遮罩层</cats-button>
      <cats-button class="margin-t" @click="show2 = true">嵌入插槽</cats-button>
      <cats-overlay :show="show1" :duration="600" @click="show1 = false"></cats-overlay>
      <cats-overlay :show="show2" @click="show2 = false">
        <div class="demo-warpper">
          <div class="demo-warpper-content"></div>
        </div>
      </cats-overlay>
    </div>
  </div>
</template>
<script lang="ts">
import { CatsButton, CatsOverlay } from 'cats-ui'
import { ref } from 'vue'
export default {
  components: {
    CatsButton,
    CatsOverlay
  },
  setup(){
    const show1 = ref(false)
    const show2 = ref(false)

    return {
      show1,
      show2
    }
  }
}
</script>
<style scoped>
.demo-warpper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.demo-warpper-content {
  width: 200px;
  height: 200px;
  background-color: #ffffff;
}
</style>