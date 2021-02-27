import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import CatsUI from '../packages/index'

createApp(App).use(router).use(CatsUI).mount('#app')