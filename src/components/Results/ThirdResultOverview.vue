<template>
  <QuizLayout :title="title">
    <template #splash>
      <div class="splash">
        <span class="quote">Remember, not all screen time is bad screen time, but time is the most <strong>valuable thing</strong> a human can spend, <strong>so spend it well.</strong></span>
      </div>
    </template>
    <template #subtitle>
      <button class="arrow-btn">
        Se exempel här
        <span class="btn-icon">
          <svg viewBox="0 0 24 24"><use xlink:href="#arrow" /></svg>
        </span>
      </button>
    </template>
    <template #content>
      <div class="do-instead">
        <span class="know-text">{{ didYouKnow }}</span>
        <ul>
          <li v-for="item in facts" :key="item.id">{{ item }}</li>
        </ul>
      </div>
      <svg style="display:none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <g id="check">
            <polyline points="20 6 9 17 4 12"></polyline>
          </g>
          <g id="arrow">
            <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
          </g>
        </defs>
      </svg>
    </template>
    <template #footer>
      <ExitButton @click="handleClick" />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import ExitButton from '@/components/ExitButton'
import anime from 'animejs/lib/anime.es.js'
import { mapActions } from 'vuex'
export default {
  name: 'ThirdResultOverview',

  data () {
    return {
      title: 'Vad hade jag kunnat göra istället?',
      didYouKnow: 'Visste du att...',
      facts: [
        'Webbsidor och appar designas för att du ska fortsätta skrolla?',
        'Tjänster utformas medvetet så att användare blir beroende?',
      ],
    }
  },

  methods: {
    ...mapActions([
      'resetQuizState'
    ]),
    handleClick () {
      let animTimeline = anime.timeline({
        easing: 'linear',
      }).add({
        targets: '.quiz-header',
        opacity: 0,
        duration: 1000,
      })
      .add({
        targets: '.quiz-body',
        opacity: 0,
        duration: 1000,
      }, '-=500')
      .add({
        targets: '.quiz-footer',
        opacity: 0,
        duration: 1000,
      }, '-=500')
      .add({
        targets: '.splash',
        keyframes: [
          { opacity: 1, duration: 1000 },
          { opacity: 0, duration: 1000, delay: 4000}
        ],
      }, '-=250')

      animTimeline.finished.then(() => {
        this.resetQuizState()
        this.$router.push('/')
      })
    },
  },

  components: {
    QuizLayout,
    ExitButton,
  },
}
</script>

<style lang="scss" scoped>
::v-deep .quiz-body {
  align-items: center;
}

::v-deep .quiz-header {
  z-index: 2020;
}

::v-deep .arrow-btn {
  max-width: 200px;
  margin: 12px 0 0;
}

.splash {
  max-width: 800px;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  .quote {
    font-size: 32px;
    padding: 0 16px;
    line-height: 1.3;
  }
}

.do-instead {
  z-index: 2020;
  max-width: 600px;
  background: rgb(255,255,255);
  background: linear-gradient(101deg, rgba(255,255,255,1) 0%, rgba(229,237,252,1) 175%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  font-size: 18px;
  padding: 32px;

  @media (max-width: 600px) {
    padding: 32px 16px;
  }
  .know-text {
    display: inherit;
    font-weight: 600;
    font-size: 32px;
    width: 85%;
    line-height: 1;
    margin: 0 0 8px 0;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
  ul {
    list-style: none;
    font-size: 18px;
    max-width: 80%;
    font-weight: 600;
    text-align: left;

    @media (max-width: 600px) {
    font-size: 16px;
    }
    li {
      line-height: 1.3;
      &::before {
        padding-right: 8px;
        content: "• ";
        color: #ca7de8;
        font-size: 28px;
      }
    }
  }
}
</style>