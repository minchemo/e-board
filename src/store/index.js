import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navOpen: false,
        st: null,
    },
    mutations: {
        toggleNavbar(state, payload) {
            state.navOpen = payload

            if (payload == true) {
                clearTimeout(state.st)
                state.st = setTimeout(() => {
                    state.navOpen = false
                }, 4000)
            }
        },
    },
})