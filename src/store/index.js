import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoaded: false,
    currentQuizStage: 0,
    estimatedTime: 2,
    phoneBehavior: [
      {
        id: 0,
        text: 'Den är min bästa vän',
        selected: false,
      },
      {
        id: 1,
        text: 'Jag känner mig inte hel utan den',
        selected: false,
      },
      {
        id: 2,
        text: 'När jag vaknar kollar jag telefonen direkt',
        selected: false,
      },
      {
        id: 3,
        text: 'Jag klarar mig utan telefonen en hel dag',
        selected: false,
      },
      {
        id: 4,
        text: 'Ligger den inte i fickan är paniken framme',
        selected: false,
      },
      {
        id: 5,
        text: 'Jag får panik utan telefonen',
        selected: false,
      },
      {
        id: 6,
        text: 'Jag lär mig nya saker med telefonen',
        selected: false,
      },
      {
        id: 7,
        text: 'Jag tar med telefonen på toaletten',
        selected: false,
      },
    ],
    phoneWellbeing: [
      {
        id: 0,
        imgSrc: '/img/emoji/glad.svg',
        title: 'Glad',
        selected: false,
      },
      {
        id: 1,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Uttråkad',
        selected: false,
      },
      {
        id: 2,
        imgSrc: '/img/emoji/ledsen.svg',
        title: 'Ledsen',
        selected: false,
      },
      {
        id: 3,
        imgSrc: '/img/emoji/stressad.svg',
        title: 'Stressad',
        selected: false,
      },
      {
        id: 4,
        imgSrc: '/img/emoji/arg.svg',
        title: 'Arg',
        selected: false,
      },
      {
        id: 5,
        imgSrc: '/img/emoji/exalterad.svg',
        title: 'Exalterad',
        selected: false,
      },
    ],
    phoneUsage: [
      {
        id: 0,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Sociala medier',
      },
      {
        id: 1,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Mobilspel',
      },
      {
        id: 2,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Kommunikation',
      },
      {
        id: 3,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Söka information',
      },
      {
        id: 4,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Lyssna på musik',
      },
      {
        id: 5,
        imgSrc: '/img/emoji/uttrakad.svg',
        title: 'Övrigt.. Gps/kartor/annat',
      },
    ],
    exerciseHabits: [
      {
        id: 0,
        title: 'Aldrig',
        selected: false,
      },
      {
        id: 1,
        title: 'Mindre än 1 gång i veckan',
        selected: false,
      },
      {
        id: 2,
        title: '1 gång i veckan',
        selected: false,
      },
      {
        id: 3,
        title: '2-3 gånger i veckan',
        selected: false,
      },
      {
        id: 4,
        title: '4-5 gånger i veckan',
        selected: false,
      },
      {
        id: 5,
        title: 'Nästan varje dag',
        selected: false,
      },
    ],
    actualHours: '',
    actualMinutes: '',
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
    },
    setPhoneBehaviorSelected (state, checkbox) {
      const clickedBox = state.phoneBehavior.filter(box => box.id === checkbox.id)
      Object.assign(clickedBox, checkbox);
    },
    setPhoneWellbeing (state, card) {
      const clickedCard = state.phoneWellbeing.filter(c => c.id === card.id)
      Object.assign(clickedCard, card)
    },
    setPhoneUsage (state, phoneUsage) {
      state.phoneUsage = phoneUsage
    },
    setExerciseHabits (state, box) {
      state.exerciseHabits.forEach(habit => habit.selected = false)
      box.selected = true
      const clickedBox = state.exerciseHabits.filter(b => b.id === box.id)
      Object.assign(clickedBox, box)
    },
    setActualHours (state, actualHours) {
      state.actualHours = actualHours
    },
    setActualMinutes (state, actualMinutes) {
      state.actualMinutes = actualMinutes
    },
  },
  getters: {
    isLoaded: state => state.isLoaded,
    currentQuizStage: state => state.currentQuizStage,
    estimatedTime: state => state.estimatedTime,
    phoneBehavior: state => state.phoneBehavior,
    phoneWellbeing: state => state.phoneWellbeing,
    phoneUsage: state => state.phoneUsage,
    exerciseHabits: state => state.exerciseHabits,
    actualHours: state => state.actualHours,
    actualMinutes: state => state.actualMinutes,
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
    },
    setPhoneBehaviorSelected ({commit}, phoneBehavior) {
      commit('setPhoneBehaviorSelected', phoneBehavior)
    },
    setPhoneWellbeing ({commit}, phoneWellbeing) {
      commit('setPhoneWellbeing', phoneWellbeing)
    },
    setPhoneUsage ({commit}, phoneUsage) {
      commit('setPhoneUsage', phoneUsage)
    },
    setExerciseHabits ({commit}, exerciseHabits) {
      commit('setExerciseHabits', exerciseHabits)
    },
    setActualHours ({commit}, actualHours) {
      commit('setActualHours', actualHours)
    },
    setActualMinutes ({commit}, actualMinutes) {
      commit('setActualMinutes', actualMinutes)
    },
  },
})
