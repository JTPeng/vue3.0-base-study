<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RefUse msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RefUse from "@/components/RefUse.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    RefUse
  }
});
</script>
