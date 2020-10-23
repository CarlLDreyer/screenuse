import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/screentime',
    name: 'ScreenUse',
    component: () => import(/* webpackChunkName: "screenuse" */ '../views/ScreenUse.vue'),
    meta: {title: 'Screen Time'}
  },
  {
    path: '/screentime/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue'),
    meta: {title: 'Screen Time | Quiz'}
  },
  {
    path: '/screentime/results',
    name: 'Results',
    component: () => import(/* webpackChunkName: "results" */ '../views/Results.vue'),
    meta: {title: 'How did it go?'}
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
  if (to.meta.title) document.title = to.meta.title
  if (to.name === 'Results' && !quiz) next('/screentime/quiz')
  else next()
})

export default router
