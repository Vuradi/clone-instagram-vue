import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../views/Profile.vue';
import Messenger from '../views/Messenger.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
