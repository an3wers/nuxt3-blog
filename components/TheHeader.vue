<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <NuxtLink class="navbar-brand" to="/">Nuxt.js 3 Site</NuxtLink>
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </li>

        <li v-if="getAuthUser" class="nav-item">
          <NuxtLink class="nav-link" to="/admin">Admin</NuxtLink>
        </li>

        <li v-if="getAuthUser" class="nav-item">
          <a class="nav-link" @click.prevent="logout" href="#">Logout</a>
        </li>

        <li v-if="!getAuthUser" class="nav-item">
          <NuxtLink class="btn btn-primary" style="margin-left: 0.5rem" to="/auth">Sign in</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {computed} from 'vue'
import {authStore} from '@/stores/auth'



export default {
  setup() {
    const userStore = authStore()

    const getAuthUser = computed(() => {
      return userStore.checkAuthUser
    })

    function logout() {
      userStore.logoutUser()
    }

    return {
      getAuthUser,
      logout
    }
  },
}
</script>