<script setup>
// fetch out data here
import MyPost from '@/components/MyPost.vue'
import { ref, onMounted } from 'vue'

const posts = ref([])
console.log(posts)

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts?limit=10')
    const data = await response.json()
    posts.value = data.posts.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }))
    console.log(posts.value)
  } catch (error) {
    console.log(error)
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
  height: calc(100vh - 37px);
  background-color: crimson;
}
</style>
