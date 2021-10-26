import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Env from '../views/Env.vue'

import Product from '../views/Product.vue'
import ProductInfo from '../components/product/info.vue';
import ProductPlan from '../components/product/plan.vue';
import ProductTexture from '../components/product/texture.vue';

import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    title: "首頁",
    path: '/',
    name: 'Home',
    component: Home,
    children: []
  },
  {
    title: "周邊環境",
    themeName: "env-theme",
    icon: require("@/assets/layout/env.svg"),
    path: '/env',
    name: 'Env',
    component: Env,
    children: [
      {
        title: "人口",
        path: '/env/1',
        component: Env
      },
      {
        title: "交通",
        path: '/env/2',
        component: Env
      },
      {
        title: "媒體園區",
        path: '/env/3',
        component: Env
      },
      {
        title: "景點",
        path: '/env/4',
        component: Env
      },
      {
        title: "學校",
        path: '/env/5',
        component: Env
      }
    ]
  },
  {
    title: "團隊介紹",
    themeName: "team-theme",
    icon: require("@/assets/layout/team.svg"),
    path: '/team',
    name: 'Team',
    component: Team,
    children: [
      {
        title: "長虹",
        path: '/team/1',
        component: Team
      },
      {
        title: "森聯",
        path: '/team/2',
        component: Team
      },
      {
        title: "建築職人",
        path: '/team/3',
        component: Team
      },
      {
        title: "空間展演",
        path: '/team/4',
        component: Team,
      }
    ]
  },
  {
    title: "產品導覽",
    themeName: "product-theme",
    icon: require("@/assets/layout/product.svg"),
    path: '/product',
    name: 'Product',
    component: Product,
    children: [
      {
        title: "基本資料",
        path: '/product/1',
        component: ProductInfo
      },
      {
        title: "傢配圖",
        path: '/product/2',
        component: ProductPlan
      },
      {
        title: "建材",
        path: '/product/3',
        component: ProductTexture
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
