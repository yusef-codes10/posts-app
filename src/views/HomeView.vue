<script setup>
// fetch out data here
import MyPost from '@/components/MyPost.vue'
import { ref, onMounted } from 'vue'

import store from '@/stores/store.js'

const myStore = store()

const posts = ref([])
console.log(posts)

onMounted(async () => {
  if (myStore.posts.length === 0) {
    myStore.fetchPosts()
  }
})
</script>

<template>
  <div class="home">
    <MyPost
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 37px);
  background-color: crimson;
}
</style>
