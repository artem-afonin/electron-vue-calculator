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
            <div @click="clear" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">C</div>
            <div @click="sign" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">+/-</div>
            <div @click="percent" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">%</div>
            <div @click="divide" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">/</div>
        </div>

        <div class="row mx-5 mb-1">
            <div @click="append(7)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">7</div>
            <div @click="append(8)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">8</div>
            <div @click="append(9)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">9</div>
            <div @click="multiply" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">*</div>
        </div>

        <div class="row mx-5 mb-1">
            <div @click="append(4)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">4</div>
            <div @click="append(5)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">5</div>
            <div @click="append(6)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">6</div>
            <div @click="subtract" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">-</div>
        </div>

        <div class="row mx-5 mb-1">
            <div @click="append(1)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">1</div>
            <div @click="append(2)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">2</div>
            <div @click="append(3)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">3</div>
            <div @click="add" class="col bg-dark text-center text-white-50 px-0 mx-1 btn">+</div>
        </div>

        <div class="row mx-5 mb-1">
            <div class="col px-0 mx-1">&nbsp;</div>
            <div @click="append(0)" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">0</div>
            <div @click="decimal" class="col bg-light text-center text-black-50 px-0 mx-1 btn border-dark">.</div>
            <div @click="equal" class="col bg-dark text-center text-white-50 px-0 mx-1 btn con">=</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Calculator",

    data() {
      return {
        display: 0,
        previous: null,
        operator: null,
        operatorClicked: false
      };
    },

    methods: {
      clear() {
        this.display = 0
      },

      sign() {
        this.display = -this.display
      },

      percent() {
        this.display = this.display / 100
      },

      append(number) {
        if (this.operatorClicked === true) {
          this.display = ''
          this.operatorClicked = false
        }
        this.display =
            this.display === 0
                ? (this.display = number)
                : '' + this.display + number
      },

      decimal() {
        if (this.display.indexOf('.') === -1) {
          this.append('.')
        }
      },

      divide() {
        this.operator = (a, b) => a / b
        this.previous = this.display
        this.operatorClicked = true
      },

      multiply() {
        this.operator = (a, b) => a * b
        this.previous = this.display
        this.operatorClicked = true
      },

      subtract() {
        this.operator = (a, b) => a - b
        this.previous = this.display
        this.operatorClicked = true
      },

      add() {
        this.operator = (a, b) => a + b
        this.previous = this.display
        this.operatorClicked = true
      },

      equal() {
        this.display = this.operator(Number(this.previous), Number(this.display))
        this.previous = null
        this.operatorClicked = true
      }
    }
  }
</script>

<style scoped>
</style>