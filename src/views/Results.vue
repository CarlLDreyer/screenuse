<template>
  <div class="results-wrapper">
    <div id="wave" />
    <Component :is="resultStage" />
  </div>
</template>

<script>
import FirstResultNumbers from '@/components/Results/FirstResultNumbers'
import SecondResultBoxes from '@/components/Results/SecondResultBoxes'
import ThirdResultOverview from '@/components/Results/ThirdResultOverview'
import { mapGetters } from 'vuex'
export default {
  name: 'Results',

  computed: {
    ...mapGetters([
      'currentResultStage',
    ]),
    resultStage () {
      const resultComponents = [
        'FirstResultNumbers',
        'SecondResultBoxes',
        'ThirdResultOverview',
      ]
      return resultComponents[this.currentResultStage]
    },
  },

  components: {
    FirstResultNumbers,
    SecondResultBoxes,
    ThirdResultOverview,
  },

}
</script>

<style lang="scss" scoped>
 .results-wrapper {
   height: 100%;
   overflow-y: hidden;
 }
</style>