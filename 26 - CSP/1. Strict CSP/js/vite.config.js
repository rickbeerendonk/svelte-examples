import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    // Ensure no inline scripts or styles in production build
    cssCodeSplit: false
  },
  server: {
    headers: {
      // Dev mode: must allow 'unsafe-inline' because Vite injects inline scripts for HMR
      // With inline allowed: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'"
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'"
    }
  },
  preview: {
    headers: {
      // Strict CSP: block inline scripts and inline styles
      // With inline allowed: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'"
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'"
    }
  }
});

/* European Union Public License version 1.2 */
/* Copyright © 2026 Rick Beerendonk */
