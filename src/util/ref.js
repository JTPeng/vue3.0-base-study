function ref(obj) {
  return reactive({ value: obj })
}
function reactive(data) {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        if (typeof item === 'object') {
          data[index] = reactive(item)
        }
      })
    } else {
      for (let key in data) {
        let item = data[key]
        if (typeof item === 'object') {
          data[key] = reactive(item)
        }
      }
    }
    return new Proxy(data, {
      get(data, key) {
        return data[key]
      },
      set(data, key, val) {
        data[key] = val
        console.log('数据已更新')
        return true
      },
    })
  } else {
    console.log('data is not Object')
  }
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
let state = ref(obj)

state.value.a = '1'
state.value.g.b = 'b'
state.value.g.f.c = 'c'
console.log(state)
