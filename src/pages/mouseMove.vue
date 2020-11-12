<template>
  <div>
    <h1>x：{{ x }}</h1>
    <h1>y：{{ y }}</h1>
  </div>
</template>

<script>
import useMouseMove from '../hooks/useMouseMove'
export default {
  setup() {
    const { x, y } = useMouseMove()
    return {
      x,
      y
    }
  }
}
</script>

<style scoped>
</style>