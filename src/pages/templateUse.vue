<template>
  <div class="container">
    <input ref="inputRef" type="text" />
  </div>
  <div><h1>title</h1></div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
export default {
  setup() {
    const inputRef = ref(null)
    onMounted(() => {
      console.log(inputRef.value)
    })
    return {
      inputRef
    }
  }
}
</script>

<style scoped>
</style>