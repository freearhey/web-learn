<template lang="pug">
.player(:style="style")
  .player__wrapper
    iframe(:src="src",frameborder="0",allowfullscreen)
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'https://www.youtube.com/embed/$id?$params'
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src() {
      return this.baseUrl.replace('$id', this.id).replace('$params', this.getParams())
    },
    style() {
      const width = (this.width) ? 'width:' + this.width + 'px;' : ''
      const height = (this.height) ? 'height:' + this.height + 'px;' : ''

      return width + height
    },
    settings() {
      return {
        autoplay: this.autoplay
      }
    }
  },
  methods: {
    getParams: function() {
      let str = ''
      for(const key in this.settings) {
        if(str !== '') {
          str += '&'
        }
        str += key + '=' + encodeURIComponent(this.settings[key])
      }
      return str
    }
  }
}
</script>

<style lang="sass" scoped>
.player
  margin: 0 auto
  max-width: 100vw
  @media screen and (min-width: 769px)
    max-width: 64vw
  &__wrapper
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden
  iframe
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
</style>