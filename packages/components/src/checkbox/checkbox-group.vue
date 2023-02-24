<template>
  <div class="cats-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, InjectionKey, ComputedRef, computed } from "vue";
import { checkboxGroupProps, CheckboxGroupProps } from "./types";
import { createNamespace } from "../utils";
import { useChildren } from "@cats-ui/utils";

const [name] = createNamespace("checkout-group");

export type CheckboxProvide = {
  props: CheckboxGroupProps;
  updateValue: (value: Array<String | Number>) => void;
};

export const CHECKBOX_KEY: InjectionKey<CheckboxProvide> = Symbol(name);

export default defineComponent({
  name,
  props: checkboxGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { children, linkChildren } = useChildren(CHECKBOX_KEY);

    const updateValue = (value: Array<String | Number>) => {
      emit("update:modelValue", value);
      emit("change", value);
    };

    // const checkeds = computed(() => {
    //   return props.modelValue;
    // });

    linkChildren({ props, updateValue });
  },
});
</script>

<style>
</style>