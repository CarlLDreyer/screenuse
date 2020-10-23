import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/screentime',
    name: 'ScreenUse',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScreenUse.vue')
  },
  {
    path: '/screentime/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  },
  {
    path: '/screentime/results',
    name: 'Results',
    component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue')
  },
  { path: '*', 
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const quiz = store.getters.isQuizFinished

  if (to.name === 'Results' && !quiz) next('/screentime/quiz')
  else next()
})

export default router
