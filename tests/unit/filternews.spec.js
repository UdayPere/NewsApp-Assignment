import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import FilterNews from '@/components/FilterNews.vue'
import { sampleNews } from '@/constants/staticData'

const localVue = createLocalVue()
localVue.use(Vuex)

// initial state
const state = {
  apiPayload: {
    countries: 'in',
    categories: 'business',
    search: '',
    pageSize: 0
  },
  getNewsInfo: {}
}

describe('FilterNews.vue', () => {
  let actions
  let store
  let mutations
  let getters

  beforeEach(() => {
    getters = {
      getNewsInfo: () => state.getNewsInfo,
      apiPayload: (store) => store.apiPayload
    }
    actions = {
      setNewsInfo ({ commit }) {
        commit('setNewsInfo', sampleNews)
      },
      updateAPIPayload ({ commit }, payload) {
        commit('updateAPIPayload', payload)
      }
    }
    mutations = {
      setNewsInfo (store, payload) {
        store.getNewsInfo = payload
      },
      updateAPIPayload (store, payload) {
        store.apiPayload[`${payload.type}`] = payload.value
      }
    }
    store = new Vuex.Store({
      modules: {
        newsList: {
          state,
          actions,
          mutations,
          getters,
          namespaced: true
        }
      }
    })
  })
  it('Set the value in input filded and check the value same or not', async () => {
    const wrapper = shallowMount(FilterNews, { store, localVue })
    const textInput = wrapper.find('input[type="search"]')
    await textInput.setValue('bitcoin')
    expect(wrapper.find('input[type="search"]').element.value).to.equal('bitcoin')
  })
})
