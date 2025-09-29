import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	outdir: 'styled-system',
	include: ['./src/**/*.{ts,tsx}'],
	theme: {
		keyframes: {
			pulse: {
				'0%, 100%': { opacity: '1' },
				'50%': { opacity: '0.4' },
			},
		},
		extend: {
			tokens: {
				colors: {
					primary: { value: '#0FEE0F' },
					secondary: { value: '#EE0F0F' },
				},
				fonts: {
					sans: { value: 'Noto Sans KR, system-ui, sans-serif' },
				},
				fontWeights: {
					thin: { value: '100' },
					light: { value: '300' },
					demilight: { value: '350' },
					normal: { value: '400' },
					medium: { value: '500' },
					bold: { value: '700' },
					black: { value: '900' },
				},
			},
			breakpoints: {
				sm: '640px',
				md: '768px',
				lg: '1065px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	staticCss: {
		css: [
			{
				properties: {
					fontWeight: ['100', '300', '350', '400', '500', '700', '900'],
				},
			},
		],
	},

	// ▼ 글로벌 CSS 주입 (선택)
	globalCss: {
		body: {
			fontFamily: 'var(--font-noto-sans-kr)',
			fontWeight: '400',
		},
		a: {
			textDecoration: 'none',
			color: 'inherit',
			_hover: {
				textDecoration: 'none',
			},
			_focus: {
				outline: 'none',
			},
		},
		'a[href]': {
			textDecoration: 'none',
		},
		'html, body': {
			margin: 0,
			padding: 0,
			fontFamily: 'var(--font-noto-sans-kr)',
		},
		button: {
			border: 'none',
			background: 'none',
			cursor: 'pointer',
		},
		'ul, ol': {
			listStyle: 'none',
			padding: 0,
			margin: 0,
		},
	},
});
