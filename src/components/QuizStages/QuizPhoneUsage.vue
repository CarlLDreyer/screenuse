<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="phone-usage">
        <div class="ranks">
          <span v-for="(item, index) in phoneUsage" :key="item.id">{{ index+1 }}.</span>
        </div>
        <draggable class="drag-list" v-model="usageModel">
          <div class="drag-card" v-for="item in phoneUsage" :key="item.id">
            <img :src="item.imgSrc" :alt="item.id">
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
      </div>
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
::v-deep .quiz-body {
  align-items: center;
}

.phone-usage {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 540px;

  @media (max-width: 600px) {
    max-width: 360px;
  }
  .ranks {
    display: flex;
    flex-direction: column;
    > span {
      font-weight: 700;
      // padding: 18px 16px 18px 0px;
      padding: 15px 16px 15px 0;
      font-size: 24px;
      margin: 2px;

      @media (max-width: 600px) {
        font-size: 18px;
        // padding: 19.3px 16px 19.3px 0px;
        padding: 17.5px 16px 17.5px 0;
      }
    }
  }
}
.drag-list {
  display: flex;
  flex-direction: column;
  width: 100%;

  .drag-card {
    background: rgb(255,255,255);
    background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    font-size: 18px;
    padding: 4px 16px 4px 12px;
    margin: 2px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
    &.selected {
      color: white;
      background: rgb(202,125,232);
      background: linear-gradient(101deg, rgba(202,125,232,1) 0%, rgba(236,203,245,1) 175%);
    }
    img {
      height: 58px;
      width: 58px;
      user-select: none;

      @media (max-width: 600px) {
        height: 54px;
        width: 54px;
      }
    }
    .text {
      display: flex;
      flex: 1;
      font-weight: 600;
      padding: 0 0 0 8px;
      user-select: none;
    }
    .drag-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 36px;

      @media (max-width: 600px) {
        width: 24px;
      }
      svg {
        height: 100%;
        width: 100%;
        fill: #ccd8e9;
      }
    }
  }
}
</style>