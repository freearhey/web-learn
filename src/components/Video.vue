<template lang="pug">
.video
  router-link.card-image(:to="{ name: 'video', params: { id: video.id } }")
    figure.image.is-16by9
      img(:src="video.thumbnails.medium.url",:alt="video.title")
      .video__duration {{ duration }}
  .video__body
    .media
      .media-content
        p: router-link.title.is-6(:to="{ name: 'video', params: { id: video.id } }") #[strong {{ video.title }}]
        p: router-link.subtitle.is-6(:to="{ name: 'channel', params: { id: video.channelId } }") {{ video.channelTitle }}
        p.subtitle.is-6 {{ viewCount }} * {{ publishedAt }}
</template>

<script>
import numeral from 'numeral'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ytDurationFormat from 'youtube-duration-format'

dayjs.extend(relativeTime)

export default {
  props: {
    video: {
      type: Object,
      default: {}
    }
  },
  computed: {
    viewCount() {
      return numeral(this.video.viewCount).format('0a') + ' views'
    },
    publishedAt() {
      return dayjs(this.video.publishedAt).fromNow()
    },
    duration() {
      return ytDurationFormat(this.video.duration)
    }
  }
}
</script>

<style lang="sass" scoped>
.video
  &--small
    max-width: 200px
  &__body
    padding: 10px 0
  &__duration
    position: absolute
    right: 5px
    bottom: 5px
    background-color: rgba(0,0,0,.9)
    color: white
    font-size: 11px
    font-weight: bold
    padding: 3px 6px
    border-radius: 2px
</style>