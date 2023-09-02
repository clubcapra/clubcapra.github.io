// Load vue core
import { createApp } from 'vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';

// Load Vuetify
import vuetify from './plugins/vuetify';

// Load Layout vue.
import App from './App.vue';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);
vue.use(i18n);

// Run!
router.isReady().then(() => {
  vue.mount('#app');
});
