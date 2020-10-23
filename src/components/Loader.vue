<template>
  <div class="loader-container" v-if="shouldLoad">
    <div id="wave" />
    <div class="loader">
      <img src="/img/timglas.png" alt="timglas">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Loader',

  computed: {
    ...mapGetters([
      'isLoaded',
    ]),
    shouldLoad () {
      return (this.$route.name === 'ScreenUse' || this.$route.name === 'Results') && !this.isLoaded
    },
  },
}
</script>

<style lang="scss" scoped>
.loader-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dae8ff;
  height: 100%;
  width: 100%;
  z-index: 9999;
  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 32px;
    height: auto;
    color: white;
    img {
      height: 100%;
      width: 48px;
      animation: spin 2s linear infinite;
      margin-bottom: 16px;
    }
    @keyframes spin {
      50% { transform: scale(1.2)}
      100% { transform: scale(1); }
    }
  }
}
</style>