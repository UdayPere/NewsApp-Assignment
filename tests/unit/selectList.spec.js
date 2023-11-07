import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SelectList from '@/components/SelectList.vue'

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

describe('SelectList.vue', () => {
  let actions
  let store
  let mutations
  let getters

  beforeEach(() => {
    getters = {
      apiPayload: (store) => store.apiPayload
    }
    actions = {
      updateAPIPayload ({ commit }, payload) {
        commit('updateAPIPayload', payload)
      }
    }
    mutations = {
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
  it('Checking countries list select or there', () => {
    const wrapper = shallowMount(SelectList, {
      store,
      localVue,
      propsData: {
        selectType: 'countries',
        selectList: [
          {
            code: 'in',
            name: 'India'
          }
        ],
        selecterValue: 'in'
      }
    })
    const byId = wrapper.find('#countries')
    expect(byId.element.id).to.equal('countries')
  })

  it('Select India countries and check the value', async () => {
    const wrapper = shallowMount(SelectList, {
      store,
      localVue,
      propsData: {
        selectType: 'countries',
        selectList: [
          {
            code: 'in',
            name: 'India'
          }
        ],
        selecterValue: 'in'
      }
    })
    const options = wrapper.find('select').findAll('option')
    await options.at(0).setSelected()
    expect(wrapper.find('option:checked').element.value).to.equal('in')
  })

  it('Checking categories list select or there', () => {
    const wrapper = shallowMount(SelectList, {
      store,
      localVue,
      propsData: {
        selectType: 'categories',
        selectList: [
          {
            code: 'business',
            name: 'business'
          }
        ],
        selecterValue: 'business'
      }
    })
    const byId = wrapper.find('#categories')
    expect(byId.element.id).to.equal('categories')
  })

  it('Select business categories and check the value', async () => {
    const wrapper = shallowMount(SelectList, {
      store,
      localVue,
      propsData: {
        selectType: 'categories',
        selectList: [
          {
            code: 'business',
            name: 'business'
          }
        ],
        selecterValue: 'business'
      }
    })
    const options = wrapper.find('select').findAll('option')
    await options.at(0).setSelected()
    expect(wrapper.find('option:checked').element.value).to.equal('business')
  })
})
