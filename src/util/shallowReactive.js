function shallowReactive(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, val) {
      obj[key] = val
      console.log('界面已更新')
      return true
    },
  })
}
let obj = {
  a: 1,
  g: {
    b: 2,
    f: {
      c: 3,
    },
  },
}

let state = shallowReactive(obj)
// 仅打印一次 '界面已更新'
state.a = 'a'
state.g.b = 'b'
state.g.f.c = 'c'
console.log(state)
