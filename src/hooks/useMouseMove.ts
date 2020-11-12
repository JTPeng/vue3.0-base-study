import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';

// reactive
// export default function useMouseMove() {
//   const mousePosition = reactive({ x: 0, y: 0 })
//   const updatePosition = (e: MouseEvent) => {
//     mousePosition.x = e.pageX
//     mousePosition.y = e.pageY
//   }

//   onMounted(() => {
//     document.addEventListener('click', updatePosition)
//   })
//   onUnmounted(() => {
//     document.removeEventListener('click', updatePosition)
//   })
//   return {
//     ...toRefs(mousePosition)
//   }
// }
// ref
export default function useMouseMove() {
  // const mousePosition = reactive({ x: 0, y: 0 })
  const x = ref(0)
  const y = ref(0)
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updatePosition)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updatePosition)
  })
  return {
    x, y
  }
}