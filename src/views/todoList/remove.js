import { reactive } from 'vue'
export default function useState() {
  const state = reactive({
    stus: [
      { id: 1, name: 'zs', age: 10 },
      { id: 2, name: 'ls', age: 12 },
      { id: 3, name: 'ww', age: 13 },
    ],
  })
  function removeStu(index) {
    state.stus.splice(index, 1)
  }
  return {
    state,
    removeStu,
  }
}
