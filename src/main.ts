import { createApp } from 'vue'
//Vuex
import App from './App.vue'
import store from './store'
createApp(App).use(store).mount('#app')

//Pinia
import AppPinia from './App-pinia.vue'
import { createPinia } from 'pinia'
createApp(AppPinia).use(createPinia()).mount('#app')
