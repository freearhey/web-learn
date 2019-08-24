import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: require('~pages/index.vue').default, meta: { scrollTop: true } },
  { path: '/video/:id', name: 'video', component: require('~pages/videos/single.vue').default, meta: { scrollTop: true } },
  { path: '/search*', name: 'search', component: require('~pages/search.vue').default, meta: { scrollTop: true } },
  { path: '/topics', name: 'topics', component: require('~pages/topics/index.vue').default, meta: { scrollTop: true } },
  {
    path: '/topic/:id',
    name: 'topic',
    component: require('~pages/topics/single.vue').default,
    meta: { scrollTop: true },
    redirect: { name: 'topic-popular-videos' },
    children: [
      {
        path: 'recent',
        name: 'topic-recent-videos',
        component: require('~pages/topics/videos.vue').default,
        meta: { scrollTop: false, order: 'date' }
      },
      {
        path: 'popular',
        name: 'topic-popular-videos',
        component: require('~pages/topics/videos.vue').default,
        meta: { scrollTop: false, order: 'viewCount' }
      }
    ]
  },
  {
    path: '/channel/:id',
    name: 'channel',
    component: require('~pages/channels/single.vue').default,
    meta: { scrollTop: true },
    redirect: { name: 'channel-recent-videos' },
    children: [
      {
        path: 'about',
        name: 'channel-about',
        component: require('~pages/channels/about.vue').default,
        meta: { scrollTop: false }
      },
      {
        path: 'uploads',
        name: 'channel-recent-videos',
        component: require('~pages/channels/videos.vue').default,
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
