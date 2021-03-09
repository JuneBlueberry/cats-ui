<template>
  <div style="padding: 10px 0">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: #eee;
  padding: 30px 0;
}
</style>
