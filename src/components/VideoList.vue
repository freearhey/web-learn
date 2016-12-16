<template lang="pug">
transition(
  mode="out-in",
  enter-active-class="fadeIn",
  leave-active-class="fadeOut",
  appear
)
  .container.video-list.animated(v-if="videos.length")
    .columns(v-for="column in chunk(videos, columns)")
      v-video.column(
        v-for="(video, index) in column",
        :video="video",
        :key="index",
        :class="[ columnSize ]"
      )
</template>

<script>
import chunk from 'lodash.chunk'
import Video from '~components/Video.vue'

export default {
  components: {
    'v-video': Video
  },
  props: {
    videos: Array,
    columns: {
      type: Number,
      default: 4
    }
  },
  computed: {
    columnSize() {
      return 'is-' + Math.floor(12 / this.columns)
    }
  },
  methods: {
    chunk
  }
}
</script>

<style lang="sass" scoped>
@import '~animate.css'

.animated
  animation-duration: .25s
</style>