// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//加载静态资源
// import "./assets/js/html5shiv.min.js"
// import "./assets/js/respond.min.js"
import "./assets/js/jquery-3.2.1.min.js"
import "./assets/js/bootstrap.js"
import 'vue2-animate/dist/vue2-animate.min.css'
import "./assets/css/bootstrap.css"
import "./assets/css/common.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
