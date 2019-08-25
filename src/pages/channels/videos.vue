<template lang="pug">
section.section(v-infinite-scroll="loadMore",:infinite-scroll-disabled="!loaded")
  .container
    video-list(:videos="videos")
    spinner(:show="!loaded")
</template>

<script>
import store from '~store'
import VideoList from '~components/VideoList.vue'
import Spinner from '~components/Spinner.vue'

export default {
  components: {
    VideoList,
    Spinner
  },
  data() {
    return {
      videos: [],
      limit: 20,
      loaded: false,
      nextPage: null
    }
  },
  created() {
    this.loaded = false
    this.videos = []
    this.nextPage = null
    this.loadVideos()
  },
  watch: {
    $route() {
      this.loaded = false
      this.videos = []
      this.nextPage = null
      this.loadVideos()
    }
  },
  methods: {
    loadVideos() {
      this.loaded = false

      const params = {
        order: this.$route.meta.order,
        maxResults: this.limit,
        channelId: this.$route.params.id,
        pageToken: this.nextPage
      }

      store.fetchVideos(params).then(result => {
        this.loaded = true
        this.$Progress.finish()
        if(!result.videos.length) {
          this.nextPage = null
          return
        }
        this.nextPage = result.nextPageToken
        result.videos.forEach(video => {
          this.videos.push(video)
        })
      }).catch(() => {
        this.loaded = true
        this.$Progress.fail()
      })
    },
    loadMore() {
      if(!this.nextPage) { return }
      this.loadVideos()
    }
  }
}
</script>