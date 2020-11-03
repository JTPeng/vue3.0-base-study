function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, val) {
      obj[key] = obj[key]
      console.log('只读数据')
      // return true
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

let state = shallowReadonly(obj)
state.a = 'a'
state.g.b = 'b'
state.g.f.c = 'c'
console.log(state)
