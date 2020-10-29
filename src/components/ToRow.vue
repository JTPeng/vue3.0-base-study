<template>
  <div>
    <p>{{ state }}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import { reactive, toRaw } from 'vue'
export default {
  /**
   * ref/reactive 数据类型的特点：每次修改都会被追踪,都会更新 UI 界面，但是这样其实是非常消耗性能的。所以如果我们有一些操作不需要被追踪,不需要更新 UI 界面。这时我们就可以通过 toRow 方法拿到它的原始数据,对原始数据进行修改,这样就不会被追踪,就不会更新 UI 界面
   */
  setup() {
    const obj = { name: 'jack', age: 18 }
    const state = reactive(obj)
    const obj2 = toRaw(state)
    console.log(obj2 === obj)
    console.log(state === obj)
    function fn() {
      obj2.name = 'tom'
      console.log(obj)
      console.log(obj2)
      console.log(state)
    }
    return {
      state,
      fn
    }
  }
}
</script>

<style scoped>
</style>