import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let arg1 = ref(0)
    let arg2 = ref(0)
    let operation = ref('sum')

    let result = computed(() => {
      let result
      switch (operation.value) {
        case 'sum':
          result = arg1.value + arg2.value
          break
        case 'subtract':
          result = arg1.value - arg2.value
          break
        case 'multiply':
          result = arg1.value * arg2.value
          break
        case 'divide':
          result = arg1.value / arg2.value
          break
        default:
          result = NaN
      }
      return result
    })

    return {
      arg1,
      arg2,
      operation,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="arg1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operation"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operation"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operation"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operation"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="arg2" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
