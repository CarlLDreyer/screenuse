<template>
  <div class="result-wrapper">
    <button @click="finishQuiz" :class="{disabled: disabled}">
      Se Resultat
      <svg viewBox="0 0 24 24"><use xlink:href="#arrow" /></svg>
    </button>
    <svg style="display:none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <g id="arrow">
          <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
        </g>
      </defs>
    </svg>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ResultButton',

  computed: {
    ...mapGetters([
      'isQuizFinished',
    ]),
  },

  methods: {
    ...mapActions([
      'setQuizFinished',
      'setLoaded',
      'resetResultStage',
    ]),
    finishQuiz () {
      if (this.isQuizFinished) {
        this.setQuizFinished (false)
        this.resetResultStage()
      }
      this.setQuizFinished(true)
      this.$router.push('results')
    },
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.result-wrapper {
  padding: 0 0 0 16px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transform: rotate(-2deg);
    padding: 26px 18px 26px 24px;
    border: none;
    position: relative;
    background: none;
    font-size: 16px;
    letter-spacing: 0.2px;
    user-select: none;

    &.disabled {
      pointer-events: none;
      &:before {
        background: #bfbfbf;
      }
      &:after {
        background: #bfbfbf;
      }
    }
    &:hover {
      svg {
        // transform: translateX(5px);
      }
    }
    &:before {
      border-radius: 14px;
      transform: skewX(10deg);
      background: rgba(176,110,202,1);
      background: linear-gradient(130deg, rgba(202,125,232,1) 0%, rgba(176,110,202,1) 90%);
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 20px;
    }
    &:after {
      background: rgb(202,125,232);
      background: linear-gradient(122deg, rgba(202,125,232,1) 0%, rgba(176,110,202,1) 100%);
      border-radius: 14px;
      transform: skewX(-10deg);
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 20px;
      bottom: 0;
      left: 0;
    }
    svg {
      margin: 0 0 0 8px;
      height: 22px;
      width: 22px;
      fill: none;
      stroke: white;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: all .2s ease;
    }
  }
}
</style>