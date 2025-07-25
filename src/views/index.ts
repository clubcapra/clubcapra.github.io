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
    path: '/members',
    name: 'members',
    component: () => import('./MembersView.vue'),
    meta: {
      title: i18n.global.t('page_members'),
    },
  },
  {
    path: '/next-competition',
    name: 'next-competition',
    component: () => import('./NextCompetitionView.vue'),
    meta: {
      title: i18n.global.t('page_next_competition'),
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
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./DashboardView.vue'),
    meta: {
      title: 'Dashboard',
    },
  },
];

export { routes };
