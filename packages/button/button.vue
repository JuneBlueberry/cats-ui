<template>
  <a :class="['cat-btn', 'cat-btn-type-'+type, 'cat-btn-size-'+size,
  {'is-disabled': disabled, 'is-row': row,'is-plain': plain, 'is-round': round}]" 
  :disabled="disabled"
  @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'cat-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    row: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  catthods: {
    /**
     * 按钮点击事件
     */
    handleClick: function(event){
      if(this.disabled){
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>