<template>
  <div>
    <p>name:{{ person.name }}</p>
    <p>age:{{ person.age }}</p>
    <p>爱好:</p>
    <ul>
      <li v-for="(hobby, index) in person.hobbys" :key="index">
        {{ hobby }}
      </li>
    </ul>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    const person = reactive({
      name: 'jack',
      age: '18',
      hobbys: ['吃饭', '睡觉', '打豆豆']
    })
    const count = ref(0)
    function handleClick() {
      count.value += 1
      // person.hobbys.push('看书')
      person.name = 'tim'
      console.log(person)
    }
    // 修改person.name => watch监视对象内的数据时,需要使用函数形式
    // watch监视的数据必须时一个响应式对象。当把对象中具体某个值取出时,它就失去了响应式性质。可以通过函数的形式设置
    watch([count, () => person.name], (val, oldVal) => {
      console.log('val', val, 'oldVal', oldVal, person)
    })
    return {
      person,
      handleClick
    }
  }
}
</script>

<style scoped>
</style>