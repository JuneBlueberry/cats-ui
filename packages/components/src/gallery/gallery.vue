<template>
  <transition name="cats-fade" appear>
    <div class="cats-gallery" v-show="show">
      <div class="cats-gallery__nums" v-if="showSubscript">
        {{ num + 1 }} / {{ maxNum }}
      </div>
      <cats-swiper
        :img-list="urls"
        :active="active"
        :show-subscript="false"
        :threshold="threshold"
        height="240"
        @next="next"
        @previous="previous"
        @click="onClick"
      ></cats-swiper>
      <div class="cats-gallery__icon" v-if="icon">
        <cats-icon :name="icon" @click="onClickIcon"></cats-icon>
      </div>
    </div>
  </transition>
</template>

<script lant="ts">
import "./style/index.scss";
import { computed, defineComponent, ref, watchEffect } from "vue";
import { createNamespace } from "../utils/create";
import { galleryProps } from "./types";
import CatsSwiper from "../swiper";
import CatsIcon from "../icon";

const [name] = createNamespace("gallery");

export default defineComponent({
  name,
  props: galleryProps,
  emits: ["click", "click-icon"],
  components: {
    CatsSwiper,
    CatsIcon,
  },
  setup(props, { emit }) {
    let active = 0;
    const num = ref(0);
    const maxNum = ref(0);

    watchEffect(() => {
      const index = props.urls.findIndex((x) => x == props.current);
      maxNum.value = props.urls.length;
      return (active = num.value = index == -1 ? 0 : index);
    });

    const next = (index) => {
      num.value = index;
    };

    const previous = (index) => {
      num.value = index;
    };

    const onClick = () => {
      emit("click", props.urls[num.value], num.value, props.urls);
    };

    const onClickIcon = (event) => {
      emit("click-icon", event);
    };

    return {
      active,
      num,
      maxNum,
      next,
      previous,
      onClick,
      onClickIcon,
    };
  },
});
</script>

<style>
</style>