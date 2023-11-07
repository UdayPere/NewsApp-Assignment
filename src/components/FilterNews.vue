<template>
  <div class="py-4 text-center container">
    <SelectList
      :selectType="'countries'"
      :selectList="countriesList"
      :selecterValue="apiPayload.countries"
    />
    <SelectList
      class="ml-4"
      :selectType="'categories'"
      :selectList="categoriesList"
      :selecterValue="apiPayload.categories"
    />
    <input type="search" placeholder="Keywords (optional)..."
      class="selecter ml-4" v-model="search"
    />
    <button class="ml-2 selecter btn"
      @click="setNewsInfo()">
      search
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { countriesList, categoriesList } from '@/constants/staticData'
import SelectList from './SelectList.vue'

export default {
  name: 'Filter-News',
  data () {
    return {
      search: '',
      countriesList,
      categoriesList
    }
  },
  components: {
    SelectList
  },
  watch: {
    search (value) {
      this.updateAPIPayload({ type: 'search', value })
    }
  },
  computed: {
    ...mapGetters({
      apiPayload: 'newsList/apiPayload'
    })
  },
  methods: {
    ...mapActions({
      setNewsInfo: 'newsList/setNewsInfo',
      updateAPIPayload: 'newsList/updateAPIPayload'
    }),
    reset () {
      this.search = ''
    }
  }
}
</script>
