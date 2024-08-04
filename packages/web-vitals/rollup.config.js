const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

module.exports = withNx(
  {
    main: './src/index.ts',
    additionalEntryPoints: ['./src/next.ts', './src/browser.ts'],
    generateExportsField: true,
    outputPath: '../../dist/packages/web-vitals',
    compiler: 'swc',
    tsConfig: './tsconfig.lib.json',
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'next/navigation',
      'next/web-vitals',
    ],
    format: ['esm', 'cjs'],
    assets: ['packages/web-vitals/README.md'],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
    output: {
      banner: (chunk) => {
        if (chunk.facadeModuleId?.endsWith('next.ts')) {
          return `'use client';`;
        }
      },
    },
  },
);
