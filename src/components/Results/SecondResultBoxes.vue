<template>
  <div class="avg-life-wrapper">
    <div class="avg-life-text">
         
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
import { mapGetters } from 'vuex'
// import anime from 'animejs/lib/anime.es.js'
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
      'yearBoxes'
    ]),
  },

  mounted () {
    // this.animateStuff()
  },

  methods: {
    animateStuff () {

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
  .avg-life-text {

  }
  .avg-life-vis {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    z-index: 2020;
    .avg-life-body {
      display: flex;
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
            }
            &.work {
              background: #5652d5;
            }
            &.screen {
              background: #f4774a;
            }
          }
        }
      }
    }
  }
}
</style>