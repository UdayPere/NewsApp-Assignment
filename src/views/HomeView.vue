<template>
  <div>
    <div class="bg-filter mb-4">
      <FilterNews />
    </div>
    <div class="container">
      <Posts />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FilterNews from '@/components/FilterNews.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    FilterNews,
    Posts
  },
  methods: {
    ...mapActions({
      setNewsInfo: 'newsList/setNewsInfo'
    })
  },
  mounted () {
    this.setNewsInfo()
  }
}
</script>
