<template>
  <div class="cats-row">
    哈哈
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed, InjectionKey } from "vue";
import { useChildren } from '@cats-ui/utils'
import { createNamespace } from '../utils'
import { rowProps } from "./types";

const [name] = createNamespace('row');

export type RowProvide = {
  spaces: {

  };
};

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name);

export default defineComponent({
  name: "cats-row",
  props: rowProps,
  setup(props, { slots }) {
    debugger
    const { children, linkChildren } = useChildren(ROW_KEY);

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

    // const spaces = computed(() => {
    //   const gutter = Number(props.gutter);
    //   const spaces: RowSpaces = [];

    //   if (!gutter) {
    //     return spaces;
    //   }

    //   groups.value.forEach((group) => {
    //     const averagePadding = (gutter * (group.length - 1)) / group.length;

    //     group.forEach((item, index) => {
    //       if (index === 0) {
    //         spaces.push({ right: averagePadding });
    //       } else {
    //         const left = gutter - spaces[item - 1].right;
    //         const right = averagePadding - left;
    //         spaces.push({ left, right });
    //       }
    //     });
    //   });

    //   return spaces;
    // });

    // linkChildren({ spaces });

    return () => {

    };
  },
});
</script>