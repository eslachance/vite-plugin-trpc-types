import { trpcTypesPlugin } from '../src';

describe('trpcTypesPlugin', () => {
  it('should create a plugin with default options', () => {
    const plugin = trpcTypesPlugin();
    
    expect(plugin.name).toBe('vite-plugin-trpc-types');
    expect(plugin.enforce).toBe('pre');
  });

  it('should create a plugin with custom options', () => {
    const plugin = trpcTypesPlugin({
      serverPath: '../backend',
      routerFile: 'api',
      virtualModuleName: '@api/types',
      debug: true,
    });
    
    expect(plugin.name).toBe('vite-plugin-trpc-types');
  });

  it('should resolve virtual module', () => {
    const plugin = trpcTypesPlugin();
    const resolveId = plugin.resolveId!;
    
    expect(resolveId('@server/types')).toBe('\0virtual:@server/types');
    expect(resolveId('@server/types.ts')).toBe('\0virtual:@server/types');
    expect(resolveId('other-module')).toBeNull();
  });
}); 