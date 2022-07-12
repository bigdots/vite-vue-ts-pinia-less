import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from '../views/Index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/About',
    component: () => import('../views/About.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
