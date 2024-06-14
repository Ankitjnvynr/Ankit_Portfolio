import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  alias: {
    'react-router-dom': 'node_modules/react-router-dom/index',
  },
});
