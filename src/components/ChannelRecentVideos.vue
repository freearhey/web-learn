<template lang="pug">
section.section.is-paddingless(v-if="channel && videos.length")
  hr
  .container
    strong More from #[router-link(:to="{ name: 'channel', params: { id: channel.id } }") {{ channel.title }}]
    .has-margintop
      video-list(:videos="videos",:columns="limit")
</template>

<script>
import store from '~store'
import filters from '~api/filters'
import VideoList from '~components/VideoList.vue'

export default {
  components: {
    VideoList
  },
  props: {
    channel: Object
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
        channelId: this.channel.id,
        order: filters.order[2].value,
        maxResults: this.limit
      }

      store.fetchVideos(params).then(result => {
        this.videos = result.videos
      })
    }
  }
}
</script>