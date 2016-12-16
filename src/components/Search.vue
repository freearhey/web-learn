<template lang="pug">
.Search
  .control.has-icon.is-fullwidth
    input.input.is-medium.is-expanded(
      type="text",
      autocomplete="off"
      placeholder="Search topics, channels, and videos",
      v-model="query",
      @keyup.enter="search"
    )
    i.fa.ion-ios-search-strong
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },

  methods: {
    search() {
      this.$router.push({ path: '/search', query: { q: this.query } })
    },
    insertQuery() {
      const query = this.$route.query.q
      if(query) {
        this.query = query
      }
    }
  },
  watch: {
    $route() {
      this.insertQuery()
    }
  },
  created() {
    this.insertQuery()
  }
}
</script>

<style lang="sass">
.Search
  flex-grow: 1 !important
</style>