import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // Allow serving files from the root node_modules (for @sveltejs/kit client runtime)
      allow: ['..', '../../../node_modules']
    }
  }
});
