<template lang="pug">
header.nav.header
  .container
    .nav-left
      router-link(to="/").logo.nav-item.is-brand
        img.is-hidden-mobile(:src="app.logo.normal",:alt="app.name")
        img.is-hidden-tablet(:src="app.logo.mini",:alt="app.name")
      search.nav-item
    .nav-right.is-hidden-mobile
      .nav-item
        a.button(:href="'https://github.com/' + app.github.repo", target="_blank")
          span.icon
            i.ion-social-github
          span GitHub
        a.button(:href="'https://twitter.com/intent/tweet?text=' + app.twitter.tweet + '&url=' + app.url + '&via=' + app.twitter.username", target="_blank")
          span.icon
            i.ion-social-twitter
          span Tweet
</template>

<script>
import config from '~config'
import Search from '~components/Search.vue'

export default {
  components: { Search },
  computed: {
    app() {
      return config.app
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  min-height: 70px
  background-color: white
  position: fixed !important
  top: 0
  left: 0
  right: 0
  z-index: 4
.logo
  img
    max-height: 35px

.nav-left
  flex-basis: auto

</style>