import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../components/button.vue')
  },
  {
    path: '/flex',
    name: 'flex',
    component: () => import('../components/flex.vue')
  },
  {
    path: '/overlay',
    name: 'overlay',
    component: () => import('../components/overlay.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('../components/popup.vue')
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})