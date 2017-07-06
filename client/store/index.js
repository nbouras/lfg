import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex, VueAxios, axios)

// These holds the Stores states.
const state = {
  count: 0,
}

// These are event like actions to change a state in a Vuex Store.
// Mutations are synchronous.
// Mutations are in CAPITAL (don't ask why)
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// The actions commit mutations, Actions can be asynchronous.
const actions = {

  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
