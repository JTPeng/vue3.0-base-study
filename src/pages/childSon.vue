<template>
  <div>
    <button @click="handleclick">addClick</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['handle-click'],
  setup(props, { emit }) {
    function handleclick() {
      // 子组件分发事件给父组件时,`事件名`不可以使用驼峰命名法进行命名,要么全部小写,要么使用`-`进行连接。使用`-`进行命名的事件,父组件可以使用驼峰命名进行接收
      emit('handle-click', 1)
    }
    return {
      handleclick
    }
  }
}
</script>

<style scoped>
</style>