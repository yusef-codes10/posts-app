<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)

import { useStore } from '@/stores/store.js'

const myStore = useStore()

// find the posts
const currentPost = myStore.posts.find((post) => post.id === route.params.id)
console.log(currentPost)
</script>

<template>
  <div class="post-details">
    Hey
    <br />
    This is your params
    <b>
      {{ route.params.id }}
    </b>
    <br />
    and the post is {{}}
    <!-- TODO: next we wanna aceess the component properties and send them as props  -->
  </div>
</template>

<style scoped>
.post-details {
  min-height: calc(100vh - 37px);
  background-color: lawngreen;
}
</style>
