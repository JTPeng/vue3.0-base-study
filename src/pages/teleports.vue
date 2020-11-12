<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <slot></slot>
      <button @click="handleClick">Close</button>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean
    }
  },
  emits: {
    'close-modal': null
  },
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit('close-modal')
    }
    return {
      handleClick
    }
  }
})
</script>

<style>
.center {
  position: fixed;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  border: 1px solid slateblue;
  transform: translate(-50%, -50%);
}
</style>