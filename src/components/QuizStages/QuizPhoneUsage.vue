<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <!-- <div class="ratings">
        <span class="rank" v-for="item in phoneUsage" :key="item.id">{{index}}</span>
      </div> -->
      <draggable class="drag-list" v-model="usageModel" group="people">
        <div class="drag-card" v-for="item in phoneUsage" :key="item.id">
          <span class="text">{{ item.title }}</span>
          <span class="drag-indicator">
              <svg viewBox="0 0 24 24"><use xlink:href="#dragIndicator" /></svg>
            </span>
        </div>
      </draggable>
      <svg style="display:none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <g id="dragIndicator">
            <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </g>
        </defs>
      </svg>
    </template>
    <template #footer>
      <PrevButton />
      <NextButton />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import NextButton from '@/components/NextButton'
import PrevButton from '@/components/PrevButton'
import draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'QuizPhoneUsage',

  data () {
    return {
      title: 'Vad använder du din telefon mest till?',
      subtitle: 'Dra det exempel som du använder mest frekvent högst upp i listan.',
      myArray: ['hello', 'wat', 'is', 'this'],
      index: 1,
    }
  },

  methods: {
    ...mapActions([
      'setPhoneUsage',
    ]),
  },

  computed: {
    ...mapGetters([
      'phoneUsage',
    ]),
    usageModel: {
      get () {
        return this.phoneUsage
      },
      set (value) {
        this.setPhoneUsage(value)
      },
    },
  },

  components: {
    QuizLayout,
    NextButton,
    PrevButton,
    draggable,
  },
}
</script>

<style lang="scss" scoped>
::v-deep .quiz-container {
  position: relative;
  max-width: 600px;
}
.ratings {
  left: -48px;
  display: flex;
  flex-direction: column;
  .rank {
    font-size: 18px;
    font-weight: 600;
    padding: 20px 24px;
    margin: 12px 4px;
  }
}
.drag-list {
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  .drag-card {
    background: rgb(255,255,255);
    background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    font-size: 18px;
    padding: 14px 24px;
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
    .rank {
      left: -32px;
      font-size: 18px;
      font-weight: 600;
    }
    .text {
      font-weight: 600;
      padding: 0 24px 0 0;
      user-select: none;
    }
    .drag-indicator {
      height: auto;
      width: 36px;
      svg {
        height: 100%;
        width: 100%;
        fill: #ccd8e9;
      }
    }
  }
}
</style>