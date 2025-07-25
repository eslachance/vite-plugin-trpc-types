# Publishing Guide

## Pre-publishing Checklist

- [x] Plugin builds successfully (`npm run build`)
- [x] Tests pass (`node test-plugin.js`)
- [x] Package contents are correct (`npm pack --dry-run`)
- [x] Documentation is complete
- [x] License is included
- [x] GitHub workflows are set up

## Publishing Steps

### 1. Update Version

```bash
npm version patch  # or minor/major
```

### 2. Build and Test

```bash
npm run build
node test-plugin.js
```

### 3. Publish to npm

```bash
npm publish
```

### 4. Create GitHub Release

The GitHub workflow will automatically create a release when you push a tag.

## Manual Release (if needed)

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Package Contents

The published package includes:
- `dist/index.js` - Compiled plugin
- `dist/index.d.ts` - TypeScript definitions
- `README.md` - Documentation
- `LICENSE` - MIT License
- `package.json` - Package metadata

## Post-publishing

1. Update the main project to use the published package
2. Test the published package in a new project
3. Monitor for any issues or feedback 