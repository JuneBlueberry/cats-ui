<template>
  <div class="demo-page">
    <div class="demo-header">
      <h1 class="demo-title">Badge</h1>
      <p class="demo-desc">徽章</p>
    </div>
    <div class="demo-content demo-content-padding">
      <div class="demo-content-title">基础</div>
    </div>
    <cats-cell-group>
      <cats-cell value="内容说明">
        <template v-slot:title>
          <cats-badge content="1">
            <span>自定义主题</span>
          </cats-badge>
        </template>
      </cats-cell>
      <cats-cell value="内容说明">
        <template v-slot:title>
          <cats-badge position="right-bottom" content="99">
            <span>自定义主题</span>
          </cats-badge>
        </template>
      </cats-cell>
      <cats-cell value="内容说明">
        <template v-slot:title>
          <cats-badge content="9" color="white" background-color="blue">
            <span>自定义主题</span>
          </cats-badge>
        </template>
      </cats-cell>
      <cats-cell title="主标题" value="内容说明" show-link></cats-cell>
    </cats-cell-group>
  </div>
</template>
<script lang="ts">
import { CatsCell, CatsCellGroup, CatsBadge } from "cats-ui";
export default {
  components: {
    CatsCell,
    CatsCellGroup,
    CatsBadge,
  },
  methods: {
    onClick() {
      console.log(111);
    },
  },
};
</script>
<style scoped>
.margin-r {
  width: 32px;
}
.margin-l {
  margin-left: 12px;
}
</style>