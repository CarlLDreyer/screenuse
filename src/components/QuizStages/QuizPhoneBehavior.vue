<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="checkboxes">
        <div
          class="checkbox"
          v-for="box in phoneBehavior"
          :key="box.id"
          @click="handleClick(box)"
          :class="{selected: box.selected}"
        >
          <span class="text">{{ box.text }}</span>
          <span class="active-box" v-if="box.selected">
            <svg viewBox="0 0 24 24" class="check"><use xlink:href="#check" /></svg>
          </span>
          <span class="empty-box" v-else />
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
  name: 'QuizPhoneBehvior',

  data () {
    return {
      title: 'Hur använder du din telefon?',
      subtitle: 'Välj ett eller flera påstående som stämmer överens med dig.',
    }
  },

  methods: {
    ...mapActions([
      'setPhoneBehaviorSelected',
    ]),
    handleClick (box) {
      box.selected = !box.selected
      this.setPhoneBehaviorSelected(box)
    },
  },

  computed: {
    ...mapGetters([
      'phoneBehavior',
    ]),
    canProceed () {
      return !this.phoneBehavior.some(f => f.selected)
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
::v-deep .quiz-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkboxes {
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  .checkbox {
    background: rgb(255,255,255);
    background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    font-size: 18px;
    padding: 20px 24px;
    margin: 4px;
    color: #06071b;
    
    &.selected {
      color: white;
      background: rgb(202,125,232);
      background: linear-gradient(101deg, rgba(202,125,232,1) 0%, rgba(236,203,245,1) 175%);
    }

    @media (max-width: 780px) {
      font-size: 18px;
      padding: 16px 16px;
    }
    .text {
      padding: 0 24px 0 0;
      user-select: none;
    }
    .empty-box, .active-box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }
    .empty-box {
      border: 2px solid #ccd8e9;
    }
    .active-box {
      background: #b06eca;
      border: 2px solid #b06eca;
      svg {
        height: 16px;
        width: 16px;
        fill: none;
        stroke: white;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }
}
</style>