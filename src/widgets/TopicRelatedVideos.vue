<template lang="pug">
section.section.is-paddingless(v-if="topic && videos.length")
  hr
  .container
    strong More from #[router-link(:to="{ name: 'topic', params: { id: topic.id } }") {{ topic.title }}]
    .has-margintop
      video-list(:videos="videos",:columns="limit")
</template>

<script>
import store from '~store'
import util from '~util'
import filters from '~api/filters'
import VideoList from '~components/VideoList.vue'

export default {
  components: {
    VideoList
  },
  props: {
    topic: Object
  },
  data() {
    return {
      videos: [],
      limit: 6
    }
  },
  created() {
    this.loadVideos()
  },
  watch: {
    '$route': 'loadVideos'
  },
  methods: {
    loadVideos() {
      const params = {
        q: util.prepareQuery(this.topic),
        order: filters.order[3].value,
        maxResults: this.limit
      }

      store.fetchVideos(params).then(result => {
        this.videos = result.videos
      })
    }
  }
}
</script>