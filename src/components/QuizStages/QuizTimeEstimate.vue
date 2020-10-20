<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <!-- <VueSlider
        :value="estimatedTime"
        @input="setEstimatedTime($event.target.value)"
        @change="setEstimatedTime($event.target.value)"
      /> -->
      <span class="time-text">{{ estimatedTime }}h</span>
      <vue-slider
        v-model="fuck"
        :height="18"
        :min="0"
        :max="12"
        tooltip="none"
      >
        <template v-slot:dot>
          <img :src="imgUrl" class="poop-dot"/>
        </template>
      </vue-slider>
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import { mapGetters, mapActions } from 'vuex'
import VueSlider from 'vue-slider-component'
import '@/assets/styles/slider.scss'
export default {
  name: 'QuizTimeEstimate',

  data () {
    return {
      title: 'Hur mycket tid tror du att du spenderar på din telefon?',
      subtitle: 'Dra i markören för att uppge din ungefärliga skärmtid per dag.',
      tooltipForm: `{value}h`,
      imgUrl: '/img/poop.png'
    }
  },

  computed: {
    ...mapGetters([
      'estimatedTime',
    ]),
    fuck: {
      get () {
        return this.estimatedTime
      },
      set (value) {
        this.setEstimatedTime(value)
      }
    }
  },

  methods: {
    ...mapActions([
      'setEstimatedTime',
    ])
  },

  components: {
    QuizLayout,
    VueSlider,
  },
}
</script>

<style lang="scss" scoped>
.time-text {
  font-weight: 700;
  font-size: 72px;
}
::v-deep .quiz-content {
  margin-top: 32px;
}
</style>