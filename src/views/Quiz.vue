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
        'QuizNextShit'
      ]
      return quizComponents[this.currentQuizStage]
    },
  },

  components: {
    QuizTimeEstimate
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