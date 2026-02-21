<script setup>
import { defineProps } from 'vue'

defineProps({
  id: {
    type: Number,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

// access the router params
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
</script>

<template>
  <div class="post">
    <div class="title">
      <RouterLink :to="{ name: 'PostDetails', params: { id: id } }">
        <h1>{{ title }}</h1>
      </RouterLink>
    </div>
    <div class="content">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.post {
  border: 2px solid #000;
  margin: 1rem;
}
</style>
