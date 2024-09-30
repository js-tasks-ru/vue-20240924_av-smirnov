import { defineComponent, createApp } from 'vue'

const myFirstApp = defineComponent({
  name: 'myFirstApp',
  setup() {
    return { today: new Date().toLocaleDateString(undefined, { dateStyle: 'long' }) }
  },
  template: '<div>Сегодня {{ today }}</div>',
})

const app = createApp(myFirstApp)
app.mount('#app')
