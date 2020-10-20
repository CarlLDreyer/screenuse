<template>
  <div class="prev-wrapper">
    <button @click="previousQuizStage">
      <svg viewBox="0 0 24 24"><use xlink:href="#arrow" /></svg>
      Förra Frågan
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
import { mapActions } from 'vuex'
export default {
  name: 'PrevButton',

  methods: {
    ...mapActions([
      'previousQuizStage',
    ])
  },
}
</script>

<style lang="scss" scoped>
.prev-wrapper {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px 0 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-weight: 600;
    cursor: pointer;
    transform: rotate(3deg);
    padding: 28px 30px;
    border: none;
    position: relative;
    background: none;
    font-size: 16px;
    letter-spacing: 0.2px;
    user-select: none;
    &:hover {
      svg {
        // transform: translateX(-5px);
      }
    }
    &:before {
      border-radius: 14px;
      transform: skewX(-13deg);
      background: #fff;
      background: linear-gradient(130deg, rgb(255, 255, 255) 0%, rgba(251, 251, 251, 1) 90%);
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
      background: linear-gradient(122deg, rgb(255, 255, 255) 0%, rgba(251, 251, 251, 1) 100%);
      border-radius: 14px;
      transform: skewX(13deg);
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
      margin: 0 8px 0 0;
      height: 22px;
      width: 22px;
      fill: none;
      stroke: #333;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: all .2s ease;
      transform: rotate(180deg);
    }
  }
}
</style>