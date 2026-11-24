import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// outDir and assetsDir match the old Create React App layout, so the
// Cloudflare Pages output directory and the /static/* cache rule in
// public/_headers keep working unchanged.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    sourcemap: false,
  },
});
