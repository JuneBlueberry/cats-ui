<template>
  <div>
    <cats-button>主要按钮</cats-button>
    <cats-button type="info">主要按钮</cats-button>
    <cats-button type="warning">主要按钮</cats-button>
    <cats-button type="danger">主要按钮</cats-button>
  </div>
</template>
<script lang="ts">
import { CatsButton } from 'cats-ui'
export default {
  components: {
    CatsButton
  }
}
</script>