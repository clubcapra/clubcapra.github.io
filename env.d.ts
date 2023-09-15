/* eslint-disable no-unused-vars */
/* eslint spaced-comment: off */
/// <reference types="vite/client" />

// Vuetify color fix.
declare module 'vuetify/lib/util/colors.mjs';

// Fullpage.js fix.
declare module 'vue-fullpage.js';

// Matomo fix.
declare module 'vue-matomo';

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  VITE_MATOMO_INSTANCE_URL: string;
  VITE_MATOMO_SITE_ID: string;
}

// Vue Router meta data fix.
import 'vue-router';
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Title of the page.
     */
    title: string;
  }
}

interface Window {
  _paq?: {
    push: (args: string[]) => void;
  };
}
