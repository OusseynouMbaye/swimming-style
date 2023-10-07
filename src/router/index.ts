import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SwimmingStyleDetailsView from '@/components/SwimmingStyleDetails.vue'
import PostsView from '@/views/PostsView.vue'
import CounterView from '@/views/CounterView.vue'
import AboutView from '../views/AboutView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostDetailView from '@/views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/swimming-styles/:id',
      name: 'swimming-style-details',
      component: SwimmingStyleDetailsView,
      props: true
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView //() => import('../views/ModalsView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView //() => import('../views/PostDetailView.vue') not good for lazy loading
    }
  ]
})

export default router
