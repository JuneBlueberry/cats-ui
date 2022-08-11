<template>
   <div class="cats-footer" :style="style" :class="styleClass">
    <slot>
      <div class="cats-footer__group cats-footer__middle">
        <p class="cats-footer__links"  @click="onClick(item.link)" v-for="item in links" :key="item.text">
          {{item.text}}</p>
      </div>
      <div class="cats-footer__text cats-footer__middle">{{title}}</div>
    </slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { footerProps } from "./types";
import { createNamespace } from "../utils/create";

const [name] = createNamespace("footer");

export default defineComponent({
  name,
  props: footerProps,
  emits: ["click"],
  setup(props, { slots, emit }) {
    const style = computed(() => {
      const _style: any = {};
      if (props.color) _style.color = props.color;
      return _style;
    });

   const styleClass = computed(() => {
      return {
        [`cats-footer__fixed-bottom`]: props.bottom,
      };
   });

    // 点击事件
    const onClick = (e) => {
      emit("click", e);
    };

    return {
      styleClass,
      style,
      onClick,
    };
  },
});
</script>