import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: './tests/setup.js',
        coverage: {
            reporter: ['text', 'json', 'html'],
            all: true,
            include: ['src/**/*.js'],
            exclude: ['**/node_modules/**', '**/tests/**'],
        },
    },
});