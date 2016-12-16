<template lang="pug">
section.section
  .container
    .content
      p.title.is-5(v-if="channel.description") #[strong About]
      ul.channel-stats
        li {{ subscriberCount }} subscribers
        li {{ viewCount }} views
        li Joined {{ publishedAt }}
      p(v-html="channel.description")
</template>

<script>
import numeral from 'numeral'
import moment from 'moment'
import store from '~store'

export default {
  data() {
    return {
      channel: store.currentChannel
    }
  },
  computed: {
    subscriberCount() {
      return numeral(this.channel.subscriberCount).format('0,0')
    },
    viewCount() {
      return numeral(this.channel.viewCount).format('0,0')
    },
    publishedAt() {
      return moment(this.channel.publishedAt).format('MMM D, YYYY')
    }
  },
  created() {
    this.$Progress.finish()
  }
}
</script>

<style lang="sass">
.channel-title
  // margin-bottom: 0 !important
.channel-stats
  list-style: none !important
  margin-left: 0 !important
  li
    font-weight: 500
    color: #4a4a4a
</style>