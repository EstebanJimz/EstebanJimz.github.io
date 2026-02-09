import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://EstebanJimz.github.io',
    // NO base path - este es tu repo principal de GitHub Pages
    build: {
        inlineStylesheets: 'auto',
    },
});
