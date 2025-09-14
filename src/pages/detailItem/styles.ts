import { css } from 'styled-system/css';

export const detailPageStyles = {
	container: css({
		maxW: '80vw',
		mx: 'auto',
		px: '4',
		py: '8',
	}),
	imageContainer: css({
		position: 'relative',
		mb: '8',
		rounded: 'lg',
		overflow: 'hidden',
		bg: 'gray.100',
	}),
	image: css({
		w: 'full',
		h: 'full',
		objectFit: 'cover',
	}),
	contentSection: css({
		display: 'grid',
		gridTemplateColumns: {
			base: 'repeat(1, minxmax(100%, 1fr))',
			'2xl': 'repeat(3,minmax(33%, 1fr))',
		},
		gap: '8',
	}),
	contentGrid: css({
		display: 'grid',
		gridTemplateColumns: {
			base: '1fr',
			lg: '2fr 1fr',
		},
		gap: '8',
	}),
};
