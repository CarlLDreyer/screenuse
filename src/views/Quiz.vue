<template>
  <div class="quiz-wrapper">
    <div id="wave" />
    <div class="notifications" />
    <div class="quiz">
      <Component :is="quizStage" />
    </div> 
  </div>
</template>

<script>
import QuizTimeEstimate from '@/components/QuizStages/QuizTimeEstimate'
import QuizPhoneBehavior from '@/components/QuizStages/QuizPhoneBehavior'
import QuizWellbeing from '@/components/QuizStages/QuizWellbeing'
import QuizPhoneUsage from '@/components/QuizStages/QuizPhoneUsage'
import QuizExercise from '@/components/QuizStages/QuizExercise'
import QuizActualTime from '@/components/QuizStages/QuizActualTime'
import { mapGetters } from 'vuex'
export default {
  name: 'Quiz',

  computed: {
    ...mapGetters([
      'currentQuizStage',
    ]),
    quizStage () {
      const quizComponents = [
        'QuizTimeEstimate',
        'QuizPhoneBehavior',
        'QuizWellbeing',
        'QuizPhoneUsage',
        'QuizExercise',
        'QuizActualTime',
      ]
      return quizComponents[this.currentQuizStage]
    },
  },

  watch: {
    currentQuizStage () {
      window.scrollTo(0,0)
    }
  },

  components: {
    QuizTimeEstimate,
    QuizPhoneBehavior,
    QuizWellbeing,
    QuizPhoneUsage,
    QuizExercise,
    QuizActualTime,
  },
}
</script>

<style lang="scss" scoped>
.quiz-wrapper {
  height: 100%;
  .notifications {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/img/notifications.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    z-index: 0;

    @media (max-width: 1024px) {
      display: none;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .quiz {
    height: 100%;
    position: relative;
    z-index: 2021;
  }
}
</style>