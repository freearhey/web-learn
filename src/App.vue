<template lang="pug">
  div#app
    v-header
    v-nav
    router-view
    vue-progress-bar
    div(v-if="errors.length")
      alert(v-for="error, i in errors",:key="i",type="info",:message="error",position="bottom-right",autohide) 
    v-footer
</template>

<script>
const Header = () => import(/* webpackChunkName: "header" */ '~components/Header.vue')
const Footer = () => import(/* webpackChunkName: "footer" */ '~components/Footer.vue')
const Nav = () => import(/* webpackChunkName: "nav" */ '~components/Nav.vue')
const Alert = () => import(/* webpackChunkName: "alert" */ '~components/Alert.vue')
import events from '~events'
import config from '~config'

export default {
  data() {
    return {
      errors: []
    }
  },
  computed: {
    app() {
      return config.app
    }
  },
  components: {
    'v-header': Header,
    'v-nav': Nav,
    'v-footer': Footer,
    'alert': Alert
  },
  created() {
    events.$on('api.error', (err) => {
      this.errors.push(err.name + ': ' + err.message)
    })
  },
  head: {
    meta() {
      return [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@' + this.app.twitter.username },
        { name: 'twitter:site', content: '@' + this.app.twitter.username },
        { name: 'twitter:title', content: this.app.title },
        { name: 'twitter:description', content: this.app.description },
        { name: 'twitter:image', content: this.app.url + this.app.logo.share },
        { property: 'og:url', content: this.app.url },
        { property: 'og:type', content: 'site' },
        { property: 'og:title', content: this.app.title },
        { property: 'og:image', content: this.app.url + this.app.logo.share },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:description', content: this.app.description }
      ]
    }
  }
}
</script>

<style lang="sass">
main
  min-height: 80vh
  margin-top: 110px
</style>
