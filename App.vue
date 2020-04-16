<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  margin: 60px;
}

.link {
  display: inline-block;
  padding: 10px;
}

.router-link-active {
  color: green;
}
</style>