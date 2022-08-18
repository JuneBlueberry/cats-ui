<template>
  <cats-overlay
    :show="show"
    :duration="0"
    custom-class="cats-toast__overlay"
  ></cats-overlay>
  <transition name="cats-scale" appear>
    <div
      :class="['cats-toast', icon === 'none' ? 'cats-toast--none' : '']"
      v-show="show"
    >
      <div class="cats-toast__icon--none" v-if="icon === 'none'"></div>
      <cats-loading
        class="cats-toast__icon"
        v-else-if="icon === 'loading'"
        :size="40"
        color="#ffffff"
      ></cats-loading>
      <cats-icon
        class="cats-toast__icon"
        v-else
        :size="40"
        :name="iconName"
      ></cats-icon>
      <div
        :class="[
          'cats-toast__title',
          icon === 'none' ? 'cats-toast__title--none' : '',
        ]"
      >
        {{ title }}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { createNamespace } from "../utils/create";
import CatsOverlay from "../overlay";
import CatsIcon from "../icon";
import CatsLoading from "../loading";
import { toastPopup } from "./types";

const [name] = createNamespace("toast");

export default defineComponent({
  name,
  props: toastPopup,
  emits: [],
  components: {
    CatsOverlay,
    CatsIcon,
    CatsLoading,
  },
  setup(props, { emit }) {
    const show = computed(() => {
      return props.show;
    });

    const iconName = computed(() => {
      const iconType = {
        success: "check",
        warning: "exclaimination",
        error: "close",
      };
      return iconType[props.icon];
    });

    return {
      show,
      iconName,
    };
  },
});
</script>