<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="boxes">
        <div
          class="box"
          v-for="box in exerciseHabits"
          :key="box.id"
          @click="handleClick(box)"
          :class="{selected: box.selected}"
        >
          <span class="text">{{ box.title }}</span>
        </div>
      </div>
      <svg style="display:none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <g id="check">
            <polyline points="20 6 9 17 4 12"></polyline>
          </g>
        </defs>
      </svg>
    </template>
    <template #footer>
      <PrevButton />
      <NextButton :disabled="canProceed" />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import NextButton from '@/components/NextButton'
import PrevButton from '@/components/PrevButton'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'QuizExercise',

  data () {
    return {
      title: 'Hur ser dina motionsvanor ut?',
      subtitle: 'Hur ofta, per vecka, utför du någon fysisk aktivitet som får upp din puls och/eller får dig att svettas?',
    }
  },

  methods: {
    ...mapActions([
      'setExerciseHabits',
    ]),
    handleClick (box) {
      this.setExerciseHabits(box)
    },
  },

  computed: {
    ...mapGetters([
      'exerciseHabits',
    ]),
    canProceed () {
      return !this.exerciseHabits.some(f => f.selected)
    },
  },

  components: {
    QuizLayout,
    NextButton,
    PrevButton,
  },
}
</script>

<style lang="scss" scoped>
::v-deep .quiz-body {
  align-items: center;
}
.boxes {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;

  .box {
    background: rgb(255,255,255);
    background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 19.5px 24px;
    margin: 2px;
    
    &.selected {
      color: white;
      background: rgb(202,125,232);
      background: linear-gradient(101deg, rgba(202,125,232,1) 0%, rgba(236,203,245,1) 175%);
    }

    @media (max-width: 600px) {
      font-size: 16px;
      padding: 16px;
    }
    .text {
      font-weight: 600;
      padding: 0 24px 0 0;
      user-select: none;
    }
  }
}
</style>