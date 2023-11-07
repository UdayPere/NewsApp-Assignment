<template>
  <select class="selecter" :id="selectType" v-model="selecter"
    v-if="selectList && selectList.length">
    <option v-for="(item, index) in selectList"
      :key="index"
      :value="item.code">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Select-component',
  data () {
    return {
      selecter: null
    }
  },
  props: {
    selectType: {
      type: String
    },
    selectList: {
      type: Array
    },
    selecterValue: {
      type: String
    }
  },
  watch: {
    selecter (value) {
      this.updateAPIPayload({ type: this.selectType, value })
    }
  },
  methods: {
    ...mapActions({
      updateAPIPayload: 'newsList/updateAPIPayload'
    })
  },
  mounted () {
    this.selecter = this.selecterValue
  }
}
</script>
<style scoped>
</style>
