<template>
  <div class="avg-life-wrapper">
    <div class="avg-life-text">
        <div class="hero-sleep">
          <span class="small">Vi <strong>sover</strong> i genomsnitt</span>
          <div>
            <span class="year">23 år</span><span> under vår livstid.</span>
          </div>
        </div>
        <div class="hero-work">
          <span class="small">Vi <strong>jobbar</strong> i genomsnitt</span>
          <div>
            <span class="year">12 år</span><span> under vår livstid.</span>
          </div>
        </div>
        <div class="hero-screen">
          <span class="small-screen">Baserat på din nuvarande skärmtid<br>kommer du spendera</span>
          <span class="year">{{ yearsInLifeTime }} år</span>
          <span>bakom <strong>mobilskärmen</strong></span>
        </div>
    </div>
    <div class="avg-life-vis">
      <div class="avg-life-body">
        <div class="box-desc">
          <div class="sleep-desc">
            <span class="text">Sömn</span>
            <hr>
          </div>
          <div class="work-desc">
            <span class="text">Jobb</span>
            <hr>
          </div>
          <div class="screen-desc">
            <span class="text">Din skärmtid</span>
            <hr>
          </div>
        </div>
        <div class="box-wrapper">
          <div class="box-header">
            <span class="title">{{ title }}</span>
            <span class="years">{{ years }}</span>
          </div>
          <div class="box-body">
            <span
              class="box"
              v-for="item in yearBoxes"
              :key="item.id"
              :class="boxClasses(item)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import anime from 'animejs/lib/anime.es.js'
export default {
  name: 'SecondResultBoxes',

  data () {
    return {
      // isAnimationDone: false,
      title: 'Genomsnittlig livslängd',
      years: '85 år',
    }
  },

  computed: {
    ...mapGetters([
      'yearBoxes',
      'yearsInLifeTime',
    ]),
  },

  mounted () {
    this.animateStuff()
  },

  methods: {
    ...mapActions([
      'updateBoxData',
    ]),
    updateScreenBoxes () {
      const maxIndex = 35 + this.yearsInLifeTime
      this.updateBoxData({ minIndex: 36, maxIndex: maxIndex, newValue: 'screen' })
    },
    animateStuff () {
      let animTimeline = anime.timeline({
        easing: 'linear',
      }).add({
        targets: '.avg-life-body',
        keyframes: [
          { translateX: -350, translateY: 50, scale: 1.1 },
          { translateY: 0, opacity: 1, duration: 350 },
          { translateX: 0, delay: 500, scale: 1 }
        ],
        complete: () => {
          setTimeout(() => {
            this.updateBoxData({ minIndex: 0, maxIndex: 22, newValue: 'sleep' })
          }, 500)
        }
      })
      .add({
        targets: '.hero-sleep',
        keyframes: [
          { translateX: -50 },
          { translateX: 0, opacity: 1, duration: 500}
        ],
      })
      .add({
        targets: '.sleep-desc',
        opacity: 1,
        duration: 750,
      }, '-=500')
      .add({
        targets: '.hero-sleep',
        opacity: 0,
        duration: 500,
        delay: 2000,
        complete: () => {
          setTimeout(() => {
            this.updateBoxData({ minIndex: 23, maxIndex: 35, newValue: 'work' })
          }, 500)
        }
      })
      .add ({
        targets: '.hero-work',
        keyframes: [
          { translateX: -50 },
          { translateX: 0, opacity: 1, duration: 500}
        ],
      }, '-=200')
      .add({
        targets: '.work-desc',
        opacity: 1,
        duration: 750,
      }, '-=500')
      .add({
        targets: '.hero-work',
        opacity: 0,
        duration: 500,
        delay: 2000,
        complete: () => {
          setTimeout(() => {
            this.updateScreenBoxes()
          }, 500)
        }
      })
      .add ({
        targets: '.hero-screen',
        keyframes: [
          { translateX: -50 },
          { translateX: 0, opacity: 1, duration: 500}
        ],
      }, '-=200')
      .add({
        targets: '.screen-desc',
        opacity: 1,
        duration: 750,
      }, '-=500')


      animTimeline.finished.then(() => {
        this.isAnimationDone = true
        setTimeout(() => {
          //  this.nextResultStage()
          console.log('')
        }, 500) // Change to 3000?
      })
    },
    boxClasses (box) {
      return {
        'sleep': box.type === 'sleep',
        'work': box.type === 'work',
        'screen': box.type === 'screen'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.avg-life-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  .avg-life-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1 40%;
    height: 100%;
    z-index: 2020;
    padding: 16px;

    .hero-sleep, .hero-work, .hero-screen {
      opacity: 0;
      position: absolute;
      font-size: 44px;
      line-height: 1.2;
      font-weight: 600;
      .year {
        font-size: 60px;
        font-weight: 700;
      }
    }
    .hero-sleep strong {
      color: #ca7de8;
    }
    .hero-work strong {
      color: #5652d5;
    }
    .hero-screen strong {
      color: #f4774a;
    }
    .hero-screen {
      display: flex;
      flex-direction: column;
      > span {
        font-size: 36px;
      }
      .small-screen {
        font-size: 24px;
  
      }
    }
  }
  .avg-life-vis {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex: 1 60%;
    height: 100%;
    z-index: 2020;
    padding: 16px;
    .avg-life-body {
      display: flex;
      position: absolute;
      opacity: 0;
      .box-desc {
        margin: 122px 0 0;
        .text {
          font-weight: 600;
          font-size: 18px;
        }
        hr {
          width: 50px;
          height: 2px;
          border: none;
          margin: 0 16px 0 16px;
        }
        .sleep-desc, .work-desc, .screen-desc {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          opacity: 0;
          .text {
            white-space: nowrap;
          }
        }
        .sleep-desc {
          margin: 12px 0 0;
          .text {
            color: #ca7de8;
          }
          hr {
            background: #ca7de8;
          }
        }
        .work-desc {
          margin: 130px 0 0;
          .text {
            color: #5652d5;
          }
          hr {
            background: #5652d5;
          }
        }
        .screen-desc {
          margin: 26px 0 0;
          .text {
            color: #f4774a;
          }
          hr {
            color: #f4774a;
            background: #f4774a;
          }
        }
      }
      .box-wrapper {
        .box-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 0 16px 0;
          white-space: nowrap;
          .title {
            font-size: 44px;
            font-weight: 700;
            line-height: 1.3;
          }
          .years {
            font-size: 32px;
            font-weight: 600;
          }
        }
        .box-body {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          .box {
            width: 30px;
            height: 40px;
            background: white;
            border-radius: 3px;
            margin: 6px;
            &.sleep {
              background: #ca7de8;
              animation-name: tada, fadeIn;
              animation-duration: 1s;
            }
            &.work {
              background: #5652d5;
              animation-name: tada, fadeIn;
              animation-duration: 1s;
            }
            &.screen {
              background: #f4774a;
              animation-name: tada, fadeIn;
              animation-duration: 1s;
            }
          }
        }
      }
    }
  }
}
</style>