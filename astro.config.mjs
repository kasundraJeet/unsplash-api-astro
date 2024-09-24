import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  site: '',
  integrations: [tailwind(), sitemap()]
});