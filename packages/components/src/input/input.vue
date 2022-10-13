<template>
  <div class="cats-input">
    <div class="cats-input__left">
      <slot name="left-icon">
        <cats-icon
          class="cats-input__left--icon"
          v-if="leftIcon"
          :name="leftIcon"
          :size="20"
        ></cats-icon>
      </slot>
      <div class="cats-input__left-text">
        <span class="cats-input__left-text--title" :style="disabledStyle">{{
          title
        }}</span>
        <span
          class="cats-input__left-text--label"
          :style="disabledStyle"
          v-if="label"
          >{{ label }}</span
        >
      </div>
    </div>
    <div class="cats-input__content">
      <span
        class="cats-input__content-input"
        :style="disabledStyle"
        v-if="readonly || disabled"
        >{{ formValue }}</span
      >
      <input
        class="cats-input__content-input"
        v-else
        v-model="formValue"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="onChange"
        @blur="onBlur"
        @focus="onFocus"
      />
      <cats-icon
        v-if="clearable && formValue !== ''"
        name="close-circle-fill"
        :size="20"
        color="#c8c9cc"
        @click="onClear"
      ></cats-icon>
    </div>
    <slot name="right-icon">
      <div v-if="rightIcon" class="cats-input__right">
        <cats-icon :name="rightIcon" :size="20"></cats-icon>
      </div>
    </slot>
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
  emits: ["update:modelValue", "change", "blur", "focus", "clear"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const formValue = ref(props.modelValue || "");

    const disabledStyle = computed(() => {
      return props.disabled
        ? {
            color: "rgba(0, 0, 0, 0.2)",
          }
        : {};
    });

    watch(
      () => props.modelValue,
      (value) => {
        formValue.value = value || "";
      }
    );

    const onChange = (event: InputEvent) => {
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

    const onClear = (event: Event) => {
      formValue.value = "";
      emit("clear", event);
    };

    return {
      disabledStyle,
      formValue,
      onChange,
      onBlur,
      onFocus,
      onClear,
    };
  },
});
</script>

<style>
</style>