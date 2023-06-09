import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SwimmingStyleDetailsView from '@/components/SwimmingStyleDetails.vue'
// import CounterView from '@/views/CounterView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
      component: () => import('../views/CounterView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue')
    }
  ]
})

export default router
