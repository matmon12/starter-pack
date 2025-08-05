import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const MainLayout = (): Promise<typeof import('@/app/layouts/MainLayout.vue')> =>
  import('@/app/layouts/MainLayout.vue')
const AppHome = (): Promise<typeof import('@/app/views/AppHome.vue')> =>
  import('@/app/views/AppHome.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/starter-pack/',
    name: 'MainLayout',
    alias: '/',
    component: MainLayout,
    children: [{ path: '', name: 'AppHome', component: AppHome }],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
