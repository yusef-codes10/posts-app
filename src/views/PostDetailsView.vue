<script setup>
// import { useRoute } from 'vue-router'
import { defineProps } from 'vue'

// we are using the useRoute() instead of as props, gonna skip as props for now
// const route = useRoute()

// console.log(route.params.id)

const { slug } = defineProps({
  id: {
    type: String,
    required: true,
  },
})

import { useStore } from '@/stores/store.js'

const myStore = useStore()

// find the posts
const id = Number(slug)
const currentPost = myStore.posts.find((post) => post.id === id)
console.log(currentPost)
</script>

<template>
  <div class="post-details">
    Hey
    <br />
    This is your params
    <b>
      {{ id }}
    </b>
    <br />
    and the post is {{ currentPost.title }}
    <!-- TODO: next we wanna aceess the component properties and send them as props  -->
  </div>
</template>

<style scoped>
.post-details {
  min-height: calc(100vh - 37px);
  background-color: lawngreen;
}
</style>
