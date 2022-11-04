<template>
  <div class="container">
    <!-- <p v-if="pending">Загрузка...</p> -->
    <post class="my-5" :post="post" />
  </div>
</template>

<script setup>
import Post from "@/components/Blog/Post.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

const route = useRoute();

const post = ref(null)
const res = await $fetch(`https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${route.params.id}.json`)
post.value = res

</script>
