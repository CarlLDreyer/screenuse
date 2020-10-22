import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoaded: false,
    currentQuizStage: 0,
    estimatedTime: 2,
    phoneBehavior: [
      {
        id: 0,
        text: 'Jag tar med telefonen på toaletten',
        selected: false,
      },
      {
        id: 1,
        text: 'När jag vaknar kollar jag telefonen direkt',
        selected: false,
      },
      {
        id: 2,
        text: 'Jag klarar mig utan telefonen en hel dag',
        selected: false,
      },
      {
        id: 3,
        text: 'Jag får panik utan telefonen',
        selected: false,
      },
      {
        id: 4,
        text: 'Jag lär mig nya saker med telefonen',
        selected: false,
      },
      {
        id: 5,
        text: 'Inget av ovanstående',
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
        imgSrc: '/img/usage/socialamedier.png',
        title: 'Sociala medier',
      },
      {
        id: 1,
        imgSrc: '/img/usage/spel.png',
        title: 'Mobilspel',
      },
      {
        id: 2,
        imgSrc: '/img/usage/kommunikation.png',
        title: 'Kommunikation',
      },
      {
        id: 3,
        imgSrc: '/img/usage/search.png',
        title: 'Söka information',
      },
      {
        id: 4,
        imgSrc: '/img/usage/music.png',
        title: 'Lyssna på musik',
      },
      {
        id: 5,
        imgSrc: '/img/usage/map.png',
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
    actualHoursPerDay: 0,
    isQuizFinished: false,
    resultData: [
      {
        id: 0,
        value: 0,
        desc: 'Dagar / år',
      },
      {
        id: 1,
        value: 0,
        desc: 'Timmar / år',
      },
      {
        id: 2,
        value: 0,
        desc: 'Timmar / månad',
      },
      {
        id: 3,
        value: 0,
        desc: 'Timmar / vecka',
      },
    ],
    currentResultStage: 0,
    yearBoxes: [
      { id: 0, type: 'sleep' }, { id: 1, type: 'sleep' }, { id: 2, type: 'sleep' }, { id: 3, type: 'sleep' }, { id: 4, type: 'sleep' },
      { id: 6, type: 'sleep' }, { id: 7, type: 'sleep' }, { id: 8, type: 'sleep' }, { id: 9, type: 'sleep' }, { id: 10, type: 'sleep' },
      { id: 11, type: 'sleep' }, { id: 12, type: 'sleep' }, { id: 13, type: 'sleep' }, { id: 14, type: 'sleep' }, { id: 15, type: 'sleep' },
      { id: 16, type: 'sleep' }, { id: 17, type: 'sleep' }, { id: 18, type: 'sleep' }, { id: 19, type: 'sleep' }, { id: 20, type: 'sleep' },
      { id: 21, type: 'sleep' }, { id: 22, type: 'sleep' }, { id: 23, type: 'work' }, { id: 24, type: 'work' }, { id: 25, type: 'work' },
      { id: 26, type: 'work' }, { id: 27, type: 'work' }, { id: 28, type: 'work' }, { id: 29, type: 'work' }, { id: 30, type: 'work' },
      { id: 31, type: 'work' }, { id: 32, type: 'work' }, { id: 33, type: 'work' }, { id: 34, type: 'work' }, { id: 35, type: 'work' },
      { id: 36, type: 'year' }, { id: 37, type: 'year' }, { id: 38, type: 'year' }, { id: 39, type: 'year' }, { id: 40, type: 'year' },
      { id: 41, type: 'year' }, { id: 42, type: 'year' }, { id: 43, type: 'year' }, { id: 44, type: 'year' }, { id: 45, type: 'year' },
      { id: 46, type: 'year' }, { id: 47, type: 'year' }, { id: 48, type: 'year' }, { id: 49, type: 'year' }, { id: 50, type: 'year' },
      { id: 51, type: 'year' }, { id: 52, type: 'year' }, { id: 53, type: 'year' }, { id: 54, type: 'year' }, { id: 55, type: 'year' },
      { id: 56, type: 'year' }, { id: 57, type: 'year' }, { id: 58, type: 'year' }, { id: 59, type: 'year' }, { id: 60, type: 'year' },
      { id: 61, type: 'year' }, { id: 62, type: 'year' }, { id: 63, type: 'year' }, { id: 64, type: 'year' }, { id: 65, type: 'year' },
      { id: 66, type: 'year' }, { id: 67, type: 'year' }, { id: 68, type: 'year' }, { id: 69, type: 'year' }, { id: 70, type: 'year' },
      { id: 71, type: 'year' }, { id: 72, type: 'year' }, { id: 73, type: 'year' }, { id: 74, type: 'year' }, { id: 75, type: 'year' },
      { id: 76, type: 'year' }, { id: 77, type: 'year' }, { id: 78, type: 'year' }, { id: 79, type: 'year' }, { id: 80, type: 'year' },
      { id: 81, type: 'year' }, { id: 82, type: 'year' }, { id: 83, type: 'year' }, { id: 84, type: 'year' }, { id: 85, type: 'year' },
    ],
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
    setQuizFinished (state, isQuizFinished) {
      state.isQuizFinished = isQuizFinished
      state.actualHoursPerDay = parseFloat(state.actualHours) + parseFloat(state.actualMinutes / 60)
    },
    setResultsData (state) {
      state.resultData[0].value = Math.round((state.actualHoursPerDay * 365) / 24)
      state.resultData[1].value = Math.round(state.actualHoursPerDay * 365)
      state.resultData[2].value = Math.round((state.actualHoursPerDay * 365) / 12)
      state.resultData[3].value = Math.round(state.actualHoursPerDay * 7) 
    },
    nextResultStage (state) {
      state.currentResultStage++
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
    isQuizFinished: state => state.isQuizFinished,
    daysPerYear: state => state.resultData.daysPerYear,
    hoursPerYear: state => state.resultData.hoursPerYear,
    hoursPerMonth: state => state.resultData.hoursPerMonth,
    hoursPerWeek: state => state.resultData.hoursPerWeek,
    resultData: state => state.resultData,
    currentResultStage: state => state.currentResultStage,
    yearBoxes: state => state.yearBoxes,
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
    setQuizFinished ({commit}, isQuizFinished) {
      commit('setQuizFinished', isQuizFinished)
      commit('setResultsData')
    },
    nextResultStage ({commit}) {
      commit('nextResultStage')
    },
  },
})
