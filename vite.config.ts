import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: '.', // 프로젝트 루트를 명시적으로 설정
    publicDir: 'public', // 정적 파일 폴더
    server: {
        port: 3000,  // 포트 변경
    },
});
