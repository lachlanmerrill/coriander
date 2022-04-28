import 'vuetify/styles'

import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory } from 'vue-router'

import store from '@/store'

import LandingPage from '@/components/LandingPage/LandingPage'
import Calendar from '@/components/Calendar/Calendar'
import ToDoList from '@/components/ToDoList/ToDoList'

import '@/assets/colours.css'

loadFonts()

const routes = [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/Calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/ToDoList',
      name: 'todolist',
      component: ToDoList
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App)
.use(router)
.use(Vuetify)
.use(store)
.mount('#app')