import path from 'path';
import { gzip } from 'zlib';

import pandaPostcss from '@pandacss/dev/postcss';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react(),
		visualizer({
			open: true,
			gzipSize: true,
		}) as PluginOption,
	],
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
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@assets/img': path.resolve(__dirname, './src/assets/img'),
			'styled-system': path.resolve(__dirname, './styled-system'),
			'styled-system/patterns': path.resolve(__dirname, './styled-system/patterns'),
		},
	},
	css: {
		postcss: {
			plugins: [pandaPostcss],
		},
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 4173,
	},
});
