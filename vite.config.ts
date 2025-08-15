import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
	},
	resolve: {
		alias: {
			'styled-system': '/styled-system', // 절대 경로 추가
			'@/components': path.resolve(__dirname, './src/components'),
		},
	},
	css: {
		postcss: {
			plugins: [require('@pandacss/dev/postcss')],
		},
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 4173,
	},
});
