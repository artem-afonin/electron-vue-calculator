<template>
    <calculator>
        Simple Electron + Vue.js calculator
    </calculator>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.min.css"
  import Calculator from "./components/Calculator.vue"

  export default {
    name: 'app',
    components: {
      Calculator
    }
  }
</script>

<style>
    html {
        font-size: 18pt;
    }
</style>
