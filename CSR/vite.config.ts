import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      styles: resolve(__dirname, 'src/styles'),
    },
  },
});
