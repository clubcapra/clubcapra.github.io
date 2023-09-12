/* eslint spaced-comment: off */
/// <reference types="vite/client" />

// Vuetify color fix.
declare module 'vuetify/lib/util/colors.mjs';

// Fullpage.js fix.
declare module 'vue-fullpage.js';

// Matomo fix.
declare module 'vue-matomo';

// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  MATOMO_INSTANCE_URL: string;
  MATOMO_SITE_ID: string;
}

// eslint-disable-next-line no-unused-vars
interface Window {
  _paq?: {
    push: (args: string[]) => void;
  };
}
