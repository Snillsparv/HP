import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.hpakuten.se',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  security: {
    checkOrigin: false,
  },
});
