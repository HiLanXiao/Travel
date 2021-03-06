// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 它会帮你去匹配后缀如：App.vue
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)

/* eslint-disable no-new */
// 根实例，挂载到index.html上的id=app的div元素
new Vue({
  el: '#app',
  router,

  // ES6写法，等于components: { App: App }
  components: { App },

  // 渲染App组件
  template: '<App/>'
})
