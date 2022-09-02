<template>
  <label class="cats-checkbox" :class="styleClass" @click="onClick">
    <div class="cats-checkbox__icon">
      <cats-icon v-if="checked" :color="color" :name="activeName"></cats-icon>
      <cats-icon v-else color="#0000004d" :name="noActiveName"></cats-icon>
    </div>
    <div class="cats-checkbox__label">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, ref } from "vue";
import { useParent } from "@cats-ui/utils";
import { checkboxProps } from "./types";
import { createNamespace } from "../utils";
import CatsIcon from "../icon";
import { CHECKBOX_KEY } from "./checkbox-group.vue";

const [name] = createNamespace("checkout");
export default defineComponent({
  name,
  props: checkboxProps,
  emits: ["change", "update:modelValue", "click"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const { parent } = useParent(CHECKBOX_KEY);

    const styleClass = computed(() => {
      return {
        ["cats-checkbox--opposite"]: props.opposite,
      };
    });

    const activeName = computed(() => {
      return props.square ? "check-square-fill" : "check-circle-fill";
    });

    const noActiveName = computed(() => {
      return props.square ? "border" : "circle";
    });

    const checked = computed(() => {
      if (parent && props.name) {
        return parent.props?.modelValue.indexOf(props.name) > -1;
      }
      return !!props.modelValue;
    });

    const onClick = (event: MouseEvent) => {
      const _checked = !checked.value;
      if (parent && props.name) {
        const { modelValue, max } = parent.props;
        const value = modelValue.slice();
        if (_checked) {
          const _max = Number(max);
          if (_max > 0 && value.length >= _max) return;
          value.push(props.name);
        } else {
          let index = value.indexOf(props.name);
          if (index !== -1) {
            value.splice(index, 1);
          }
        }
        parent?.updateValue(value);
      } else {
        emit("update:modelValue", _checked);
        emit("change", _checked);
      }
      emit("click", event);
    };

    return {
      styleClass,
      checked,
      activeName,
      noActiveName,
      onClick,
    };
  },
});
</script>

<style>
</style>