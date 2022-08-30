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
    path: '/cell',
    name: 'cell',
    component: () => import('../components/cell.vue')
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
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../components/tabs.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../components/navbar.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../components/icon.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../components/loading.vue')
  },
  {
    path: '/toptips',
    name: 'top-tips',
    component: () => import('../components/top-tips.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../components/dialog.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('../components/toast.vue')
  },
  {
    path: '/actionsheet',
    name: 'action-sheet',
    component: () => import('../components/action-sheet.vue')
  },
  {
    path: '/panel',
    name: 'panel',
    component: () => import('../components/panel.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import('../components/progress.vue')
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('../components/swiper.vue')
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})