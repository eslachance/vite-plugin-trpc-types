import type { Plugin } from 'vite';

export interface TrpcTypesPluginOptions {
  /**
   * Path to the server directory containing your tRPC router
   * @default '../server'
   */
  serverPath?: string;
  
  /**
   * Name of the router file (without extension)
   * @default 'router'
   */
  routerFile?: string;
  
  /**
   * Virtual module name for importing types
   * @default '@server/types'
   */
  virtualModuleName?: string;
  
  /**
   * Whether to watch server files for changes
   * @default true
   */
  watch?: boolean;
  
  /**
   * Additional files to watch for changes (relative to serverPath)
   * @default []
   */
  watchFiles?: string[];
  
  /**
   * Custom logger function
   * @default console.log
   */
  logger?: (message: string) => void;
  
  /**
   * Whether to enable debug logging
   * @default false
   */
  debug?: boolean;
}

export type VitePlugin = Plugin; 
