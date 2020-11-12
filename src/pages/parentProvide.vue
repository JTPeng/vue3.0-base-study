<template>
  <div>
    <p>{{ count }}</p>
    <p>provide:{{ obj }}</p>
    <childInject @multip="multip"></childInject>
    <button @click="handleClick">parent</button>
  </div>
</template>

<script>
import { provide, reactive, readonly, ref } from 'vue'
import childInject from './childInject'
export default {
  components: {
    childInject
  },
  setup(props, ctx) {
    const count = ref(0)
    provide('http', 'baidu.com')
    const obj = reactive(
      readonly({
        post: 3000,
        time: 6000
      })
    )
    provide('localhost', obj)
    function sub() {
      count.value -= 2
    }
    function handleClick() {
      obj.post += 1
    }
    function multip(val) {
      count.value  = count.value * val
      console.log(count.value)
      console.log(val)
    }
    provide('sub', sub)
    return {
      count,
      obj,
      handleClick,
      multip
    }
  }
}
</script>

<style scoped>
</style>