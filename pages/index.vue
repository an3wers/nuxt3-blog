<template>
    <div class="container">
        {{ testStore.test }}
    </div>
</template>

<script setup> 
import { useBlogStore } from '@/stores/blog'

const testStore = useBlogStore()

</script>