<template>
  <div class="cats-panel" @click="onClickDetail">
    <div class="cats-panel__header">{{ title }}</div>
    <div
      class="cats-panel__main"
      v-for="(action, index) in actionList"
      :key="action.key"
      @click.stop="action.link ? onClick(action, index) : onClickDetail($event)"
    >
      <img class="cats-panel__main--image" :src="action.image" alt="" />
      <div class="cats-panel__main-content">
        <strong class="cats-panel__main-content--title">{{
          action.title
        }}</strong>
        <span class="cats-panel__main-content--label">{{ action.label }}</span>
        <div
          class="cats-panel__main-desc"
          v-if="action.desc && action.desc.length > 0"
        >
          <span
            class="cats-panel__main-desc--info"
            v-for="(desc, index2) in action.desc"
            :key="index2"
            >{{ desc }}</span
          >
        </div>
      </div>
      <div class="cats-panel__main--icon" v-if="action.link">
        <cats-icon
          :name="action.icon"
          :size="17"
          color="rgba(0,0,0,0.3)"
        ></cats-icon>
      </div>
    </div>
    <div class="cats-panel__footer">
      <span class="cats-panel__footer--text">{{ detailText }}</span>
      <cats-icon name="right" :size="17" color="rgba(0,0,0,0.3)"></cats-icon>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { defineComponent, computed } from "vue";
import CatsIcon from "../icon";
import { createNamespace } from "../utils";
import { panelProps } from "./types";

const [name] = createNamespace("panel");

export default defineComponent({
  name,
  props: panelProps,
  emits: ["click", "detail"],
  components: {
    CatsIcon,
  },
  setup(props, { emit }) {
    const actionList = computed(() => {
      const _actions: any = [];
      props.actions.forEach((action, index) => {
        _actions.push({
          ...action,
          link: action.link || false,
          key: action.key || index,
          icon: action.icon || "right",
        });
      });
      return _actions;
    });

    const onClickDetail = (event: MouseEvent) => {
      emit("detail", event);
    };

    const onClick = (index: number) => {
      emit("click", props.actions[index], index, props.actions);
    };

    return {
      actionList,
      onClick,
      onClickDetail,
    };
  },
});
</script>