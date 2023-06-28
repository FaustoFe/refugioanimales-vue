import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Animal from '../views/Animal.vue'
import Eventos from '../views/Eventos.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/animal/:id',
    name: 'animal',
    component: Animal
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
