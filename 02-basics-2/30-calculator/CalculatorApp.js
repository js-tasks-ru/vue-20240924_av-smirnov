import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let arg1 = ref(0)
    let arg2 = ref(0)
    let result = ref(0)
    let operation = ref('sum')

    watch([arg1, arg2, operation], ([arg1, arg2, operation]) => {
      if (operation == 'sum') result.value = arg1 + arg2
      if (operation == 'subtract') result.value = arg1 - arg2
      if (operation == 'multiply') result.value = arg1 * arg2
      if (operation == 'divide') result.value = arg1 / arg2
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
