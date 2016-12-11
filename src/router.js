import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from './views/HomeView.vue'
import VideoView from './views/VideoView.vue'
import SearchView from './views/SearchView.vue'
import TopicView from './views/TopicView.vue'
import TopicsView from './views/TopicsView.vue'
import TopicVideosView from './views/TopicVideosView.vue'
import ChannelView from './views/ChannelView.vue'
import ChannelVideosView from './views/ChannelVideosView.vue'
import ChannelAboutView from './views/ChannelAboutView.vue'

Vue.use(VueRouter)

let routes = [
  { path: '/', component: HomeView, meta: { scrollTop: true } },
  { path: '/topics', name: 'topics', component: TopicsView, meta: { scrollTop: true } },
  { path: '/topic/:id', name: 'topic', component: TopicView, meta: { scrollTop: true }, redirect: { name: 'topic-popular-videos' },
    children: [
      {
        path: 'recent',
        name: 'topic-recent-videos',
        component: TopicVideosView,
        meta: { scrollTop: false, order: 'date' }
      },
      {
        path: 'popular',
        name: 'topic-popular-videos',
        component: TopicVideosView,
        meta: { scrollTop: false, order: 'viewCount' }
      }
    ]
  },
  { path: '/channel/:id', name: 'channel', component: ChannelView, meta: { scrollTop: true }, redirect: { name: 'channel-recent-videos' },
    children: [
      {
        path: 'about',
        name: 'channel-about',
        component: ChannelAboutView,
        meta: { scrollTop: false }
      },
      {
        path: 'uploads',
        name: 'channel-recent-videos',
        component: ChannelVideosView,
        meta: { scrollTop: false, order: 'date' }
      }
    ] 
  },
  { path: '/video/:id', name: 'video', component: VideoView, meta: { scrollTop: true } },
  { path: '/search*', name: 'search', component: SearchView, meta: { scrollTop: true } },
]

let router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.meta.scrollTop || from.meta.scrollTop) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router