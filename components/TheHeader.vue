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
        <li class="nav-item">
          <NuxtLink class="btn btn-primary" to="/auth">Sign in</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>