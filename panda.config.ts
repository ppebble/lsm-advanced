import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	outdir: 'styled-system',
	include: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			breakpoints: {
				sm: '640px',
				md: '768px',
				lg: '1065px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},

	// ▼ 모든 유틸리티 클래스 강제 생성
	staticCss: {
		css: [
			{
				properties: {
					// ▼ 필수: 사용할 모든 CSS 속성 범위 지정
					color: ['*'],
					fontSize: ['*'],
					backgroundColor: ['*'],
					fontFamily: ['*'],
					minHeight: ['*'],
					// ... 기타 필요한 속성
				},
			},
		],
	},

	// ▼ 글로벌 CSS 주입 (선택)
	globalCss: {
		':lang(ko)': {
			fontFamily: '{fonts.sansKr}',
		},
		':lang(en)': {
			'--font-sans': '{fonts.sans}',
		},
	},
});
