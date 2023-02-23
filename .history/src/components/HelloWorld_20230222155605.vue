<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const obj = { a: 1 }
</script>

<template>
  <h1>
    <button></button>
  </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
