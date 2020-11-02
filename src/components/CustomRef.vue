<template>
  <div>
    <ul>
      <li v-for="(st,index) in state" :key="index">
        <p>{{ st.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { customRef } from 'vue'
function myRef(val) {
  return customRef((track, trigger) => {
    fetch(val)
      .then(res => {
        return res.json()
      })
      .then(value => {
        // console.log(value)
        val = value
        trigger()
      })
      .catch(err => {
        console.log(err)
      })
    return {
      get() {
        track()
        return val
      },
      set(newVal) {
        val = newVal
        trigger()
      }
    }
  })
}

export default {
  /**
   * custome() -> 由于setup()只能作为同步函数执行。将需要请求数据的业务逻辑单独抽离出来,使用customeRef()自定义的形式来获取数据
   */
  setup() {
    const state = myRef('./data.json')

    function handleClick() {
      // console.log(state)
      console.log(state)
      // state.value += 1
    }

    return {
      state
    }
  }
}
</script>
