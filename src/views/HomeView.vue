<script setup>
// fetch out data here
import MyPost from '@/components/MyPost.vue'
import { ref, onMounted } from 'vue'

import { useStore } from '@/stores/store.js'

const myStore = useStore()

const posts = ref([])
console.log(posts)

onMounted(async () => {
  //  TODO we have to try and fetch again but by id when needed
  if (myStore.posts.length === 0) {
    myStore.fetchPosts()
  }
})
</script>

<template>
  <div class="home">
    <MyPost
      v-for="post in myStore.posts"
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
