<template>
  <section class="screen-use">
    <div class="text">
        Hello
    </div>
    <ObjectCanvas />
  </section>
</template>

<script>
import ObjectCanvas from '@/components/3d/ObjectCanvas'
export default {
  name: 'ScreenUse',

  components: {
    ObjectCanvas,
  }

}
</script>

<style lang="scss" scoped>
.screen-use {
  display: flex;
  height: 100%;
  background: #DAE8FF;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  .text {
    position: fixed;
    display: flex;
  }
}
</style>
