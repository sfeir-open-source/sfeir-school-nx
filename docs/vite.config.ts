/// <reference types="vitest" />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';
import MarkdownHMR from './plugins/hmr-markdown';

export default defineConfig({
  cacheDir: '../node_modules/.vite/docs',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [nxViteTsPaths(), MarkdownHMR()],
});
