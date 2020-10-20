<template>
  <div class="quiz-wrapper">
    <div class="quiz-container">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <div class="quiz-content">
        <slot name="content" />
      </div>
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
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.quiz-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .quiz-container {
 
    text-align: center;
    color: #06071b;
    padding: 0 16px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
    h1 {
      font-weight: 700;
      font-size: 36px;
      margin-bottom: 8px;
      line-height: 1;

      @media (max-width: 768px) {
        font-size: 30px;
        text-align: left;
      }
    }

    h2 {
      margin: 0;
      font-weight: 500;
      line-height: 1;
      font-size: 22px;

      @media (max-width: 768px) {
        text-align: left;
      }
    }
    .quiz-content {
      width: 100%;
    }
  }
}
</style>