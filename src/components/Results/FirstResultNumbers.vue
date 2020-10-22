<template>
  <div class="numbers-wrapper">
    <div class="splash" v-if="isAnimationDone">
      <span class="splash-text">En människa har en <br>genomsnittlig livslängd på: <strong>85 år</strong></span>
    </div>
    <div class="numbers" v-else>
      <span class="screen-time">{{ screenTime }}</span>
      <div class="number-bubble">
        <div class="number" v-for="result in resultData" :key="result.id" :class="`result-${result.id}`">
          <span class="value">{{ result.value }}</span>
          <span class="desc">{{ result.desc }}</span>
        </div>
        <img :src="bubbleSource" alt="bubbla">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import anime from 'animejs/lib/anime.es.js'
export default {
  name: 'FirstResultNumbers',
  
  data () {
    return {
      screenTime: 'Din skärmtid motsvarar:',
      bubbleSource: '/img/results/bubbla.svg',
      isAnimationDone: false, // Change to false later
    }
  },

  mounted () {
    this.animateNumbers()
  },

  methods: {
    ...mapActions([
      'nextResultStage',
    ]),
    animateNumbers () {
      let animTimeline = anime.timeline({
        easing: 'easeInOutElastic',
      }).add({
        targets: '.result-0',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3 },
          { translateX: 300, opacity: 0.5, scale: 0.5},
          { translateX: 300, duration: 250 },
          { translateX: 0, opacity: 1, scale: 1, duration: 750 },
        ],
      })
      .add({
        targets: '.result-1',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3,},
          { translateX: 300, opacity: 0.5, scale: 0.5, duration: 1000},
          { translateX: 300, duration: 250 },
        ],
      }, '-=750')
      .add({ 
        targets: '.result-0',
        keyframes: [
          { translateX: -300, opacity: 0.5, scale: 0.5, duration: 750 },
        ],
      })
      .add({
        targets: '.result-1',
        keyframes: [
          { translateX: 0, opacity: 1, scale: 1 },
        ],   
      }, '-=500')
      .add({
        targets: '.result-2',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3,},
          { translateX: 300, opacity: 0.5, scale: 0.5, duration: 1000},
          { translateX: 300, duration: 250 },
        ],   
      }, '-=1000') 
      .add({
        targets: '.result-0',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-1',
        keyframes: [
          { translateX: -300, opacity: 0.5, scale: 0.5, duration: 750 },
        ],
      }, '-=750')
      .add({
        targets: '.result-2',
        keyframes: [
          { translateX: 0, opacity: 1, scale: 1 },
        ],   
      }, '-=500')
      .add({
        targets: '.result-3',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3,},
          { translateX: 300, opacity: 0.5, scale: 0.5, duration: 1000},
          { translateX: 300, duration: 250 },
        ],   
      }, '-=1000')
      .add({
        targets: '.result-1',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-2',
        keyframes: [
          { translateX: -300, opacity: 0.5, scale: 0.5, duration: 750 },
        ],
      }, '-=750')
      .add({
        targets: '.result-3',
        keyframes: [
          { translateX: 0, opacity: 1, scale: 1 },
        ],   
      }, '-=500')
      .add({
        targets: '.result-2',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-3',
        keyframes: [
          { translateX: -300, opacity: 0, scale: 0.5, duration: 750 },
        ],
      }, '-=750')

      animTimeline.finished.then(() => {
        this.isAnimationDone = true
        setTimeout(() => {
           this.nextResultStage()
        }, 3000) // Change to 3000?
      })
    },
  },

  computed: {
    ...mapGetters([
      'resultData',
    ]),
  },

}
</script>

<style lang="scss" scoped>
.numbers-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .splash {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2020;
    animation: fadeIn;
    animation-duration: 3s;
    .splash-text {
      font-weight: 600;
      font-size: 48px;
      line-height: 1.2;
      padding: 0 8px;

      @media (max-width: 1024px) {
        font-size: 36px;
      }

      @media (max-width: 600px) {
        font-size: 24px;
      }
    }
  }
  .numbers {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    position: relative;
    .screen-time {
      font-size: 32px;
      font-weight: 600;

      @media (max-width: 600px) {
        font-size: 28px;
      }
    }
    .number-bubble {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      .number {
        display: flex;
        flex-direction: column;
        position: absolute;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        margin: 0 0 32px 0;
        opacity: 0;
        transform: translateX(170) scale(0.5);
        .value {
          font-size: 120px;
          line-height: 1;
        }
        .desc {
          font-size: 32px;
        }
      }
      img {
        width: 100%;
        height: auto;
        padding: 16px;
      }
    }
  }
}
</style>