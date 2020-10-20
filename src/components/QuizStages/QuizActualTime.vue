<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="actual-time">
        <input type="tel" v-mask="'##'" v-model="hoursModel" placeholder="0" dir="rtl" />
        <span class="text hour">h</span>
        <input type="tel" v-mask="'##'" v-model="minutesModel" placeholder="0" dir="rtl" />
        <span class="text">min</span>
      </div>
    </template>
    <template #footer>
      <PrevButton />
      <ResultButton :disabled="canProceed" />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import PrevButton from '@/components/PrevButton'
import ResultButton from '@/components/ResultButton'
import { mapGetters, mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
export default {
  name: 'QuizActualTime',

  watch: {
    hoursModel (newHours, oldHours) {
      const newHoursInt = parseInt(newHours)
      const oldHoursInt = parseInt(oldHours)
      if (newHoursInt > 24 && oldHoursInt < 24) this.hours = oldHours
    },
    minutesModel (newMinutes, oldMinutes) {
      const newMinutesInt = parseInt(newMinutes)
      const oldMinutesInt = parseInt(oldMinutes)
      if (newMinutesInt > 60 && oldMinutesInt < 60) this.minutes = oldMinutes
    }
  },

  data () {
    return {
      title: 'Vad är din faktiska skärmtid?',
      subtitle: 'Skriv in ditt dagliga genomsnitt per dag från förra veckan',
      hours: 0,
      minutes: 0,
    }
  },

  methods: {
    ...mapActions([
      'setActualHours',
      'setActualMinutes',
    ]),
  },

  computed: {
    ...mapGetters([
      'actualHours',
      'actualMinutes',
    ]),
    hoursModel: {
      get () {
        return this.actualHours
      },
      set (value) {
        this.setActualHours(value)
      },
    },
    minutesModel: {
      get () {
        return this.actualMinutes
      },
      set (value) {
        this.setActualMinutes (value)
      }
    },
    canProceed () {
      return !(this.actualHours.length > 0 && this.actualMinutes.length > 0)
    },
  },

  components: {
    QuizLayout,
    PrevButton,
    ResultButton,
  },

  directives: {
    mask,
  },
}
</script>

<style lang="scss" scoped>
.actual-time {
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: white;
  padding: 32px 16px;
  margin: 32px 0 0 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .text {
    user-select: none;
    font-size: 54px;
    font-weight: 600;
    &.hour {
      padding-right: 32px;
    }
  }
  input[type=tel] {
    display: block;
    font-size: 80px;
    outline: none;
    background: none;
    border: none;
    max-width: 90px;
  }
}
</style>