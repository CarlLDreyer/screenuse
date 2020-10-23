<template>
  <div class="result-wrapper">
    <button :class="{disabled: disabled}" v-on="$listeners">
      Avsluta
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExitButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.result-wrapper {
  padding: 0 0 0 16px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transform: rotate(-2deg);
    padding: 26px 38px;
    border: none;
    position: relative;
    background: none;
    font-size: 16px;
    letter-spacing: 0.2px;
    user-select: none;

    &.disabled {
      pointer-events: none;
    }
    &:before {
      border-radius: 14px;
      transform: skewX(10deg);
      background: rgba(176,110,202,1);
      background: linear-gradient(130deg, rgba(202,125,232,1) 0%, rgba(176,110,202,1) 90%);
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 20px;
    }
    &:after {
      background: rgb(202,125,232);
      background: linear-gradient(122deg, rgba(202,125,232,1) 0%, rgba(176,110,202,1) 100%);
      border-radius: 14px;
      transform: skewX(-10deg);
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 20px;
      bottom: 0;
      left: 0;
    }
  }
}
</style>