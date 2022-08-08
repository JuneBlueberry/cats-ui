<template>
  <div ref="wrapRef"></div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick, unref } from "vue";
export default defineComponent({
  setup() {
    const wrapRef = ref<HTMLElement>();

    nextTick(() => {
      console.log(unref(wrapRef)?.getBoundingClientRect());
    });

    return {
      wrapRef,
    };
  },
});
</script>

<style>
</style>