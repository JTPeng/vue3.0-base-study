<template>
  <div>
    <img :src="data && data.message" alt="" />
  </div>
</template>

<script>
import Axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  async setup() {
    const resultData = await Axios.get(
      'https://dog.ceo/api/breeds/image/random'
    )
    console.log(resultData)
    return {
      data: resultData.data
    }
  }
})
</script>

<style scoped>
</style>