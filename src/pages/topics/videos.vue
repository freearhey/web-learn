<template lang="pug">
section.section(v-infinite-scroll="loadMore",infinite-scroll-disabled="loading")
  .container
    video-list(:videos="videos")
    spinner(:show="loading")
</template>

<script>
import store from '~store'
import util from '~util'
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
      loading: false,
      nextPage: null,
      limit: 20
    }
  },
  created() {
    this.videos = []
    this.nextPage = null
    this.loadVideos()
  },
  watch: {
    $route() {
      this.videos = []
      this.nextPage = null
      this.loadVideos()
    }
  },
  methods: {
    loadVideos() {
      this.loading = true

      store.fetchTopic(this.$route.params.id).then(topic => {
        const params = {
          q: util.prepareQuery(topic),
          order: this.$route.meta.order,
          maxResults: this.limit,
          pageToken: this.nextPage,
          videoCategoryId: 27 // Education
        }

        store.fetchVideos(params).then(result => {
          this.loading = false
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
          this.loading = false
          this.$Progress.fail()
        })
      }).catch(() => {
        this.loading = false
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