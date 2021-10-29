import Vue from 'vue'
import App from './App.vue'

import "normalize.css"
import "./scss/custom.scss"

import store from '../src/store'

/**
 * router
 */
import router from './router'

/**
 * aos
 */
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
    store: store,
    mounted() {
        AOS.init({
            offset: 0, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        })
    },
}).$mount('#app')