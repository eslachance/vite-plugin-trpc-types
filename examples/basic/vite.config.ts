import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { trpcTypesPlugin } from 'vite-plugin-trpc-types';

export default defineConfig({
  plugins: [
    react(),
    trpcTypesPlugin({
      serverPath: '../server',
      debug: true,
    }),
  ],
}); 