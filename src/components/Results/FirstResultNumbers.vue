<template>
  <div class="numbers-wrapper">
    <span class="splash-text">En människa har en <br>genomsnittlig livslängd på: <strong>85 år</strong></span>
    <div class="numbers">
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
      screenTime: 'Din skärmtid motsvarar',
      bubbleSource: '/img/results/bubbla.svg',
    }
  },

  mounted () {
    this.loadAssets()
  },

  methods: {
    ...mapActions([
      'nextResultStage',
      'setLoaded',
    ]),
    loadAssets () {
      this.setLoaded(false)
      setTimeout(() => {
        this.setLoaded(true)
        this.animateNumbers()
      }, 2000)
    },
    animateNumbers () {
      let animTimeline = anime.timeline({
        easing: 'easeInOutElastic',
      }).add({
        targets: '.numbers',
        opacity: 1,
        duration: 500,
        easing: 'linear'
      })
      .add({
        targets: '.result-0',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3 },
          { translateX: 300, opacity: 0.5, scale: 0.5 },
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
      }, '-=1000')
      .add({ 
        targets: '.result-0',
        translateX: -300,
        opacity: 0.5,
        scale: 0.5,
        duration: 750,
      })
      .add({
        targets: '.result-1',
        translateX: 0,
        opacity: 1,
        scale: 1,
      }, '-=750')
      .add({
        targets: '.result-2',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3,},
          { translateX: 300, opacity: 0.5, scale: 0.5, duration: 1000},
          { translateX: 300, duration: 250 },
        ],   
      }, '-=1250') 
      .add({
        targets: '.result-0',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-1',
        translateX: -300,
        opacity: 0.5,
        scale: 0.5,
        duration: 750,
      }, '-=1000')
      .add({
        targets: '.result-2',
        translateX: 0,
        opacity: 1,
        scale: 1,
      }, '-=1000')
      .add({
        targets: '.result-3',
        keyframes: [
          { translateX: 300, opacity: 0, scale: 0.3,},
          { translateX: 300, opacity: 0.5, scale: 0.5, duration: 1000},
          { translateX: 300, duration: 250 },
        ],   
      }, '-=1250')
      .add({
        targets: '.result-1',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-2',
        translateX: -300,
        opacity: 0.5,
        scale: 0.5,
        duration: 750,
      }, '-=1000')
      .add({
        targets: '.result-3',
        translateX: 0,
        opacity: 1,
        scale: 1, 
      }, '-=1000')
      .add({
        targets: '.result-2',
        opacity: 0,
        scale: 0.3,
        duration: 1000,
      })
      .add({
        targets: '.result-3',
        keyframes: [
          { translateX: -300, opacity: 0.5, scale: 0.5, duration: 750 },
          { opacity: 0, duration: 500 },
        ],
      }, '-=1000')
      .add({
        targets: '.numbers',
        opacity: 0,
        duration: 1000,
      }, '-=250')
      .add({
        targets: '.splash-text',
        keyframes: [
          { opacity: 1, duration: 1500 },
          { opacity: 0, duration: 1500, delay: 3000 }
        ],
      })

      animTimeline.finished.then(() => {
        this.nextResultStage()
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
  .splash-text {
    position: absolute;
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    padding: 0 8px;
    opacity: 0;

    @media (max-width: 1024px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
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
    opacity: 0;
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