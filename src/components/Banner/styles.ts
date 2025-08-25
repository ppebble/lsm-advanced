import { css } from 'styled-system/css';

export const bannerStyles = {
	mainImage: css({
		bgImage: `url(@assets/img/id01.jpg)`,
		bgSize: 'cover',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		textAlign: 'center',
		height: { base: '300px', md: '500px' },
	}),
	mainPhrase: css({
		fontSize: { base: '3xl', md: '5xl' },
		fontWeight: 'bold',
		textShadow: '0 2px 4px rgba(0,0,0,0.5)',
		color: 'gray.200',
	}),
	btnInquiry: css({
		mt: '6',
		px: '6',
		py: '3',
		bg: 'orange.500',
		color: 'white',
		rounded: 'md',
		_hover: { bg: 'orange.600' },
	}),
};
