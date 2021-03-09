<template>
  <div class="cats-cell">
    <div class="cell-left">
      <span class="cell-title">{{ title }}</span>
    </div>
    <div class="cell-right">
      <span class="cell-desc">{{ desc }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cats-cell',
  props: {
    title: {
      type: String,
      default: '我是标题'
    },
    desc: {
      type: String,
      default: '我是一个描述'
    }
  }
}
</script>

<style>

</style>