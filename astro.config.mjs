import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  site: 'https://unsplash-api-astro.vercel.app',
  integrations: [tailwind()],
  adapter: vercel()
});