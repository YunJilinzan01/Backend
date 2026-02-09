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
      redirect: '/index/pascalCase',
      component: () => import('@/views/index/indexView.vue'),
      //权限没有登录不能访问
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'pascalCase',
          name: 'pascalCase',
          component: () => import('@/views/index/PascalCase/PascalCase.vue'),
        },
        {
          path: 'userManagement',
          name: 'userManagement',
          component: () => import('@/views/index/UserManagement/UserManagement.vue'),
          meta: {
            requiresAuth: true //需要特殊权限才能访问
          }
        },
        {
          path: "post",
          name: "post",
          component: () => import('@/views/index/post/postView.vue'),
        }

      ],
    },
  ],
})

// router.beforeEach((to) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
//   const isAuthenticated = !!localStorage.getItem('token')

//   if (requiresAuth && !isAuthenticated) {
//     return { path: '/login' }
//   }
// })

export default router
