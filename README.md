# vite-plugin-trpc-types

Why hello there! I see you've stumbled on this NPM package out of the blue, and you're probably wondering if this is the thing you've been looking for, or just another
thing nobody will ever care about. So stay a while, and listen! Here's the story all about how my life got twisted upside down *when I tried to use tRPC for the first time*.

So here's the down-low: tRPC is really awesome, but it still feels like it's in early stages sometimes. I really love it, it's just amazing from every direction...
except when I tried to build my front-end app with `npm run build` and I got errors in the *backend typescript* about unused variables because my frontend tsconfig forbids
them but not my backend config. So I went "what the HECK?", and after some digging and a lot of talking, I finally realized what was going on. 

See, every tRPC implementation you've seen, always tells you to `import type { AppRouter } from '../../../server/router';` so that you can get all the fancy autocomplete when
you start typing `trpcClient.myrouter.myprocedure`. It's really great, except when your typescript build takes this as an excuse to run the entire backend because you imported
one single file. 

Ok. That's enough whining about it. Now why you're here: the solution. So here it is : A Vite plugin for seamless tRPC type synchronization between client and server. No more relative imports, no build complexity, just real-time type safety.

## 🚀 Features

- **Real-time Type Synchronization** - Server type changes are immediately reflected in the client
- **Virtual Module System** - Clean imports without build dependencies
- **Hot Module Replacement** - Automatic client updates when server types change
- **Configurable** - Flexible options for different project structures
- **TypeScript Support** - Full type safety with autocomplete and error checking
- **Zero Build Complexity** - No Turborepo or complex monorepo setup needed

## 📦 Installation

```bash
npm install vite-plugin-trpc-types
```

## 🎯 Quick Start

### 1. Basic Setup

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { trpcTypesPlugin } from 'vite-plugin-trpc-types';

export default defineConfig({
  plugins: [
    react(),
    trpcTypesPlugin({
      serverPath: '../server',
      watch: true,
    }),
  ],
});
```

### 2. Add Type Declarations

Create `src/types/server.d.ts` for better TypeScript support:

```typescript
declare module '@server/types' {
  // This prevents the language server from trying to execute the router
  export type AppRouter = typeof import('../../../server/trpc/router').appRouter;
}
```

### 3. Add typescript alias

Modify your `tsconfig.json` to include the following changes: 

Add the following:
```json
    "paths": {
      "@server/types": ["./src/types/server.d.ts"]
    },
```

And also add your ../server path to tsconfig so it doesn't try to run, lint, or load that folder. 
`  "exclude": ["../server", "node_modules", ...]`

### 4. ????

### 5. Profit! And Then, Use Clean Imports

```typescript
// Instead of relative imports like:
// import type { AppRouter } from '../../../server/router';

// Use clean imports:
import type { AppRouter } from '@server/types';

export const trpc = createTRPCReact<AppRouter>();
```

## ⚙️ Configuration

There's more configurations, blah blah, you probably don't even care about these to be honest, it's boring, but hey, it's good to have choices in life.

### Plugin Options

```typescript
trpcTypesPlugin({
  // Path to the server directory containing your tRPC router
  serverPath: '../server',
  
  // Name of the router file (without extension)
  routerFile: 'router',
  
  // Virtual module name for importing types
  virtualModuleName: '@server/types',
  
  // Whether to watch server files for changes
  watch: true,
  
  // Additional files to watch for changes (relative to serverPath)
  watchFiles: ['types.ts', 'schemas.ts'],
  
  // Custom logger function
  logger: (message) => console.log(`[MyApp] ${message}`),
  
  // Whether to enable debug logging
  debug: false,
})
```

### Advanced Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { trpcTypesPlugin } from 'vite-plugin-trpc-types';

export default defineConfig({
  plugins: [
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
```

## 🏗️ Project Structure Examples

If you haven't noticed the hints by now, btw, this entire thing is mostly written by AI including this README. I'm not saying I *couldn't* have written this without it, but I can sure be thankful it took me about as much time making this work, as it did updating this readme with a little human touch. Anyways, here's how Cursor/Claude/Sonnet explains some of this stuff.

### Monorepo Structure
```
my-app/
├── client/
│   ├── vite.config.ts
│   └── src/
│       └── utils/trpc.ts
└── server/
    └── router.ts
```

### Separate Repos
```
client/
├── vite.config.ts
└── src/
    └── utils/trpc.ts

../server/
└── router.ts
```

## 🔄 How It Works

1. **Virtual Module**: Creates `@server/types` that TypeScript can resolve
2. **File Watching**: Monitors server directory for `.ts`/`.js` changes
3. **HMR Integration**: Invalidates modules when server types change
4. **Type Safety**: Provides full TypeScript support without build dependencies

## 🎨 Benefits Over Alternatives

### vs Turborepo
- ✅ No complex monorepo setup
- ✅ No shared node_modules
- ✅ Simpler configuration
- ✅ Faster builds

### vs Code Generation
- ✅ No build steps
- ✅ Real-time updates
- ✅ No generated files to manage
- ✅ Better developer experience

### vs Direct Imports
- ✅ No relative paths
- ✅ No TypeScript linting issues
- ✅ Clean architecture
- ✅ Better maintainability

## 🛠️ Development

### Building the Plugin

```bash
cd vite-plugin-trpc-types
npm install
npm run build
```

### Testing

```bash
npm run dev  # Watch mode for development
```

## 🔧 Troubleshooting

### TypeScript Version Conflicts

If you encounter TypeScript errors related to Vite plugin types, this plugin uses flexible type definitions to avoid version conflicts. The plugin is compatible with Vite 4.x and 5.x.

### Common Issues

1. **"No overload matches this call"** - This usually indicates a Vite version mismatch. The plugin now uses flexible types to resolve this.
2. **Module resolution errors** - Ensure your `serverPath` points to the correct directory containing your tRPC router.
3. **Type not found** - Make sure your server exports the types you're trying to import.

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Related

- [tRPC](https://trpc.io/) - End-to-end typesafe APIs
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types 
