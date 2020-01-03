<template>
    <header class="row">
        <div class="col bg-primary rounded">
            <h3 class="h3 text-center text-black-50">
                <slot/>
            </h3>
        </div>
    </header>
</template>

<script>
  export default {
    name: "Calculator"
  }
</script>

<style scoped>

</style>