<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="actual-time-wrapper">
        <div class="actual-time">
          <div class="hours-wrapper">
            <span class="text">Timmar</span>
            <div class="hours">
              <input type="tel" v-mask="'##'" v-model="hoursModel" placeholder="0" />
            </div>
          </div>
          <span class="colon">:</span>
          <div class="minutes-wrapper">
            <span class="text">Minuter</span>
            <div class="minutes">
              <input type="tel" v-mask="'##'" v-model="minutesModel" placeholder="0" />
            </div>
          </div>
        </div>
        <span class="guide">{{ guide }}</span>
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
    hoursModel (newValue, oldValue) {
      if (newValue > 24 && oldValue < 24) this.setActualHours(oldValue)
    },
    minutesModel (newValue, oldValue) {
      if (newValue > 59 && oldValue < 59) this.setActualMinutes(oldValue)
    },
  },

  data () {
    return {
      title: 'Vad är din faktiska skärmtid?',
      subtitle: 'Skriv in ditt dagliga genomsnitt per dag från förra veckan',
      guide: 'Hur hittar jag min skärmtid?'
    }
  },

  methods: {
    ...mapActions([
      'setActualHours',
      'setActualMinutes',
    ]),
    handleKeypress (evt) {
      const value = evt.value
      console.log('key pressed', value)
    }
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
        this.setActualMinutes(value)
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
::v-deep .quiz-body {
  align-items: center;
}
.actual-time {
  display: flex;
  width: 100%;
  max-width: 400px;
  position: relative;
  align-items: center;
  margin: 0 0 24px 0;

  @media (max-width: 600px) {
    max-width: 320px;
  }
  .hours-wrapper, .minutes-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .text {
      font-weight: 600;
      font-size: 18px;
    }
  }
  .colon {
    font-size: 80px;
    font-weight: 600;
    padding: 0 16px;

    @media (max-width: 600px) {
      font-size: 54px;
    }
  }
  .hours, .minutes {
    display: flex;
    justify-content: center;
    align-items: baseline;
    background: rgb(255,255,255);
    background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
    position: relative;
    padding: 32px;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
    @media (max-width: 600px) {
      padding: 8px;
    }
  }
  input[type=tel] {
    display: flex;
    font-size: 80px;
    outline: none;
    background: none;
    border: none;
    box-sizing: border-box;
    width: 100%;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 54px;
    }
  }
}
.guide {
  cursor: pointer;
  font-weight: 600;
  color: #8F8F8F;
  text-decoration: underline;
  display: table-cell;
  margin-right: auto;
}
</style>