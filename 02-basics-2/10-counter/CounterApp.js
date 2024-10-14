import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let counter = ref(0)

    function clickMinus() {
      counter.value -= 1
    }

    function clickPlus() {
      counter.value += 1
    }

    return {
      counter,
      clickMinus,
      clickPlus,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter < 1"
        @click="clickMinus"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter >= 5"
        @click="clickPlus"
      >➕</button>
    </div>
  `,
})
