/**
let obj = { name: 'zs', age: '18' }

let state = new Proxy(obj, {
  get(obj, key) {
    console.log(obj, key) // { name: 'zs', age: '18' } name
    return obj[key]
  },
  set(obj, key, val) {
    console.log(obj, key, val) // { name: 'zs', age: '18' } name ls
    obj[key] = val // 通知界面需要更新
  },
})
state.name = 'ls'
console.log(state.name) // ls
*/

let arr = [1, 3, 5]

let state = new Proxy(arr, {
  get(arr, key) {
    console.log(arr, key)
    return arr[key]
  },
  set(arr, key, val) {
    console.log(arr, key, val)
    arr[key] = val
    return true // 当前更新执行完毕
  },
})

state.push(7)
console.log(state)
