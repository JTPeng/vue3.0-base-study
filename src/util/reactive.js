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
let arr = [
  { id: '1', name: 'jack' },
  { id: '2', name: 'tim' },
]

// let state = reactive(obj)

// state.a = 'a'
// state.g.b = 'b'
// state.g.f.c = 'c'

let state = reactive(arr)
state[0].name = 'tom'
state[1].name = 'king'
console.log(state)
