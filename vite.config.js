import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss'],
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, './src/pages/login/index.html'),
        main: resolve(__dirname, './src/pages/main/index.html'),
        profile: resolve(__dirname, './src/pages/profile/index.html'),
        search: resolve(__dirname, './src/pages/search/index.html'),
        signup: resolve(__dirname, './src/pages/signup/index.html'),
        findID: resolve(__dirname, './src/pages/findID/index.html'),
        findPW: resolve(__dirname, './src/pages/findPW/index.html'),
      },
    },
  },
});
