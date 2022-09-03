<template>
  <div class="cats-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, InjectionKey, ComputedRef, computed } from "vue";
import { radioGroupProps, RadioGroupProps } from "./types";
import { createNamespace } from "../utils";
import { useChildren } from "@cats-ui/utils";

const [name] = createNamespace("checkout-group");

export type RadioProvide = {
  props: RadioGroupProps;
  updateValue: (value: String | Number) => void;
};

export const RADIO_KEY: InjectionKey<RadioProvide> = Symbol(name);

export default defineComponent({
  name,
  props: radioGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { linkChildren } = useChildren(RADIO_KEY);

    const updateValue = (value: String | Number) => {
      emit("update:modelValue", value);
      emit("change", value);
    };

    linkChildren({ props, updateValue });
  },
});
</script>

<style>
</style>