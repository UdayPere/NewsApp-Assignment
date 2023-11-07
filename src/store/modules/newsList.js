import getNewsDetails from '@/api/getNews.api'

// initial state
const state = {
  getNewsInfo: {},
  apiPayload: {
    countries: 'in',
    categories: 'business',
    search: '',
    pageSize: 0
  }
}

// getters
const getters = {
  getNewsInfo: (store) => store.getNewsInfo,
  apiPayload: (store) => store.apiPayload
}

// actions
const actions = {
  async setNewsInfo ({ commit, state }) {
    const { apiPayload } = state
    commit('updateAPIPayload', { type: 'pageSize', value: apiPayload.pageSize + 12 })
    const newsPayload = {
      pageSize: apiPayload.pageSize,
      q: apiPayload.search,
      country: apiPayload.countries,
      category: apiPayload.categories
    }
    try {
      const response = await getNewsDetails(newsPayload)
      commit('setNewsInfo', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  updateAPIPayload ({ commit }, payload) {
    commit('updateAPIPayload', payload)
  }
}

// mutations
const mutations = {
  setNewsInfo (store, payload) {
    store.getNewsInfo = payload
  },
  updateAPIPayload (store, payload) {
    store.apiPayload[`${payload.type}`] = payload.value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
