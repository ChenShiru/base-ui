<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const obj = { a: 1 }
</script>

<template>
  <h6>button</h6>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
