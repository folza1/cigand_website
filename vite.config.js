import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';


export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        legacy({
            targets: ['defaults'], // Megadhatod, hogy mely böngészőket támogasson
          }),
    ],
});
