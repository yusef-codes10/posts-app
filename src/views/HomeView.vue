<script setup>
// fetch out data here
import { ref, onMounted } from 'vue'

const posts = ref([])
console.log(posts)

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    posts.value = data.map((post) => {
      ;((id = post.id), (title = post.title), (body = post.body))
    })
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="home">This is the home View</div>
</template>

<style scoped>
.home {
  height: calc(100vh - 37px);
  background-color: crimson;
}
</style>
