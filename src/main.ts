import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter } from 'vue-router'
import Heibai from './components/heibai.vue'
import Xiaopo from './components/xiaopo.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [{
        path: '/',
        component: Heibai
    },{
        path: '/xxx',
        component: Xiaopo
    }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
