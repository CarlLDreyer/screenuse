<template>
  <div class="quiz-container">
    <slot name="splash" />
    <div class="quiz-header">
      <h1>{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <slot name="subtitle" />
    </div>
    <div class="quiz-body">
      <slot name="content" />
    </div>
    <div class="quiz-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizLayout',

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.quiz-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 16px;

  .quiz-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    margin: 32px 0 16px 0;
    animation: fadeInLeft;
    animation-duration: .75s;
    h1 {
      font-weight: 700;
      font-size: 36px;
      margin-bottom: 8px;
      line-height: 1;

      @media (max-width: 600px) {
        font-size: 30px;
        text-align: left;
      }
    }

    h2 {
      margin: 0;
      font-weight: 500;
      line-height: 1;
      font-size: 22px;

      @media (max-width: 600px) {
        text-align: left;
        font-size: 20px;
      }
    }
  }
  .quiz-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    color: #06071b;
    padding: 16px 0;
    animation: fadeInLeft;
    animation-delay: .25s;
    animation-fill-mode: backwards;
    animation-duration: .75s;
  }
  .quiz-footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    animation: fadeInUp;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: backwards;
    padding: 16px 0;
  }
}
</style>