<template>
  <div class="post">
    <div class="post-header">
      <h1>{{ post.title }}</h1>
      <img :src="post.imgUrl" class="my-3 img-fluid" alt="" />
      <p>{{ post.descr }}</p>
    </div>
    <div class="post-body">
      {{ post.content }}
    </div>
  </div>
</template>

<script setup>
    defineProps({
        post: {
            type: Object,
            required: true,
        }
    })
</script>