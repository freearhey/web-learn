<template lang="pug">
.Typeahead
  .control.has-icon.is-fullwidth
    input.input.is-medium.is-expanded(
      type="text",
      autocomplete="off",
      :placeholder="placeholder",
      v-model="query",
      @keyup.enter="hit",
      @keyup.esc="reset",
      @keyup.down="down",
      @keyup.up="up"
      @keyup="update"
    )
    i.fa.ion-ios-search-strong
  .Typeahead__list.panel(v-if="hasItems && show")
    a.Typeahead__list-item(
      v-for="(item, index) in items",
      :key="index",
      :class="{ 'Typeahead__list-item--current': isCurrent(index) }",
      @mousemove="setCurrent(index)",
      @click.prevent="hit"
    ) {{ item }}
</template>

<script>
import debounce from 'debounce'

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    placeholder: String
  },
  data() {
    return {
      current: -1,
      query: '',
      show: false
    }
  },
  computed: {
    selected() {
      if(this.current !== -1) {
        return this.items[this.current]
      }

      return this.query
    },
    hasItems () {
      return this.items.length > 0
    },
  },
  methods: {
    isCurrent(index) {
      return this.current == index
    },
    setCurrent(index) {
      this.current = index
    },
    hit() {
      if(this.query) {
        this.query = this.selected
        this.reset()
        this.$emit('hit', this.selected, this.current)
      }
    },
    update(e) {
      if(e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode == 8 || e.keyCode == 32) {
        console.log(this.query)
        this.show = true
        this.$emit('type', this.query)
      }
    },
    up () {
      if (this.current > 0) {
        this.current--
      } else if (this.current === -1) {
        this.current = this.items.length - 1
      } else {
        this.current = -1
      }
    },
    down() {
      if (this.current < this.items.length - 1) {
        this.current++
      } else {
        this.current = -1
      }
    },
    reset() {
      this.show = false
      this.current = -1
    }
  },
  watch: {
    selected(val) {
      // console.log(val)
    }
  },
  created() {
    this.update = debounce(this.update, 300)
  }
}
</script>

<style lang="sass">
.Typeahead
  position: relative
  z-index: 5
  flex-grow: 1 !important

.Typeahead__list
  background-color: white
  position: absolute
  top: 45px
  left: 30px
  width: 80%
  text-align: left
  border-radius: 2px
  color: #0a0a0a

.control
  margin-bottom: 0 !important

.panel-block
  border-bottom: none !important

.nav-left 
  overflow: visible !important
  overflow-x: visible !important

.Typeahead__list-item
  display: block
  box-sizing: border-box
  width: 100%
  color: #4a4a4a
  padding: 7px 15px 6px 10px
  cursor: pointer

.Typeahead__list-item--current
  background-color: #eee
</style>