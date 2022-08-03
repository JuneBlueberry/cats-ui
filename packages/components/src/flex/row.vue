<template>
  <div class="cats-row" :class="styleClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, InjectionKey, ComputedRef } from "vue";
import { useChildren } from '@cats-ui/utils'
import { createNamespace } from '../utils'
import { rowProps } from "./types";

const [name] = createNamespace('row');

export type RowSpaces = { left?: number; right?: number }[];

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>;
};

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name);

export default defineComponent({
  name,
  props: rowProps,
  setup(props, { slots }) {
    const { children, linkChildren } = useChildren(ROW_KEY);

    const styleClass = computed(() => {
      return {
        [`cats-row__justify--${props.justify}`]: props.justify,
        [`cats-row__align--${props.align}`]: props.align,
        [`cats-row__wrap`]: props.wrap
      }
    })

    const groups = computed(() => {
      const groups: number[][] = [[]];

      let totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      return groups;
    });

    const spaces = computed(() => {      
      const gutter = Number(props.gutter);
      const spaces: RowSpaces = [];

      if (!gutter) {
        return spaces;
      }

      groups.value.forEach((group) => {
        const averagePadding = gutter / 2;

        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding });
          } else if (index === group.length - 1) {
            spaces.push({ left: averagePadding });
          } else {
            spaces.push({ left: averagePadding, right: averagePadding });
          }
        });
      });

      return spaces;
    });
    
    linkChildren({spaces})

    return {
      styleClass
    };
  },
});
</script>