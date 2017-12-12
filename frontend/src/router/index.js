import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import test from '@/components/test'
import ContentPage from '@/components/ContentPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/id',
      name: 'ContentPage',
      component: ContentPage
    },
    {
      path: '/',
      name: 'idiot',
      component: test
    }
  ]
})
