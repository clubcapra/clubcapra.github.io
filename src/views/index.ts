import type { RouteRecordRaw } from 'vue-router';

import Home from './HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/competition',
    name: 'competition',
    component: () => import('./CompetitionView.vue'),
  },
  {
    path: '/parners',
    name: 'partners',
    component: () => import('./PartnersView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./ContactView.vue'),
  },
];

export { routes };
