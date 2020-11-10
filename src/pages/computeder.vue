<template>
  <div>
    <p>{{ count }}---{{ computedNum }}</p>
    <p>{{num}}</p>
    <button @click="handleClick">button</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    const count = ref(1)
    const person = reactive({
      name: 'jack',
      num: [1]
    })
    const computedNum = computed(() => count.value + 1)
    const num = computed(() => person.num.map(item => item * 2))
    function handleClick() {
      count.value *= 2
      person.num.push(Math.ceil(Math.random() * 10))
    }
    return {
      count,
      computedNum,
      handleClick,
      num
    }
  }
}
</script>

<style scoped>
</style>