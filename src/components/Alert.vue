<template lang="pug">
transition(
    mode="out-in",
    :enter-active-class="enterClass",
    leave-active-class="fadeOut"
  )
  .Alert.animated(v-if="show",@click="show = false",:class="classObject")
    span {{ message }}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: String,
    duration: {
      type: Number,
      default: 5000
    },
    autohide: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom-right'
    }
  },
  computed: {
    classObject() {
      return [
        {
          'Alert--info': this.type === 'info',
          'Alert--error': this.type === 'error',
          'Alert--log': this.type === 'log'
        },
        {
          'Alert--top-left': this.position === 'top-left',
          'Alert--top-right': this.position === 'top-right',
          'Alert--top': this.position === 'top',
          'Alert--bottom-left': this.position === 'bottom-left',
          'Alert--bottom-right': this.position === 'bottom-right',
          'Alert--bottom': this.position === 'bottom'
        }
      ]
    },
    enterClass() {
      return (this.position.indexOf('top') !== -1) ? 'fadeInDown' : 'fadeInUp'
    }
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    setTimeout(() => {
      this.show = true
      if(this.autohide) {
        setTimeout(() => { this.show = false }, this.duration)
      }
    }, 700)
  }
}
</script>

<style lang="sass">
@import '~animate.css'

.animated
  animation-duration: .35s

.Alert
  z-index: 10000
  cursor: pointer
  position: fixed
  min-width: 200px
  border-radius: 2px
  color: #fff
  font-size: 16px
  padding: 10px 25px
  max-width: 280px
  strong
    color: #fff
  &--info
    background-color: rgba(70, 135, 214, 1)//rgba(74, 139, 250, 1)
  &--error
    background-color: rgba(226, 49, 55, 1)
  &--log
    border: 1px solid #ccc
    background-color: rgba(255, 255, 255, 1)
    color: #272727
  &--top-left
    top: 20px
    left: 20px
  &--top-right
    top: 20px
    right: 20px 
  &--top
    top: 20px
    left: 50%
    margin-left: -100px
    text-align: center
  &--bottom-left
    bottom: 20px
    left: 20px
  &--bottom-right
    bottom: 20px
    right: 20px 
  &--bottom
    bottom: 20px
    left: 50%
    margin-left: -100px
    text-align: center

</style>