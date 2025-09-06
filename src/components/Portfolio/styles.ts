import { css } from 'styled-system/css';

export const portfolioStyles = {
	container: css({
		mx: 'auto',
		py: { base: '8', md: '16' },
		width: '95vw',
		px: { base: '4', md: '6' },
	}),
	mainContainer: css({
		borderBottom: '1px solid token(colors.gray.200)',
		'&::-webkit-scrollbar': { display: 'none' },
		display: 'flex',
		gap: '6',
		mb: '8',
		pb: '2',
	}),
	tabfolderContainer: css({
		flexShrink: '0',
		bgColor: 'blue.500',
		color: 'gray.200',
		roundedTop: '2xl',
		padding: { base: '8px 16px', md: '12px 24px' },
		borderBottom: '2px solid transparent',
		_hover: { borderColor: 'gray.400', bgColor: 'blue.700' },
		_selected: { borderColor: 'amber.500', fontWeight: 'bold' },
	}),
	itemContainer: css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', md: 'repeat(4, 1fr)' },
		gap: { base: '4', md: '6' },
	}),
	item: css({
		height: '300px',
		bg: 'white',
		rounded: 'xl',
		boxShadow: 'md',
		width: '100%',
		borderRadius: 'xl',
		border: '1px solid white',
		_hover: { transition: 'transform 0.4s ease', transform: 'scale(1.02)' },
	}),
	image: css({
		borderRadius: 'xl',
		border: '1px solid white',
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	}),
	descContainer: css({
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'background-color 0.3s ease',
		pointerEvents: 'none',
	}),
	descCard: (isActive: boolean) =>
		css({
			padding: '16px',
			textAlign: 'center',
			transition: 'opacity 0.3s ease',
			opacity: isActive ? 1 : 0,
		}),
	title: css({
		fontSize: '1.5rem',
		fontWeight: 'bold',
		marginBottom: '8px',
		color: 'gray.800',
	}),
	desc: css({
		color: 'gray.600',
		lineHeight: '1.5',
	}),
};
