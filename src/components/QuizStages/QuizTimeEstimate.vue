<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="slider">
        <span class="time-text">{{ estimatedTime }}h</span>
        <vue-slider
          v-model="timeModel"
          :height="18"
          :min="0"
          :max="12"
          tooltip="none"
        >
          <template v-slot:dot>
            <img :src="imgUrl" class="poop-dot"/>
          </template>
        </vue-slider>
      </div>
    </template>
    <template #footer>
      <NextButton />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import NextButton from '@/components/NextButton'
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
    timeModel: {
      get () {
        return this.estimatedTime
      },
      set (value) {
        this.setEstimatedTime(value)
      },
    },
  },

  methods: {
    ...mapActions([
      'setEstimatedTime',
    ])
  },

  components: {
    QuizLayout,
    VueSlider,
    NextButton,
  },
}
</script>

<style lang="scss" scoped>
.slider {
  .time-text {
    font-weight: 700;
    font-size: 72px;
    user-select: none;
  }
}
</style>