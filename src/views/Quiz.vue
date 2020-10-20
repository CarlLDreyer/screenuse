<template>
  <div class="quiz">
    <div id="wave" />
    <div class="quiz-body">
      <Component :is="quizStage"></Component>
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
      'isLoaded',
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
.quiz {
  height: 100%;
  .quiz-body {
    height: 100%;
    position: relative;
    z-index: 2021;
  }
}
</style>