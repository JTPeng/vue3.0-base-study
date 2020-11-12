import Axios from 'axios';
import { reactive, ref, toRefs } from 'vue';

// // ref
export default function useHttpRequest<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  Axios.get(url).then((res) => {
    result.value = res.data.message
    loading.value = false
    loaded.value = true
  }).catch(err => {
    error.value = err
  })
  return {
    result,
    loading,
    loaded,
    error
  }
}

// reactive
// export default function useHttpRequest<T>(url: string) {
//   const data = reactive({
//     result: null,
//     loading: true,
//     loaded: false,
//     error: null
//   })

//   Axios.get(url).then((res) => {
//     data.result = res.data.message
//     data.loading = false
//     data.loaded = true
//   }).catch(err => {
//     data.error = err
//   })
//   return {
//     ...toRefs(data)
//   }
// }