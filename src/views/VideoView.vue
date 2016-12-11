<template lang="pug">
main
  .hero.is-black.is-large(v-if="video")
    .hero-body.is-paddingless
      .container
        player(:id="video.id", autoplay)
  section.section(v-if="loaded")
    .container
      .media
        .media-left
          figure.image.is-48x48(v-if="video.channel")
            img.is-circle(:src="video.channel.thumbnails.default.url")
        .media-content
          .content
            h2.title.is-5: strong {{ video.title }}
            p.subtitle.is-6 
              router-link(:to="{ name: 'channel', params: { id: video.channelId } }") {{ video.channelTitle }} 
              | * {{ publishedAt }}
        .media-right
          span {{ viewCount }}
      .content.has-margintop
        p(v-html="description")
        .control.is-grouped
          .control(v-for="topic in video.topics")
            router-link.button(
              :to="{ name: 'topic', params: { id: topic.id } }",
              exact
            ) {{ topic.title }}
    div(v-for="topic in video.topics")
      topic-related-videos(:topic="topic")
    channel-recent-videos(:channel="video.channel")
</template>

<script>
import moment from 'moment' 
import numeral from 'numeral'
import Player from '../components/Player.vue'
import ChannelRecentVideos from '../components/ChannelRecentVideos.vue'
import TopicRelatedVideos from '../components/TopicRelatedVideos.vue'
import store from '../store'
import config from '../config'
import nl2br from 'nl2br'
import linkifyjs from 'linkifyjs/html'
import truncate from 'lodash.truncate'

export default {
  components: { 
    Player,
    ChannelRecentVideos,
    TopicRelatedVideos
  },
  data() {
    return {
      video: null,
      loaded: false,
      params: {
        description: 'Video'
      }
    }
  },
  computed: {
    publishedAt() {
      return 'Published on ' + moment(this.video.publishedAt).format('MMM D, YYYY')
    },
    viewCount() {
      return numeral(this.video.viewCount).format('0,0') + ' views'
    },
    description() {
      return nl2br(linkifyjs(this.video.description,false))
    }
  },
  created() {
    this.video = null
    this.loaded = false
    this.loadVideo()
  },
  watch: {
    $route() {
      this.video = null
      this.loaded = false
      this.loadVideo()
    }
  },
  methods: {
    loadVideo() {
      store.fetchVideo(this.$route.params.id).then(video => {
        document.title = video.title + ' - ' + config.app.name
        store.fetchChannel(video.channelId).then(channel => {
          video.channel = channel
          let id = video.tags.join(',')
          if(id) {
            store.fetchTopics({ id }).then(topics => {
              video.topics = topics            
              this.video = video
              this.loaded = true
              this.params.description = truncate(video.description.replace(/\r?\n|\r/g, ''), { 'length': 155, 'separator': ' ' })
              this.$emit('updateHead')
            })
          } else {
            video.topics = []            
            this.video = video
            this.loaded = true
            this.params.description = truncate(video.description.replace(/\r?\n|\r/g, ''), { 'length': 155, 'separator': ' ' })
            this.$emit('updateHead')
          }
        })
      }).catch(err => {
        this.loaded = true
      })
    }
  },
  head: {
    meta() {
      return [
        { name: 'description', content: this.params.description }
      ]
    }
  }
}
</script>