<template>
  <div>
    <the-header />
    <NuxtPage />
  </div>
</template>

<script setup>
import {authStore} from '@/stores/auth'

const userStore = authStore()

</script>
