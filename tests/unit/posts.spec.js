import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Posts from '@/components/Posts.vue'
import { sampleNews } from '@/constants/staticData'

const localVue = createLocalVue()
localVue.use(Vuex)

// initial state
const state = {
  apiPayload: {
    countries: 'in',
    categories: 'business',
    search: '',
    pageSize: 12
  },
  getNewsInfo: sampleNews
}

describe('Posts.vue', () => {
  let actions
  let store
  let mutations
  let getters

  beforeEach(() => {
    getters = {
      getNewsInfo: () => state.getNewsInfo,
      apiPayload: () => state.apiPayload
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
          store,
          actions,
          mutations,
          getters,
          namespaced: true
        }
      }
    })
  })
  it('check news post card it updated or not', async () => {
    const wrapper = shallowMount(Posts, { store, localVue })
    const [{ title }] = sampleNews.articles
    expect(wrapper.find('#title').text()).to.equal(title)
  })
})
