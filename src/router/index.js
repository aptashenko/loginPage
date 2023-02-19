import MainPage from '@/components/MainPage'
import LoginPage from '@/components/LoginPage'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', component: LoginPage },
    { path: '/user', component: MainPage },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
