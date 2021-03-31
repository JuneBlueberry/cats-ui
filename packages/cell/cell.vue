<template>
  <a :class="['cats-cell', {'cats-cell-islink': isLink}]"
    :href="isLink?link:'javascript:void(0)'">
    <div class="cats-cell-warpper">
      <div :class="['cell-icon', {'cell-icon-promote': subtitle}]" v-if="icon"></div>
      <div class="cell-left">
        <span :class="['cell-title', {'cell-title-promote': subtitle}]">{{ title }}</span>
        <span class="cell-subtitle">{{ subtitle }}</span>
      </div>
      <div class="cell-right">
        <span v-if="isLink" class="cell-desc"> 〉</span>
        <span v-else class="cell-desc">{{ desc }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'cats-cell',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    icon: {
      typeof: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: 'javascript:void(0)'
    }
  },
  methods: {
    onClick () {
      //判断是否是可跳转的cell
      if(this.isLink && this.link !== '') return
    }
  }
}
</script>

<style>

</style>