// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import '../static/css/index.css' /*引入公共样式*/

import Element from 'element-ui'
import * as echarts from "echarts";
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

