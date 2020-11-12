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
    <p>newInject:{{ newInject }}</p>
    <button @click="handleClick">child</button>
    <button @click="childSub">减法</button>
    <button @click="multiplication">乘法</button>
  </div>
</template>

<script>
import { inject, onMounted, reactive, ref, toRaw, toRefs } from 'vue'
export default {
  emits: ['multip'],
  setup(props, { emit }) {
    const componentName = ref('inject')
    const injectOne = inject('http')
    const injectTwo = inject('localhost')
    const childSub = inject('sub')
    const newInject = reactive({ ...injectTwo })
    function handleClick() {
      // console.log(injectTwo)
      injectTwo.post += 1
      // newInject.post += 1
    }
    function multiplication() {
      emit('multip',2)
    }
    return {
      componentName,
      injectOne,
      injectTwo,
      handleClick,
      newInject,
      childSub,
      multiplication
    }
  }
}
</script>

<style scoped>
</style>