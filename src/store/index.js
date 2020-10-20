import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    currentQuizStage: 0,
    estimatedTime: 2,
  },
  mutations: {
    setIsLoaded (state, isLoaded) {
      state.isLoaded = isLoaded
    },
    nextQuizStage (state) {
      state.currentQuizStage++
    },
    previousQuizStage (state) {
      if (state.currentQuizStage !== 0) state.currentQuizStage--
    },
    setEstimatedTime (state, estimatedTime) {
      state.estimatedTime = estimatedTime
    }
  },
  getters: {
    isLoaded: state => state.isLoaded,
    currentQuizStage: state => state.currentQuizStage,
    estimatedTime: state => state.estimatedTime,
  },
  actions: {
    setLoaded ({commit}, isLoaded) {
      commit('setIsLoaded', isLoaded)
    },
    nextQuizStage ({commit}) {
      commit('nextQuizStage')
    },
    previousQuizStage ({commit}) {
      commit('previousQuizStage')
    },
    setEstimatedTime ({commit}, estimatedTime) {
      commit('setEstimatedTime', estimatedTime)
    }
  },
})
