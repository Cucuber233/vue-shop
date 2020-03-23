<template>
  <div id="app">
      <tab-bar></tab-bar>
      <router-view />
  </div>
</template>

<script>
import tabBar from './components/tab_bar/index.vue';
export default {
  name: 'App',
  components: { tabBar }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
