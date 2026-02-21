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
    path: '/:id',
    name: 'PostDetails',
    component: PostDetailsView,
    props: true, // this is to recive the paramas as regular props
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
