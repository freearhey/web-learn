import map from 'lodash.map'
import orderBy from 'lodash.orderby'
import merge from 'lodash.merge'
import api from '~api'
import events from '~events'
import transform from '~transformers'

const store = {
  currentChannel: {}
}

/*
 * Fetch video by id
 */
store.fetchVideo = (id) => {
  return new Promise((resolve, reject) => {
    api.videos.list({ id }).then(data => {
      const video = transform.video(data.items[0])
      resolve(video)
    }).catch(err => {
      events.$emit('api.error', err)
      reject(err)
    })
  })
}

/*
 * Fetch videos
 */
store.fetchVideos = (params) => {
  return new Promise((resolve, reject) => {
    merge(params, { type: 'video' })
    api.search.list(params).then(data => {
      const nextPageToken = data.nextPageToken
      const id = map(data.items, 'id.videoId').join(',')
      api.videos.list({ id }).then(data => {
        let videos = data.items.map(transform.video)
        videos = orderBy(videos, params.order, 'desc')
        resolve({ videos, nextPageToken })
      }).catch(err => {
        events.$emit('api.error', err)
        reject(err)
      })
    }).catch(err => {
      events.$emit('api.error', err)
      reject(err)
    })
  })
}

/*
 * Fetch topic by id
 */
store.fetchTopic = (id) => {
  return new Promise((resolve, reject) => {
    api.topics.list({ id }).then(data => {
      const topic = transform.topic(data.items[0])
      resolve(topic)
    }).catch(err => {
      events.$emit('api.error', err)
      reject(err)
    })
  })
}

/*
 * Fetch all topics
 */
store.fetchTopics = (params) => {
  return new Promise((resolve, reject) => {
    api.topics.list(params).then(data => {
      const topics = data.items.map(transform.topic)
      resolve(topics)
    }).catch(err => {
      events.$emit('api.error', err)
      reject(err)
    })
  })
}

/*
 * Fetch channel by id
 */
store.fetchChannel = (id) => {
  return new Promise((resolve, reject) => {
    api.channels.list({ id }).then(data => {
      const channel = store.currentChannel = transform.channel(data.items[0])
      resolve(channel)
    }).catch(err => {
      events.$emit('api.error', err)
      reject(err)
    })
  })
}

export default store
