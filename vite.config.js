import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  build: {
    outDir: 'dist', // Specify the output directory where the build files will be generated
    rollupOptions: {
      external: ['react-router-dom'], // Specify dependencies to be treated as external and not bundled
    },
  },
  server: {
    open: true, // Open the browser when running the development server
  },
  resolve: {
    alias: {
      // Optional: Add alias for specific paths
      '@': '/src',
    },
  },
});

