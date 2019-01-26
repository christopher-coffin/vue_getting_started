<template>
  <div id="app">
    <BabylonWorld msg="Babylon And Vue World"/>
  </div>
</template>

<script>
import BabylonWorld from './components/BabylonWorld.vue'

export default {
  name: 'app',
  components: {
    BabylonWorld
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: 100;
}
</style>
