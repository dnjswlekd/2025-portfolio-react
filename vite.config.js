import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// import.meta.url을 사용하여 __dirname 대신 현재 파일의 경로를 가져오기
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'), // src 디렉토리를 @로 설정
    },
  },
});
