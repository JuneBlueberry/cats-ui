<template>
  <transition name="cats-fade" appear>
    <div class="cats-overlay" :class="styleClass" :style="style" v-show="show" @click="onClick">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import './style/index.scss'
import { defineComponent, computed } from 'vue'
import { createNamespace } from '../utils/create'
import { overlayProps } from "./types";

const [name] = createNamespace('overlay')

export default defineComponent({
  name,
  props: overlayProps,
  emits: ['click'],
  setup(props, { emit }){

    const style = computed(() => {
      const animationDuration = Number(props.duration)
      const customStyle = props.customStyle
      return Object.assign(customStyle, {
        animationDuration: `${animationDuration}ms`
      }) 
    })

    const show = computed(() => {
      return props.show
    })

    // 点击事件
    const onClick = (event: MouseEvent) => {
      emit('click', event)
    };

    return {
      styleClass: props.customClass,
      style,
      show,
      onClick
    }
  }
})
</script>