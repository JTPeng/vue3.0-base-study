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
import { shallowRef, triggerRef } from 'vue'
import { shallowReactive } from 'vue'
export default {
  setup() {
    const state = shallowRef({
      // const state = shallowReactive({
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
      // 非递归，仅将第一层转为proxy -> 修改值不会触发视图更新
      state.value.a = 'a'
      state.value.g.b = 'b'
      state.value.g.f.c = 'c'
      state.value.g.f.s.d = 'd'
      triggerRef(state) // 手动触发视图更新
      console.log(state)
      console.log(state.value.g)
      console.log(state.value.g.f)
      console.log(state.value.g.f.s)

      // 非递归,仅将第一层转为proxy -> 只要修改了第一层就会触发视图更新,跳过第一层去修改后面的数据,不会触发视图更新
      // state.a = 'a'
      // state.g.b = 'b'
      // state.g.f.c = 'c'
      // state.g.f.s.d = 'd'
      // console.log(state)
      // console.log(state.g)
      // console.log(state.g.f)
      // console.log(state.g.f.s)
    }
    return { state, fn }
  }
}
</script>

<style scoped>
</style>