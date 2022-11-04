<template>
    <div class="container">
        <the-intro />
        <p v-if="postLoading">Загрузка...</p>
        <p v-if="error">{{error.message}}</p>
        <!-- <p v-else>{{ posts }}</p> -->
        <post-list v-else :posts="posts" />

    </div>
</template>

<script setup>
    import PostList from '../components/Blog/PostList.vue'
    import { useBlogStore } from '@/stores/blog'
    import {ref, computed} from 'vue'
    import { storeToRefs } from 'pinia'

    const {posts, error, postLoading} = storeToRefs(useBlogStore())
    const {loadPosts} = useBlogStore()

    if(!posts.value.length) {
        loadPosts()
    }

</script>