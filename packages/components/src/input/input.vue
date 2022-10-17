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
      <div class="cats-input__content-main">
        <!-- 禁用 && 只读 -->
        <span
          class="cats-input__content-main--input"
          :style="disabledStyle"
          v-if="readonly || disabled"
          >{{ formValue }}</span
        >
        <!-- textarea -->
        <template v-else-if="isTextarea">
          <textarea
            class="cats-input__content-main--textarea"
            :name="name"
            :rows="rows"
            v-model="formValue"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            @input="onChange"
            @blur="onBlur"
            @focus="onFocus"
          ></textarea>
          <span
            class="cats-input__content-main--nums"
            v-if="isShowNums && maxlength >= 0"
            >{{ textNums }}/{{ maxlength }}</span
          >
        </template>
        <!-- input -->
        <input
          class="cats-input__content-main--input"
          v-else
          v-model="formValue"
          :type="type"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          @input="onChange"
          @blur="onBlur"
          @focus="onFocus"
        />
      </div>

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
import { createNamespace, cutString } from "../utils";
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
    const textNums = ref((props.modelValue || "").toString().length);
    const maxlength = computed(() => {
      console.log(props.maxlength);
      return props.maxlength
        ? Number(props.maxlength)
        : props.isTextarea
        ? 200
        : -1;
    });

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
        const nums = value.length;
        console.log(maxlength.value);
        if (maxlength.value == -1 || nums <= maxlength.value) {
          textNums.value = nums;
        } else {
          formValue.value = cutString(value, maxlength.value);
          return;
        }
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
      textNums,
      maxlength,
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