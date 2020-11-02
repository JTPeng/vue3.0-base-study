<template>
  <div>
    <p>{{ state }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, ref, toRef } from 'vue'
export default {
  /**
   * ref 对已声明的数据进行重新声明时,不会对原数据产生影响,会触发视图更新
   */
  // setup() {
  //   // const obj = { name: 'jack' }
  //   const obj = reactive({ name: 'jack' })
  //   const state = ref(obj.name)
  //   console.log(obj, state.value)
  //   function handleClick() {
  //     state.value = 'tim'
  //     console.log(state)
  //     console.log(obj)
  //   }
  //   return {
  //     state,
  //     handleClick
  //   }
  // }
  /**
   * toRef -> 对已声明的非响应式数据重新声明时,会对原始数据产生影响,但视图不会更新,如果是对已声明的响应式数据进行修改,则也会对原始数据产生影响,并且会触发视图更新
   */
  setup() {
    // const obj = { name: 'jack' }
    const obj = reactive({ name: 'jack' })
    const state = toRef(obj, 'name')
    console.log(obj, state)
    function handleClick() {
      state.value = 'tim'
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