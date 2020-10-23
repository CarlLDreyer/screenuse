<template>
  <div class="home-wrapper">
    <div class="home">
      <h1>{{ textTop }}</h1>
      <h2>{{ textMiddle }}</h2>
      <h2>{{ textBottom }}</h2>
      <button @click="handleRoute">Latest project</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      textTop: '🚧 Under construction 🚧',
      textMiddle: 'I could say it\'s coming soon, but it\'s probably not.',
      textBottom: 'Meanwhile check out my latest project.',
    }
  },
  methods: {
    handleRoute () {
      this.$router.push('/screentime')
    },
  },
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  background: #fff;
  h2 {
    font-size: 18px;
    animation: fadeIn;
    animation-duration: 1s;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  h1 {
    margin-bottom: 16px;
    font-size: 36px;
    line-height: 1;
    animation: fadeIn;
    animation-duration: 1s;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  button {
    background: #E9ECF0;
    padding: 16px 36px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    outline: 0;
    border: none;
    margin-top: 24px;
    transition: all .1s ease;
    animation: fadeInUp;
    animation-duration: 1s;
    cursor: pointer;
    &:hover {
      background: #D7D7D7;
    }
  }
}
</style>