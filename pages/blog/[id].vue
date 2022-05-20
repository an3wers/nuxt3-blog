<template>
  <div class="container">
    <post class="my-5" :post="getPost" />
  </div>
</template>

<script setup>
import Post from "@/components/Blog/Post.vue";
import {useRoute} from 'vue-router'
import {computed} from 'vue'

const route = useRoute()

const { data: post, pending } = await useFetch(`https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${route.params.id}.json`)

const getPost = computed(() => {
    return post.value
})

</script>
