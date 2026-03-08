import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Chart from 'primevue/chart'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('Chart', Chart)
app.mount('#app')