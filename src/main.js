import { createApp } from 'vue'
import './style.css'
import './assets/index.css'
import App from './App.vue'
import {router} from "@/route/index.js";

createApp(App).use(router).mount('#app')
