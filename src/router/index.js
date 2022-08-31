import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue'
import mainMenu from "@/views/mainMenu";
import moduleMenu from "@/views/moduleMenu";
import usersMenu from "@/views/users/usersMenu";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mainMenu',
    name: 'mainMenu',
    component: mainMenu
  },
  {
    path: '/moduleMenu',
    name: 'moduleMenu',
    component: moduleMenu
  },
  {
    path: '/usersMenu',
    name: 'usersMenu',
    component: usersMenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router