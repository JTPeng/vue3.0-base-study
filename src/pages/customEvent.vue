<template>
  <div>
    {{ count }}
    <childSon @handleClick="handleClick"></childSon>
  </div>
</template>

<script>
import { ref } from 'vue'
import childSon from './childSon'
export default {
  components: {
    childSon
  },
  setup() {
    const count = ref(10)
    const handleClick = () => {
      count.value += 1
    }
    return {
      count,
      handleClick
    }
  }
}
</script>

<style scoped>
</style>