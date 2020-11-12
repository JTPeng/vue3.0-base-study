<template>
  <div></div>
</template>

<script>
import { h, reactive, ref } from 'vue'
export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    function increment() {
      book.title = 'Render Function'
    }
    // Please note that we need to explicitly expose ref value here
    return () =>
      h('div', { onClick: increment }, [readersNumber.value, book.title])
  }
}
</script>

<style scoped>
</style>