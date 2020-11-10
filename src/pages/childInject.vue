<template>
  <div>
    <p>
      {{ componentName }}
    </p>
    <p>
      {{ injectOne }}
    </p>
    <p>
      {{ injectTwo.post }}
      {{ injectTwo.time }}
    </p>
    <p>newInject:{{newInject}}</p>
    <button @click="handleClick">child</button>
  </div>
</template>

<script>
import { inject, reactive, ref, toRaw, toRefs } from 'vue'
export default {
  setup() {
    const componentName = ref('inject')
    const injectOne = inject('http')
    const injectTwo = inject('localhost')
    const newInject = reactive({...injectTwo})
    function handleClick() {
      // console.log(injectTwo)
      injectTwo.post += 1
      // newInject.post += 1
    }
    return {
      componentName,
      injectOne,
      injectTwo,
      handleClick,
      newInject
    }
  }
}
</script>

<style scoped>
</style>