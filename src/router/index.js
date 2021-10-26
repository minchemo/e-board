import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Env from '../views/Env.vue'
import Product from '../views/Product.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/env',
    name: 'Env',
    component: Env
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
