<template>
    <div class="container">
        <header class="row">
            <div class="col bg-info rounded-pill mb-4">
                <h3 class="h3 text-center text-black-50">
                    <slot/>
                </h3>
            </div>
        </header>

        <div class="row justify-content-center mb-3">
            <div class="col">
                <div class="row">
                    <div id="display" class="col rounded bg-dark text-light text-right text-white h1 mb-0">{{ display }}
                    </div>
                </div>
            </div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">C</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">+/-</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">%</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">/</div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">7</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">8</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">9</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">*</div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">4</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">5</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">6</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">-</div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">1</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">2</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">3</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn">+</div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col px-0 mx-1">&nbsp;</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">0</div>
            <div class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">.</div>
            <div class="col bg-dark text-center text-white-50 px-0 mx-1 btn con">=</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Calculator",

    data() {
      return {
        display: 0
      }
    }
  }
</script>

<style scoped>
</style>