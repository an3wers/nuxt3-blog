<template>
  <div class="container">
    <h1 class="my-5">Admin dashboard</h1>
  </div>
</template>

<script setup>
useHead({
  title: "My admin page",
});

definePageMeta({
  layout: "admin",
  middleware: ['auth']

});
</script>
