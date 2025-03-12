import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

const isSsrBuild = process.argv.includes('--ssr');

export default defineConfig({
  plugins: [solid({
    ssr: isSsrBuild,
    solid: {
      hydratable: true
    }
  })],
  build: {
    target: 'esnext',
    outDir: 'dist',
    ssr: isSsrBuild ? './src/entry-server.jsx' : undefined,
    emptyOutDir: !isSsrBuild,
    rollupOptions: {
      input: isSsrBuild ? './src/entry-server.jsx' : {
        main: './index.html',
        'entry-client': './src/entry-client.jsx'
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  ssr: {
    noExternal: ['@solidjs/router']
  }
}); 