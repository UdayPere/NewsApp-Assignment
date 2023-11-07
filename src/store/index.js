import Vue from 'vue'
import Vuex from 'vuex'
import newsList from './modules/newsList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newsList
  }
})
