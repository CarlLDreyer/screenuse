<template>
  <div id="app">
    <Loader />
    <keep-alive :include="['ScreenUse', 'Quiz']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  name: 'App',

  components: {
    Loader
  },
}
</script>

<style lang="scss" src="@/assets/styles/main.scss"/>