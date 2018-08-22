import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
  ]
})
