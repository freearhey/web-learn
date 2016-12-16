<template lang="pug">
transition(
  mode="out-in",
  enter-active-class="fadeIn",
  leave-active-class="fadeOut",
  appear
)
  .container.topic-list.animated(v-if="topics.length")
    .columns(v-for="column in chunk(topics, columns)")
      v-topic.column(
        v-for="(topic, index) in column",
        :topic="topic",
        :key="index",
        :class="[ columnSize ]"
      )
</template>

<script>
import chunk from 'lodash.chunk'
import Topic from '~components/Topic.vue'

export default {
  components: {
    'v-topic': Topic
  },
  props: {
    topics: Array,
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