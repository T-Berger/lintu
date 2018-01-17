/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import StartMenu from '@/components/StartMenu'
import Login from '@/components/Login'
import ContentPage from '@/components/ContentPage'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'ContentPage',
      component: ContentPage
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/StartMenu',
      name: 'StartMenu',
      component: StartMenu,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('startmenu')
  else next()
})
export default router
