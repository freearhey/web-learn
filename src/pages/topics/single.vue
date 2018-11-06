<template lang="pug">
main
  section(v-if="topic")
    .hero.is-medium(:style="{ backgroundColor: topic.color }")
      .hero-body
    .info
      .container
        .media
          .media-left
            .image.logo
              span.logo__wrapper
              img(:src="topic.logo")
          .media-content
            .content
              .title.is-3.topic-title #[strong {{ topic.title }}]
              a.topic-site(v-if="topic.site",:href="topic.site",target="_blank",rel="noopener noreferrer") {{ topic.site }}
    nav.nav.has-underline
      .container
        .nav-center
          router-link.nav-item.is-tab(:to="{ name: 'topic-popular-videos' }") Popular
          router-link.nav-item.is-tab(:to="{ name: 'topic-recent-videos' }") Recent
    router-view
</template>

<script>
import store from '~store'
import config from '~config'

export default {
  data() {
    return {
      topic: null,
      params: {
        title: ''
      }
    }
  },
  created() {
    this.$Progress.start()
    this.loadTopic()
  },
  watch: {
    $route() {
      this.loadTopic()
    }
  },
  methods: {
    loadTopic() {
      store.fetchTopic(this.$route.params.id).then(topic => {
        this.params.title = topic.title
        this.topic = topic
        this.$emit('updateHead')
      })
    }
  },
  head: {
    title() {
      return {
        inner: this.params.title,
        separator: '-',
        complement: config.app.name
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$tablet: 769px
$link-color: lighten(#363636, 30%)

.hero.is-medium .hero-body
  @media (min-width: $tablet)
    padding: 90px

.info
  padding: 20px 20px 0
  .container
    @media (min-width: $tablet)
      height: 60px

.topic-title
  margin-bottom: 5px !important

.topic-site
  color: $link-color !important
  border-bottom: none !important
  &:visited
    color: $link-color !important
  &:hover
    color: #4a8bfa !important
    border-bottom: 1px solid lighten(#4a8bfa, 20%) !important

.nav
  z-index: 1 !important

.logo
  background-color: #fff
  border-radius: 6px
  width: 64px
  height: 64px
  @media (min-width: $tablet)
    z-index: 2
    border: 5px solid #fff
    top: -140px
    width: 200px
    height: 200px
    box-shadow: 0 1px 2px rgba(0,0,0,.1)
  
  &__wrapper
    display: inline-block
    height: 100%
    vertical-align: middle

  img 
    display: inline-block
    vertical-align: middle
    max-height: 100%
    max-width: 100%

.media-left
  margin-right: 20px
  @media (min-width: $tablet)
    margin-right: 30px
</style>