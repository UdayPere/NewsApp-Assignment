import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NewsIndetailView from '@/views/NewsIndetailView.vue'
import { sampleNews } from '@/constants/staticData'

describe('NewsIndetailView.vue', () => {
  it('should render title on news indetail view', () => {
    const { articles } = sampleNews
    const [newsArticles] = articles
    const wrapper = shallowMount(NewsIndetailView, {
      propsData: { newsArticles }
    })
    expect(wrapper.find('#title').text()).to.equal(newsArticles.title)
  })
})
