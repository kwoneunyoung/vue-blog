import { createApp } from 'vue'
import App from './App.vue'
import List from './router'
import Home from './router'
import Detail from './router'

createApp(App).use(List, Home, Detail).mount('#app')
