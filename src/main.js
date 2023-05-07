import { createApp } from 'vue'

import '../src/index.css'

import App from './App.vue'

import router from './router'

import store from '../store/'

import Toaster from '@meforma/vue-toaster'

createApp(App)
    .use(router)
    .use(Toaster, {
        position: 'top',
    })
    .use(store)
    .mount('#app')
