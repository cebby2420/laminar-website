import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpine from '@astrojs/alpinejs';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [alpine({ entrypoint: 'src/entrypoint' }), tailwind(), compress()],
});
