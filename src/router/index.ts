import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from '@/pages/index/Index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/demo',
    component: () => import('@/pages/demo/Demo.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
