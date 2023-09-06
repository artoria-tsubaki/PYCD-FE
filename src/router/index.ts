import {  createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@v/homepage/index.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@v/profile/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router