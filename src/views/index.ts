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
    path: '/team',
    name: 'team',
    component: () => import('./TeamView.vue'),
    meta: {
      title: i18n.global.t('page_team'),
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
    path: '/publications',
    name: 'publications',
    component: () => import('./PublicationsView.vue'),
    meta: {
      title: i18n.global.t('page_publications'),
    },
  },
  {
    path: '/join/:id?',
    name: 'join',
    component: () => import('./JoinView.vue'),
    meta: {
      title: i18n.global.t('page_join'),
    },
  },
  {
    path: '/projets/:id?',
    name: 'Projets',
    component: () => import('./ProjetsView.vue'),
    meta: {
      title: i18n.global.t('page_projets'),
    },
  },
];

export { routes };
