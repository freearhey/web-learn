<template lang="pug">
main
  recommended-videos
  hr
  popular-videos
</template>

<script>
import PopularVideos from '~components/PopularVideos.vue'
import RecommendedVideos from '~components/RecommendedVideos.vue'
import config from '~config'

export default {
  components: { PopularVideos, RecommendedVideos },
  created() {
    document.title = config.app.name
    this.$Progress.start()
  }
}
</script>

<style lang="sass" scoped>
main
  min-height: 100vh
  margin-top: 110px
</style>