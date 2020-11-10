<template>
  <div>
    <p>{{ count }}</p>
    <p>provide:{{ obj }}</p>
    <childInject></childInject>
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
  setup() {
    const count = ref(0)
    provide('http', 'baidu.com')
    const obj = reactive(
      readonly({
        post: 3000,
        time: 6000
      })
    )
    provide('localhost', obj)

    function handleClick() {
      obj.post += 1
    }
    return {
      count,
      obj,
      handleClick
    }
  }
}
</script>

<style scoped>
</style>