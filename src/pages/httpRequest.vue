<template>
  <div>
    <h1 v-if="loading">Loading....！</h1>
    <img v-if="loaded" :src="result" alt="result" />
  </div>
</template>

<script lang="ts">
import { watch } from 'vue'
import useHttpRequest from '../hooks/useHttpRequest'

interface DogProps {
  message: string
  status: string
}

interface CatProps {
  id: string
  url: string
  width: string
  height: string
}

export default {
  setup() {
    const url = 'https://dog.ceo/api/breeds/image/random'
    // const url = 'https://api.tecatapi.com/v1/images/search?limit=1'
    const { result, loading, loaded } = useHttpRequest<DogProps>(url)
    watch(result, () => {
      console.log(result.value?.message)
    })
    return {
      result,
      loading,
      loaded
    }
  }
}
</script>

<style scoped>
</style>