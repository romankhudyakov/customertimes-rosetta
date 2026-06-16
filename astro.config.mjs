import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rosetta.customertimes.com',
  build: { format: 'directory' },
  compressHTML: true,
});
