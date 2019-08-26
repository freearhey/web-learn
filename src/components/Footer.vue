<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p Designed by #[a(:href="'https://github.com/' + app.github.username",target="_blank",rel="noopener noreferrer") {{ app.author }}]. Licensed under #[a(href="http://opensource.org/licenses/MIT") MIT].
        p
          a.icon(:href="'https://github.com/' + app.github.repo",target="_blank",rel="noopener noreferrer",aria-label="GitHub")
            ion-icon(name="logo-github")
</template>

<script>
import config from '~config'

export default {
  computed: {
    app() {
      return config.app
    }
  }
}
</script>

<style lang="sass" scoped>
.social-buttons
  span
    margin: 0 3px  
</style>
