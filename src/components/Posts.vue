<template>
  <div>
    <div class="posts flex justify-between">
      <div class="posts__item"
        v-for="(item, index) in getNewsInfo.articles" :key="index">
        <div class="posts__image">
          <img :src="item.urlToImage ? item.urlToImage : item.url" :alt="item.title">
        </div>
        <div class="posts__information flex justify-between">
          <div class="posts__date font-semibold text-uppercase">
            {{ moment(item.publishedAt).utc().format('MMMM DD, YYYY') }}
          </div>
          <div class="posts__title font-bold text-uppercase" id="title">
            <router-link :to="{ name: 'newsIndetail', params: { newsArticles: item } }">
              {{ item.title }}
            </router-link>
          </div>
          <div class="posts__author">
            <p>by {{ item.author }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="load-wrapper">
      <p @click="scrollTrigger()" class="font-bold text-uppercase">
        {{!allLoaded ? 'Load More' : 'All Loaded'}}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts-component',
  data () {
    return {
      allLoaded: false
    }
  },
  computed: {
    ...mapGetters({
      getNewsInfo: 'newsList/getNewsInfo',
      apiPayload: 'newsList/apiPayload'
    })
  },
  watch: {
    getNewsInfo: {
      handler: function (val) {
        if (this.apiPayload.pageSize >= val.totalResults) {
          this.allLoaded = true
        }
      },
      deep: true
    }
  },
  methods: {
    moment: (date) => moment(date),
    ...mapActions({
      setNewsInfo: 'newsList/setNewsInfo'
    }),
    scrollTrigger () {
      const { pageSize } = this.apiPayload
      const { totalResults } = this.getNewsInfo
      if (!this.allLoaded && pageSize <= totalResults) {
        this.setNewsInfo()
      }
    }
  }
}
</script>

<style lang="scss">
.posts {
  flex-wrap: wrap;
  &__item {
    display: flex;
    flex-direction: column;
    flex-basis: 32%;
    background-color: var(--whiteColor);
    margin-bottom: 22px;
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  &__image > img {
    display: block;
    width: 100%;
  }
  &__information {
    flex-direction: column;
    padding: 15px 25px;
    flex-grow: 1;
  }
  &__date {
    font-size: 13px;
    line-height: 30px;
    letter-spacing: 0.325px;
    color: var(--lightgrey);
  }
  &__title {
    a {
      font-size: 18px;
      color: var(--titleColor);
      text-decoration: none;
      letter-spacing: 0.55px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__author {
    img {
      border-radius: 50px;
      width: 20px;
    }
  }
}
.load-wrapper {
  position: relative;
  margin: 16px auto;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    width: -webkit-fill-available;
    background: #d2d2d2;
    z-index: -1;
    margin: 0 16px;
  }
  p {
    background: var(--whiteColor);
    font-style: italic;
    display: inline-block;
    color: var(--orangeColor);
    padding: 10px 32px;
    font-size: 14px;
    position: relative;
    left: 50%;
    transform: translateX(-50px);
    cursor: pointer;
  }
}
@media screen and (max-width: 992px) {
  .posts__information {
    padding: 10px 15px 15px 15px;
  }
  .posts__date {
    font-size: 12px;
  }
  .posts__title a {
    font-size: 16px;
    line-height: 24px;
  }
  .posts__information .post-title a {
    font-size: 20px;
    line-height: 26px;
  }
}
@media screen and (max-width: 768px) {
  .posts__item {
    flex-basis: 49%;
  }
}
@media screen and (max-width: 480px) {
  .posts__item {
    flex-basis: 100%;
  }
  .load-wrapper {
    p {
      left: 45%;
    }
  }
}
</style>
