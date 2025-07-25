# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added
- Initial release of vite-plugin-trpc-types
- Virtual module system for clean tRPC type imports
- Real-time file watching and HMR support
- Configurable options for different project structures
- TypeScript support with full type safety
- Debug logging and custom logger support
- Support for additional watch files
- Comprehensive documentation and examples

### Features
- `serverPath` - Path to server directory
- `routerFile` - Name of router file (default: 'router')
- `virtualModuleName` - Virtual module name (default: '@server/types')
- `watch` - Enable file watching (default: true)
- `watchFiles` - Additional files to watch
- `logger` - Custom logger function
- `debug` - Enable debug logging

### Examples
- Basic configuration
- Advanced configuration with custom options
- Different project structure examples 