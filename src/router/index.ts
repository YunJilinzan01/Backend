import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/loginView.vue'),
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/indexView.vue'),
      //权限没有登录不能访问
      meta: {
        requiresAuth: true,
      },
      children: [],
    },
  ],
})

export default router
