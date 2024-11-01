import { defineComponent, createApp } from 'vue'

const MyFirstApp = defineComponent({
  name: 'MyFirstApp',
  setup() {
    return { today: new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' }) }
  },
  template: '<div>Сегодня {{ today }}</div>',
})

const app = createApp(MyFirstApp)
app.mount('#app')
