import { reactive } from 'vue'
export default function useAddStu(state) {
  const stu = reactive({
    id: '',
    name: '',
    age: '',
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
    addStu,
  }
}
