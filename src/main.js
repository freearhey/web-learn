import '~assets/sass/style.sass'
import Vue from 'vue'
import App from '~/App.vue'
import router from '~/router'
import VueFilters from 'vue2-filters'
import VueProgressBar from 'vue-progressbar'
import VueInfiniteScroll from 'vue-infinite-scroll'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(VueFilters)
Vue.use(VueInfiniteScroll)
Vue.use(VueProgressBar, {
  color: 'rgb(74, 139, 250)',
  failedColor: 'rgb(205, 33, 13)',
  height: '3px'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
