<template lang="pug">
div
  router-link.topic-link(:to="{ name: 'topic', params: { id: topic.id } }")
    .card
      .card-image
        .hero.is-small(:style="{ backgroundColor: topic.color }")
          .hero-body
      .card__content.info
        .container
          .media
            .media-left
              .image.logo
                span.logo__wrapper
                img(:src="topic.logo")
            .media-content
              .content
                .title.is-5 #[strong {{ topic.title }}]
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="sass" scoped>
.topic-link:hover
  .card
    box-shadow: 0px 2px 15px rgba(0,0,0,.2)

.card
  border-radius: 3px
  overflow: hidden
  width: 100%

.info
  padding: 0 20px

  .content
    padding: 8px 0

  .logo
    background-color: #fff
    border-radius: 6px
    z-index: 2
    border: 5px solid #fff
    top: -37px
    width: 70px
    height: 70px
    box-shadow: 0 1px 2px rgba(0,0,0,.1)
    
    &__wrapper
      display: inline-block
      height: 100%
      vertical-align: middle

    img 
      display: inline-block
      vertical-align: middle
      max-height: 100%
      max-width: 100%
</style>