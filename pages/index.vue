<template>
    <div class="container">
        <the-intro />
        <p v-if="loading">Загрузка...</p>
        <!-- <p v-else>{{ posts }}</p> -->

        <post-list v-else :posts="posts" />

    </div>
</template>

<script setup>
    import PostList from '../components/Blog/PostList.vue'
    import { useBlogStore } from '@/stores/blog'
    import {ref, computed} from 'vue'

    const loading = ref(true)
    const blogStore = useBlogStore()
    
    loadingPosts()
    
    const posts = computed(() => {
        return blogStore.getPosts
    })

    async function loadingPosts() {
        await blogStore.loadPosts()
        loading.value = false
    }

</script>