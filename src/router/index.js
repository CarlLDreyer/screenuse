import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ScreenUse',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScreenUse.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const quiz = store.getters.isQuizFinished
  console.log('quiz', quiz)

  if (to.name === 'Results' && !quiz) next('/quiz')
  else next()
})

export default router
