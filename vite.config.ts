import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
	},
	css: {
		postcss: './postcss.config.js',
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 4173,
	},
});
