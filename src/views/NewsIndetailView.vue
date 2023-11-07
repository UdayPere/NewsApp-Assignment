<template>
  <div class="container my-4" v-if="newsArticles">
    <img class="w-100" :src="newsArticles.urlToImage" :alt="newsArticles.title" />
    <div class="mx-auto">
      <div class="text-center mb-4">
        <small>
          {{ moment(newsArticles.publishedAt).utc().format('MMMM DD, YYYY') }},
          {{ newsArticles.source.name }}
        </small>
        <h1 class="text-center" id="title">
          {{ newsArticles.title }}
        </h1>
        <small>
          Written by {{ newsArticles.author }}
        </small>
      </div>
      <br>
      <blockquote class="py-4 px-4 font-italic bl-4">
        {{ newsArticles.description }}
      </blockquote>
      <br>
      <p class="my-2">
        {{ newsArticles.content }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'newsIndetail',
  props: ['newsArticles'],
  methods: {
    moment: (date) => moment(date)
  }
}
</script>
