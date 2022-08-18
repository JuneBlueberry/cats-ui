<template>
  <div class="cats-navbar" :style="style">
    <div class="cats-navbar__left" v-if="showLeft">
      <slot name="left">
        <cats-icon name="left" @click="onClickLeft"></cats-icon>
      </slot>
    </div>
    <div class="cats-navbar__middle">
      <cats-loading
        class="cats-navbar__middle--loading"
        v-if="showLoading"
        :size="loadingSize"
      ></cats-loading>
      <slot>
        <span>标题</span>
      </slot>
    </div>
    <div class="cats-navbar__right" v-if="showRight">
      <slot name="right">
        <cats-icon name="ellipsis" @click="onClickRight"></cats-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent } from "vue";
import { navbarProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";
import CatsLoading from "../loading";

const [name] = createNamespace("navbar");

export default defineComponent({
  name,
  props: navbarProps,
  emits: ["click-left", "click-right"],
  components: {
    CatsIcon,
    CatsLoading,
  },
  setup(props, { slots, emit }) {
    const style = computed(() => {
      const _style: any = {};
      if (props.backgroundColor) _style.backgroundColor = props.backgroundColor;
      if (props.color) _style.color = props.color;
      return _style;
    });

    // 点击左侧图标
    const onClickLeft = (event: MouseEvent) => {
      emit("click-left", event);
    };
    // 点击右侧图标
    const onClickRight = (event: MouseEvent) => {
      emit("click-right", event);
    };

    return {
      style,
      onClickLeft,
      onClickRight,
    };
  },
});
</script>