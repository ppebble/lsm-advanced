import { css } from 'styled-system/css';

export const portfolioStyles = {
	container: css({
		mx: 'auto',
		py: { base: '8', md: '16' },
		width: '100vw',
		px: { base: '4', md: '6' },
	}),
	mainContainer: css({
		borderBottom: '1px solid token(colors.gray.200)',
		'&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
		display: 'flex',
		gap: '6',
		mb: '8',
		pb: '2',
	}),
	tabfolderContainer: css({
		flexShrink: '0',
		padding: { base: '8px 16px', md: '12px 24px' },
		borderBottom: '2px solid transparent',
		_hover: { borderColor: 'gray.400' },
		_selected: { borderColor: 'amber.500', fontWeight: 'bold' },
	}),
	itemContainer: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', md: 'repeat(6, 1fr)' },
		gap: { base: '4', md: '6' },
	}),
	item: css({
		height: '300px',
		bg: 'white',
		rounded: 'xl',
		boxShadow: 'md',
		width: '100%',
	}),
};
