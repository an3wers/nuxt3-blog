<template>
    <!-- Posts -->
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      <post-preview v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <!-- # Posts -->
</template>

<script setup>
import PostPreview from '@/components/Blog/PostPreview'

defineProps({
    posts: {
        type: Array,
        required: true
    }
})


</script>