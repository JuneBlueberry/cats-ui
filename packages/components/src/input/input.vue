<template>
  <div class="cats-input">
    <div class="cats-input__left"></div>
    <div class="cats-input__content">
      <span class="cats-input__content-name">{{ label }}</span>
      <input
        class="cats-input__content-input"
        v-model="formValue"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="onChange"
        @blur="onBlur"
        @focus="onFocus"
      />
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { computed, defineComponent, ref, watch } from "vue";
import { inputProps } from "./types";
import { createNamespace } from "../utils/create";
import CatsIcon from "../icon";

const [name] = createNamespace("input");

export default defineComponent({
  name,
  props: inputProps,
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(props, { emit }) {
    const formValue = ref(props.modelValue || "");

    watch(
      () => props.modelValue,
      (value) => {
        formValue.value = value || "";
      }
    );

    const onChange = (event: InputEvent) => {
      console.log(event);
      if (event.target) {
        const value = (event.target as HTMLInputElement).value;
        emit("change", value);
        emit("update:modelValue", value);
      }
    };

    const onFocus = (event: Event) => {
      emit("focus", event);
    };

    const onBlur = (event: Event) => {
      emit("blur", event);
    };

    return {
      formValue,
      onChange,
      onBlur,
      onFocus,
    };
  },
});
</script>

<style>
</style>