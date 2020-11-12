<template>
  <div>
    <Suspense>
      <template #default>
        <!-- <suspenseSon /> -->
        <dogSuspense />
      </template>
      <template #fallback>
        Loading ....!!!
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import suspenseSon from './suspenseSon'
import dogSuspense from './dogSuspense'

export default defineComponent({
  components: {
    // suspenseSon,
    dogSuspense
  }
})
</script>

<style scoped>
</style>