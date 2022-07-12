import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import App from '../views/App.vue'

// console.debug(App)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: App,
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
