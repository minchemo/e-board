import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mouseEntered: false,
        navOpen: false,
        st: null,
    },
    mutations: {
        toggleNavbar(state, payload) {
            state.navOpen = payload

            if (payload == true) {
                clearTimeout(state.st)
                state.st = setTimeout(() => {
                    if (!state.mouseEntered) {
                        state.navOpen = false
                    }
                }, 2000)
            }
        },
    },
    actions: {
        navMouseEnter({ commit, state }) {
            commit("toggleNavbar", true)
            state.mouseEntered = true
        },
        navMouseLeave({ commit, state }) {
            commit("toggleNavbar", false)
            state.mouseEntered = false
        },
    },
})