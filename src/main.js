// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import routeConfig from './router'
import Service from './utils/fetch'
import store from './store'
import Validate from './plugins/validate'
import Wechat from './plugins/wechat'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
//加载路由中间件
Vue.use(Element)
Vue.use(VueResource)
//日志与警告:
//Vue.config.silent = false
Vue.config.productionTip = false
// 务必在加载 Vue 之后，立即同步设置以下内容
//Vue.config.devtools = true
Object.defineProperty(Vue.prototype, '$tools', {
  get () {
    return {
    env : process.env.CODE_ENV,
	  service : Service,
	  loadingImage : LoadingImage,
	  validate: Validate,
	  wechat: Wechat
    }
  }
})
//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
})
