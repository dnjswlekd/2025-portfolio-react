import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/2025-portfolio-react/',
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(
          new URL('.', import.meta.url).pathname,
          'index.html'
        ),
      },
    },
  },
});
