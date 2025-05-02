// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react({
    experimentalReactChildren: true,
  })],
  site: 'https://noactionjaxn.github.io',
  env: {
    schema: {
      CAISY_API_KEY: envField.string({ context: "server", access: "secret"}),
      CAISY_PROJECT_ID: envField.string({ context: "server", access: "secret"}),
    },
    validateSecrets: true,
  }
});
