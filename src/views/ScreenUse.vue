<template>
  <div id="screen-use">
    <div id="wave" />
      <div id="text">
        <div id="container">
          <span id="small">Har du koll på din</span>
          <span id="header" class="text">Skärmtid?</span>
          <span id="desc" class="text">Problemet är inte att vi har lite tid, utan att vi slösar bort en stor del av tiden vi har. Hur spenderar du din tid?</span>
          <button id="start-btn" @click="handleClick">
            {{ startText }}
            <span id="btn-icon">
              <svg viewBox="0 0 24 24"><use xlink:href="#arrow" /></svg>
            </span>
          </button>
        </div>
      </div>
      <ObjectCanvas />
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
import ObjectCanvas from '@/components/3d/ObjectCanvas'
import { mapGetters } from 'vuex'
export default {
  name: 'ScreenUse',

  computed: {
    ...mapGetters([
      'currentQuizStage',
    ]),
    startText () {
      return this.currentQuizStage > 0 ? 'ÅTERUPTA' : 'STARTA QUIZ'
    },
  },

  components: {
    ObjectCanvas,
  },

  methods: {
    handleClick () {
      this.$router.push('quiz')
    },
  },

}
</script>

<style lang="scss" scoped>
#screen-use {
  display: flex;
  height: 100%;
  background: #dae8ff;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  #text {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 55%;
    height: 100%;
    align-items: center;
    justify-content: center;
    z-index: 2021;

    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
      justify-content: flex-start;
    }
    #container {
      flex-direction: column;
      display: inherit;
      justify-content: flex-start;
      padding: 0 32px;
      max-width: 55%;

      @media (max-width: 1024px) {
        max-width: 100%;
        align-items: center;
      }
      #small {
        font-size: 20px;
        color: #06071B;
        font-weight: 600;

        @media (max-width: 1024px) {
          font-size: 16px;
        }
      }
      #header {
        font-size: 76px;
        font-weight: 700;
        color: #06071B;
        line-height: 1;
        margin: 0 0 10px 0;

        @media (max-width: 1024px) {
          font-size: 56px;
        }
      }
      #desc {
        font-size: 16px;
        margin: 0 0 16px 0;
        color:#545454;
        line-height: 1.2;
        font-weight: 600;
        max-width: 90%;

        @media (min-width: 640px) {
          margin: 0 0 32px 0;
          font-size: 16px;
          max-width: 60%;
        }

        @media (min-width: 1024px) {
          margin: 0 0 16px 0;
          font-size: 20px;
          max-width: 90%;
        }
      }
      #start-btn {
        display: flex;
        outline: none;
        background: none;
        align-items: center;
        justify-content: center;
        border: none;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        max-width: 190px;
        padding: 0;
        letter-spacing: 0.6px;
        color: #333;
        transition: all .2s ease;
        &:hover {
          // letter-spacing: 1px;
          color: rgb(176,110,202);
          #btn-icon {
            transform: translateX(5px);
          }
        }
        #btn-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(176,110,202);
          background: linear-gradient(129deg, rgba(176,110,202,1) 0%, rgba(202,125,232,1) 100%);
          border-radius: 50%;
          height: 40px;
          width: 40px;
          margin: 0 0 0 16px;
          transition: all .2s ease;
          svg {
            height: 18px;
            width: 18px;
            stroke: white;
            fill: none;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        }
      }
    }
  }
}
</style>
