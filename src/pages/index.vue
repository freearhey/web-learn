<template lang="pug">
main
  component(is="recommended-videos")
  hr
  component(is="popular-videos")
</template>

<script>
import config from '~config'
import recommendedVideos from '~pages/videos/recommended.vue'
import popularVideos from '~pages/videos/popular.vue'

export default {
  components: {
    'recommended-videos': recommendedVideos,
    'popular-videos': popularVideos
  },
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