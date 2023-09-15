import i18n from '@clubcapra/plugins/i18n';
import type { RouteRecordRaw } from 'vue-router';

import Home from './HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: i18n.global.t('page_home'),
    },
  },
  {
    path: '/robots',
    name: 'robots',
    component: () => import('./RobotsView.vue'),
    meta: {
      title: i18n.global.t('page_robots'),
    },
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('./TeamView.vue'),
    meta: {
      title: i18n.global.t('page_team'),
    },
  },
  {
    path: '/competitions',
    name: 'competition',
    component: () => import('./CompetitionView.vue'),
    meta: {
      title: i18n.global.t('page_competitions'),
    },
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('./PartnersView.vue'),
    meta: {
      title: i18n.global.t('page_partners'),
    },
  },
  {
    path: '/ressources',
    name: 'ressources',
    component: () => import('./RessourcesView.vue'),
    meta: {
      title: i18n.global.t('page_ressources'),
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./ContactView.vue'),
    meta: {
      title: i18n.global.t('page_contact'),
    },
  },
];

export { routes };
