import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
		assetsInlineLimit: 0,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.indexOf('node_modules') !== -1) {
						const module = id.split('node_modules/').pop()?.split('/')[0];
						return `vendor_${module}`;
					}
				},
			},
		},
	},
	resolve: {
		alias: {
			'styled-system': '/styled-system', // 절대 경로 추가
			'styled-system/patterns': './styled-system/patterns',
			'@/components': path.resolve(__dirname, './src/components'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@': '/src',
			'@assets': '/src/assets',
			'@assets/img': '/src/assets/img',
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
