import Vue from 'vue'
import Router from 'vue-router'
// @指的是src目录
import Home from '@/pages/home/Home'

Vue.use(Router)

// 当用户访问根路径时，我给用户展示的是Home组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
