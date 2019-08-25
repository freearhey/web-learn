<template lang="pug">
main
  section.section
    .container
      .level
        .level-left
          h2.title.is-4 Topics
        .level-right
          .control
            v-select(
              @option-selected="changeOrder",
              :options="orderOptions",
              :default="order"
            )
      topic-list(:topics="topics")
</template>

<script>
import store from '~store'
import config from '~config'
import TopicList from '~components/TopicList.vue'
import vSelect from '~components/Select.vue'

export default {
  components: { TopicList, vSelect },
  data() {
    return {
      topics: [],
      orderOptions: [
        { title: 'By title', value: 'title' },
        { title: 'By popularity', value: 'score' }
      ],
      order: 'title'
    }
  },
  head: {
    title() {
      return {
        inner: 'Topics',
        separator: '-',
        complement: config.app.name
      }
    }
  },
  created() {
    this.loadTopics()
  },
  watch: {
    order() {
      this.topics = []
      this.loadTopics()
    }
  },
  methods: {
    loadTopics() {
      store.fetchTopics({ order: this.order }).then(topics => {
        this.topics = topics
      })
    },
    changeOrder(order) {
      this.order = order
    }
  }
}
</script>