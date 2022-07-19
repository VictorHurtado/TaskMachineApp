import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    Icons({
      compiler: 'jsx', // 'vue2', 'vue3', 'jsx'
      jsx: 'react', // 'react' or 'preact'
    }),
  ],
  base: '/app/',
  server: {
    port: 5001,
    https: false,
  },
  preview: {
    base: '/app/',
    open: true,
    port: 8080,
    https: false,
  },
  build: {
    minify: 'esbuild',
    target: "esnext"
  }
});
