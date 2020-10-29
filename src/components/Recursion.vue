<template>
  <div>
    <p>{{ state.a }}</p>
    <p>{{ state.g.b }}</p>
    <p>{{ state.g.f.c }}</p>
    <p>{{ state.g.f.s.d }}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { reactive } from 'vue'
export default {
  setup() {
    // const state = ref({
    const state = reactive({
      a: 1,
      g: {
        b: 2,
        f: {
          c: 3,
          s: {
            d: 4
          }
        }
      }
    })
    function fn() {
      // state.value.a = 'a'
      // state.value.g.b = 'b'
      // state.value.g.f.c = 'c'
      // state.value.g.f.s.d = 'd'
      // console.log(state)
      // console.log(state.value.g)
      // console.log(state.value.g.f)
      // console.log(state.value.g.f.s)
      
      state.a = 'a'
      state.g.b = 'b'
      state.g.f.c = 'c'
      state.g.f.s.d = 'd'
      console.log(state)
      console.log(state.g)
      console.log(state.g.f)
      console.log(state.g.f.s)
    }
    return { state, fn }
  }
}
</script>

<style scoped>
</style>