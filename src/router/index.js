import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page404 from '@/components/404'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/xoac',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: '404',
      component: Page404
    },
    {
      path: '*',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
