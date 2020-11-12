<template>
  <div class="container">
    <teleports :isOpen="isOpen" @close-modal="onCloseModal">
      My slot Modal
    </teleports>
    <button @click="onOpenModal">open</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import teleports from './teleports'
export default defineComponent({
  components: {
    teleports
  },
  setup() {
    const isOpen = ref(false)
    const onOpenModal = () => {
      isOpen.value = true
    }
    const onCloseModal = () => {
      isOpen.value = false
    }
    return {
      onOpenModal,
      onCloseModal,
      isOpen
    }
  }
})
</script>

<style scoped>
</style>