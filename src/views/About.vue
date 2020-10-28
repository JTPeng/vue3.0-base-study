<template>
  <div class="about">
    <form>
      <input type="text" v-model="stu.id" />
      <input type="text" v-model="stu.name" />
      <input type="text" v-model="stu.age" />
      <input type="submit" text="submit" @click="addStu" />
    </form>
    <ul>
      <li
        v-for="(stu, index) in state.stus"
        :key="stu.id"
        @click="removeStu(index)"
      >
        {{ index }}--{{ stu.name }}----{{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
/**
 * reactive 定义引用数据类型,vue能检测到其变化。
 * html中需要是用的变量或方法都需要通过setup将其暴露出来。
 * 同时,对应的方法也可以抽离成单独的文件。在需要使用的vue组件中引入使用
 */
function initState() {
  const state = reactive({
    stus: [
      { id: 1, name: 'zs', age: 10 },
      { id: 2, name: 'ls', age: 12 },
      { id: 3, name: 'ww', age: 13 }
    ]
  })
  function removeStu(index) {
    state.stus.splice(index, 1)
  }
  return {
    state,
    removeStu
  }
}
function useAddStu(state) {
  const stu = reactive({
    id: '',
    name: '',
    age: ''
  })
  function addStu(e) {
    e.preventDefault()
    const res = Object.assign({}, stu)
    state.stus.push(res)
    stu.id = ''
    stu.name = ''
    stu.age = ''
  }
  return {
    stu,
    addStu
  }
}

export default {
  setup() {
    const { state, removeStu } = initState()
    const { stu, addStu } = useAddStu(state)
    return {
      state,
      removeStu,
      stu,
      addStu
    }
  }
}
</script>
