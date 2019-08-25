import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import(/* webpackChunkName: "index" */ '~pages/index.vue')
const SingleVideo = () => import(/* webpackChunkName: "single-video" */ '~pages/videos/single.vue')
const Search = () => import(/* webpackChunkName: "search" */ '~pages/search.vue')
const Topics = () => import(/* webpackChunkName: "topics" */ '~pages/topics/index.vue')
const SingleTopic = () => import(/* webpackChunkName: "single-topic" */ '~pages/topics/single.vue')
const TopicVideos = () => import(/* webpackChunkName: "topic-videos" */ '~pages/topics/videos.vue')
const SingleChannel = () => import(/* webpackChunkName: "single-channel" */ '~pages/channels/single.vue')
const ChannelAbout = () => import(/* webpackChunkName: "channel-about" */ '~pages/channels/about.vue')
const ChannelVideos = () => import(/* webpackChunkName: "channel-videos" */ '~pages/channels/videos.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index, meta: { scrollTop: true } },
  { path: '/video/:id', name: 'video', component: SingleVideo, meta: { scrollTop: true } },
  { path: '/search*', name: 'search', component: Search, meta: { scrollTop: true } },
  { path: '/topics', name: 'topics', component: Topics, meta: { scrollTop: true } },
  {
    path: '/topic/:id',
    name: 'topic',
    component: SingleTopic,
    meta: { scrollTop: true },
    redirect: { name: 'topic-popular-videos' },
    children: [
      {
        path: 'recent',
        name: 'topic-recent-videos',
        component: TopicVideos,
        meta: { scrollTop: false, order: 'date' }
      },
      {
        path: 'popular',
        name: 'topic-popular-videos',
        component: TopicVideos,
        meta: { scrollTop: false, order: 'viewCount' }
      }
    ]
  },
  {
    path: '/channel/:id',
    name: 'channel',
    component: SingleChannel,
    meta: { scrollTop: true },
    redirect: { name: 'channel-recent-videos' },
    children: [
      {
        path: 'about',
        name: 'channel-about',
        component: ChannelAbout,
        meta: { scrollTop: false }
      },
      {
        path: 'uploads',
        name: 'channel-recent-videos',
        component: ChannelVideos,
        meta: { scrollTop: false, order: 'date' }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if(to.meta.scrollTop || from.meta.scrollTop) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
