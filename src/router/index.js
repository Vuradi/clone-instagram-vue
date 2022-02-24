import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../views/Profile.vue';
import Messenger from '../views/Messenger.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/messenger',
    name: 'Messenger',
    component: Messenger,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
