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
  head: {
    title() {
      return {
        inner: config.app.name,
        separator: ' '
      }
    },
    meta() {
      return [
        { name: 'description', content: config.app.description }
      ]
    }
  },
  created() {
    this.$Progress.start()
  }
}
</script>

<style lang="sass" scoped>
main
  min-height: 100vh
  margin-top: 110px
</style>