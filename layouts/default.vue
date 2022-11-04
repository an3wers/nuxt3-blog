<template>
  <div>
    <the-header />
    <NuxtPage :key="$route.fullpath" />
  </div>
</template>

<script setup>
import {authStore} from '@/stores/auth'

const userStore = authStore()

</script>
