import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import PostDetailsView from '@/views/PostDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/:slug',
    name: 'PostDetails',
    component: PostDetailsView,
    props: true,
    // this is to recive the paramas as regular props
    // 0 dependency on vue router. It just receives a prop like any other component would. You could even render it manually in tests by passing id directly without any routing involved.
  },
  // * re-direct
  {
    path: '/posts', // this is the old path to change to home
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
