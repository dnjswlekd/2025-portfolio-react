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
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능하도록 설정
    port: 5173,
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
