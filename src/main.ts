import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from '@/app/App.vue'
import router from '@/app/router/index'
import directives from "@/app/directives"
import '@/index.scss'

const app = createApp(App)

directives.forEach((directive) => {
  app.directive(directive.name, directive)
})

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.mount('#app')
