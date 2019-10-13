<template lang="pug">
header.nav.header
  .container
    .nav-left
      router-link(to="/").logo.nav-item.is-brand
        img.is-hidden-mobile(:src="app.brand.logo",:alt="app.name + ' logo'")
        img.is-hidden-tablet(:src="app.brand.logoMini",:alt="app.name + ' logo'")
      search.nav-item
    .nav-right.is-hidden-mobile
      .nav-item.social-buttons
        a.button(:href="'https://github.com/' + app.github.repo", target="_blank", rel="noopener noreferrer")
          span.icon
            ion-icon(name="logo-github")
          span GitHub
        a.button(:href="'https://twitter.com/intent/tweet?text=' + app.twitter.tweet + '&url=' + app.url + '&via=' + app.twitter.username", target="_blank", rel="noopener noreferrer")
          span.icon
            ion-icon(name="logo-twitter")
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

.social-buttons
  margin-right: 6px
  .button
    color: #4a4a4a
  ion-icon
    height: 24px
    font-size: 22px
    display: flex
    align-items: center
</style>
