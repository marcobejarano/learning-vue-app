<template>
  <h1>404 - Page not found</h1>
  <p>Path: {{ route.path }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineOptions({
  inheritAttrs: false
})

const route = useRoute()
</script>
