<template lang="pug">
main
  component(is="recommended-videos")
  hr
  component(is="popular-videos")
</template>

<script>
import config from '~config'

export default {
  components: {
    'recommended-videos': require('~pages/videos/recommended.vue'),
    'popular-videos': require('~pages/videos/popular.vue')
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