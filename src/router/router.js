import { createRouter, createWebHistory } from 'vue-router'

import Home from '../example/home/index';
import Button from '../example/button/index';
import Flex from '../example/flex/index';

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/button",
    component: Button,
    name: "button"
  },
  {
    path: "/flex",
    component: Flex,
    name: "flex"
  },
];

const routerHistory = createWebHistory()

const router = new createRouter({
  history: routerHistory,
  routes
});

export default router;