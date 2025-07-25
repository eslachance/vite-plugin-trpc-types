import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { trpcTypesPlugin } from 'vite-plugin-trpc-types';

export default defineConfig({
  plugins: [
    react(),
    trpcTypesPlugin({
      serverPath: '../backend',
      routerFile: 'api',
      virtualModuleName: '@api/types',
      watchFiles: ['schemas/user.ts', 'schemas/event.ts'],
      debug: true,
      logger: (msg) => console.log(`🔗 ${msg}`),
    }),
  ],
}); 