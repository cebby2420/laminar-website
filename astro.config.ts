import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpine from '@astrojs/alpinejs';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [alpine({ entrypoint: 'src/entrypoint' }), tailwind(), compress()],
  site: 'https://cebby2420.github.io',
  base: '/laminar-website/',
});
