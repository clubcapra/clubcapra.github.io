import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router';
import { nextTick } from 'vue';

// Pinia Store
import { useGlobalStore } from './store';

import { routes } from './views';

import i18n from './plugins/i18n';

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html}
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}
router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobalStore();
    // Show Loading
    globalStore.setLoading(true);
    await nextTick();
    const title = (_to.meta?.title as string) ?? 'page_home';
    document.title = i18n.global.t(title);
    next();
  }
);

// Global After Hooks
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks}
router.afterEach(() => {
  const globalStore = useGlobalStore();
  // Hide Loading
  globalStore.setLoading(false);
});

export default router;
