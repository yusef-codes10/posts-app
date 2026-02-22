// this is the pinia store
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  // * state
  const posts = ref([])

  //   * actions
  ;async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      posts.value = data.posts.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        views: post.views,
        userId: post.userId,
      }))
      console.log(posts.value)
    } catch (error) {
      console.log(error)
    }
  }

  return { posts }
})
