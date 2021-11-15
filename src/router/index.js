import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home.vue"

import Env from "../views/Env.vue"

import Product from "../views/Product.vue"

import Team from "../views/Team.vue"

Vue.use(VueRouter)

const routes = [{
        title: "首頁",
        path: "/",
        name: "Home",
        component: Home,
        children: [],
    },
    {
        title: "周邊環境",
        themeName: "env-theme",
        icon: require("@/assets/layout/env.svg"),
        path: "/env",
        name: "Env",
        component: Env,
        children: [{
                title: "媒體園區",
                name: "媒體園區",
                path: "/env/1",
                component: Env,
            },
            {
                title: "生活機能",
                name: "生活機能",
                path: "/env/2",
                component: Env,
            },
            // {
            //     title: "交通",
            //     name: "交通",
            //     path: '/env/2',
            //     component: Env
            // }, {
            //     title: "人口",
            //     name: "人口",
            //     path: '/env/3',
            //     component: Env
            // },
            // {
            //     title: "學校",
            //     name: "學校",
            //     path: '/env/4',
            //     component: Env
            // },
            // {
            //     title: "景點",
            //     name: "景點",
            //     path: '/env/5',
            //     component: Env
            // }
        ],
    },
    {
        title: "團隊介紹",
        themeName: "team-theme",
        icon: require("@/assets/layout/team.svg"),
        path: "/team",
        name: "Team",
        component: Team,
        children: [{
                title: "長虹建設",
                name: "長虹建設",
                path: "/team/1",
                component: Team,
            },
            {
                title: "森聯建設",
                name: "森聯建設",
                path: "/team/2",
                component: Team,
            },
            {
                title: "建築職人",
                name: "建築職人",
                path: "/team/3",
                component: Team,
            },
            {
                title: "實品屋",
                name: "實品屋",
                path: "/team/4",
                component: Team,
            },
        ],
    },
    {
        title: "產品導覽",
        themeName: "product-theme",
        icon: require("@/assets/layout/product.svg"),
        path: "/product",
        name: "Product",
        component: Product,
        children: [{
                title: "基本資料",
                name: "基本資料",
                path: "/product/1",
                component: Product,
            },
            {
                title: "平面圖",
                name: "平面圖",
                path: "/product/2",
                component: Product,
            },
            {
                title: "建材配備",
                name: "建材配備",
                path: "/product/3",
                component: Product,
            },
        ],
    },
]

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router