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
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../components/gallery.vue')
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('../components/badge.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('../components/preview.vue')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('../components/tag.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('../components/checkbox.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('../components/radio.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('../components/switch.vue')
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../components/slider.vue')
  },
  {
    path: '/rate',
    name: 'rate',
    component: () => import('../components/rate.vue')
  },
  {
    path: '/sharesheet',
    name: 'share-sheet',
    component: () => import('../components/share-sheet.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('../components/picker.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../components/input.vue')
  },
  {
    path: '/watermark',
    name: 'watermark',
    component: () => import('../components/watermark.vue')
  },
  {
    path: '/noticebar',
    name: 'noticebar',
    component: () => import('../components/noticebar.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})