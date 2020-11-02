<template>
  <div>
    <p>{{ state.name }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'
export default {
  /**
   * toRefs() -> 本质同toRef(),toRefs()可以将整个数据转换成响应式数据,toRef()只能逐个进行转换
   */
  setup() {
    // const obj = { name: 'jack', age: 12 }
    const obj = reactive({ name: 'jack', age: 12 })
    const state = toRefs(obj)
    console.log(obj, state)
    function handleClick() {
      state.name.value = 'tim'
      state.age.value = 13
      console.log(obj, state)
    }
    return {
      state,
      handleClick
    }
  }
}
</script>

<style scoped>
</style>