<template>
  <div class="admin-layout">
    <the-header />
    <NuxtPage />
  </div>
</template>

<script setup>
import {authStore} from '@/stores/auth'

// definePageMeta({
//   middleware: ["auturize-check"]
  
// })

const userStore = authStore()


</script>
