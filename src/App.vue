<template>
    <div class="container">
        <calculator>
            Simple Electron + Vue.js calculator
        </calculator>
    </div>
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

<style scoped>
</style>
