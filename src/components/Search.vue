<template lang="pug">
.Search
  typeahead(
    :items="suggestions",
    placeholder="Search topics, channels, and videos"
    @hit="search",
    @type="fetchSuggestions"
  )
</template>

<script>
import Typeahead from '~components/Typeahead.vue'
import jsonp from 'jsonp'

export default {
  components: { Typeahead },
  data () {
    return {
      suggestions: []
    }
  },
  methods: {
    fetchSuggestions(input) {
      jsonp('https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=' + input, (err, suggestions) => {
        if (err) throw err
        this.suggestions = this.limitBy(suggestions[1], 5)
      })
    },
    search(query) {
      this.$router.push({ path: '/search', query: { q: query.trim() } })
    }
  }
}
</script>

<style lang="sass">
.Search
  position: relative
  flex-grow: 1 !important
</style>