<template>
  <label class="cats-radio" :class="styleClass" @click="onClick">
    <div class="cats-radio__label">
      <slot></slot>
    </div>
    <div class="cats-radio__icon">
      <cats-icon v-if="checked" :color="iconColor" name="check"></cats-icon>
      <cats-icon v-else name=""></cats-icon>
    </div>
  </label>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { useParent } from "@cats-ui/utils";
import { radioProps } from "./types";
import { createNamespace } from "../utils";
import CatsIcon from "../icon";
import { RADIO_KEY } from "./radio-group.vue";

const [name] = createNamespace("checkout");
export default defineComponent({
  name,
  props: radioProps,
  emits: ["update:modelValue", "click"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const { parent } = useParent(RADIO_KEY);

    const styleClass = computed(() => {
      return {
        "cats-radio--disabled": props.disabled,
      };
    });

    const iconColor = computed(() => {
      return props.disabled ? "rgba(0, 0, 0, 0.2)" : props.color;
    });

    const checked = computed(() => {
      if (parent && props.name) {
        return parent.props?.modelValue == props.name;
      }
    });

    const onClick = (event: MouseEvent) => {
      if (checked.value || props.disabled) return;

      if (parent && props.name) {
        parent?.updateValue(props.name);

        emit("click", event);
      }
    };

    return {
      styleClass,
      iconColor,
      checked,
      onClick,
    };
  },
});
</script>

<style>
</style>