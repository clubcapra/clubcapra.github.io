// Load vue core
import { createApp } from 'vue';
import router from './router';
import store from './store';

// Load Plugins
import fullPage from './plugins/fullpage';
import i18n from './plugins/i18n';
import VueMatomo from 'vue-matomo';

// Tailwind CSS
import './index.css';

// Load Layout vue.
import App from './App.vue';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(fullPage);
vue.use(i18n);
if (import.meta.env.VITE_MATOMO_INSTANCE_URL) {
  vue.use(VueMatomo, {
    host: import.meta.env.VITE_MATOMO_INSTANCE_URL,
    siteId: import.meta.env.VITE_MATOMO_SITE_ID,
  });
}

// Run!
router.isReady().then(() => {
  vue.mount('#app');
  window._paq?.push(['trackPageView']);
});
