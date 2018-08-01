<template lang="pug">
nav.nav.has-shadow
  .container
    .nav-title
      p Popular
      p topics
    .nav-item
      router-link.button.is-white(
        v-for="topic in topics",
        :to="{ name: 'topic', params: { id: topic.id } }"
      ) #[strong {{ topic.title }}]
    .nav-item
      router-link.link(:to="{ name: 'topics' }") #[strong Show all..]
</template>

<script>
import store from '~store'

export default {
  data() {
    return {
      topics: [],
      limit: 12
    }
  },
  created() {
    this.loadTopics()
  },
  methods: {
    loadTopics() {
      store.fetchTopics({ order: 'score', limit: this.limit }).then(topics => {
        this.topics = topics
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed !important
  top: 60px
  left: 0
  right: 0
  z-index: 3
  strong
    font-weight: 500

.nav-title
  color: #bbb
  font-weight: 700
  text-transform: uppercase
  line-height: 1
  margin: 12px 0
  text-align: left
  border-right: 1px solid #ddd
  padding-right: 10px
  padding-left: 10px

.link
  &:hover
    text-decoration: underline
</style>
