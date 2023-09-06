import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// reset css
import 'modern-normalize'
import "@/style/style.css"

const app = createApp(App)

app.use(router).mount('#app')
