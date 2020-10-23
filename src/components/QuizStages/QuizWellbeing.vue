<template>
  <QuizLayout :title="title" :subtitle="subtitle">
    <template #content>
      <div class="emoji-cards">
        <div
          class="emoji-card"
          v-for="emoji in phoneWellbeing"
          :key="emoji.id"
          @click="handleClick(emoji)"
          :class="{selected: emoji.selected}"
        >
          <img :src="emoji.imgSrc" :alt="emoji.title">
          <span class="title">{{ emoji.title }}</span>
        </div>
      </div>
    </template>
    <template #footer>
      <PrevButton />
      <NextButton :disabled="canProceed" />
    </template>
  </QuizLayout>
</template>

<script>
import QuizLayout from '@/layouts/QuizLayout'
import NextButton from '@/components/NextButton'
import PrevButton from '@/components/PrevButton'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'QuizWellbeing',

  data () {
    return {
      title: 'Hur mår du av att använda din telefon?',
      subtitle: 'Välj känslorna som du tycker passar bäst in.',
    }
  },

  methods: {
    ...mapActions([
      'setPhoneWellbeing',
    ]),
    handleClick (emoji) {
      emoji.selected = !emoji.selected
      this.setPhoneWellbeing(emoji)
    },
  },

  computed: {
    ...mapGetters([
      'phoneWellbeing'
    ]),
    canProceed () {
      return !this.phoneWellbeing.some(f => f.selected)
    },
  },

  components: {
    QuizLayout,
    NextButton,
    PrevButton,
  },
}
</script>

<style lang="scss" scoped>
.emoji-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  .emoji-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 32px 0;
    min-width: 100px;
    border-radius: 4px;
    margin: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    user-select: none;

    @media (max-width: 600px) {
      padding: 16px 0;
      margin: 4px;
    }
    &.selected {
      background: rgb(202,125,232);
      background: linear-gradient(101deg, rgba(202,125,232,1) 0%, rgba(236,203,245,1) 175%);
      .title {
        color: white;
      }
    }
    img {
      height: 54px;
      width: 54px;
      margin-bottom: 8px;

      @media (max-width: 600px) {
        height: 40px;
        width: 40px;
        margin-bottom: 4px;
      }
    }
    .title {
      font-weight: 600;
      font-size: 22px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
}
</style>