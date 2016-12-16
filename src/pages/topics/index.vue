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
import Select from '~components/Select.vue'

export default {
  components: { TopicList, 'v-select': Select },
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
  created() {
    document.title = 'Topics - ' + config.app.name
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