import type { RouteRecordRaw } from 'vue-router';

import Home from './HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'page_home',
    },
  },
  {
    path: '/robots',
    name: 'robots',
    component: () => import('./RobotsView.vue'),
    meta: {
      title: 'page_robots',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('./TeamView.vue'),
    meta: {
      title: 'page_team',
    },
  },
  {
    path: '/competitions',
    name: 'competition',
    component: () => import('./CompetitionView.vue'),
    meta: {
      title: 'page_competitions',
    },
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('./PartnersView.vue'),
    meta: {
      title: 'page_partners',
    },
  },
  {
    path: '/ressources',
    name: 'ressources',
    component: () => import('./RessourcesView.vue'),
    meta: {
      title: 'page_ressources',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./ContactView.vue'),
    meta: {
      title: 'page_contact',
    },
  },
];

export { routes };
