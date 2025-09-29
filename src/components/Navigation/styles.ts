import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export const navigationStyles = {
	nav: css({
		position: 'sticky',
		top: '0',
		bg: 'white',
		shadow: 'sm',
		zIndex: '50',
		px: '3',
		py: '3',
		borderBottom: '1px solid token(colors.gray.200)',
	}),
	container: css({
		display: { base: 'none', lg: 'flex' },
		flex: '1',
		gap: '6',
		justifyContent: 'space-evenly',
	}),
	menu: css({
		px: '3',
		py: '2',
		fontWeight: 'medium',
		color: 'gray.700',
		_hover: {
			color: 'blue.600',
			transform: 'scale(1.05)',
		},
		transition: 'all 0.2s',
		position: 'relative',
		_after: {
			content: '""',
			position: 'absolute',
			bottom: '0',
			left: '50%',
			transform: 'translateX(-50%)',
			width: '0',
			height: '2px',
			bg: 'blue.600',
			transition: 'width 0.3s ease',
		},
	}),
	menuText: css({
		fontWeight: 'medium',
		color: 'gray.700',
		fontSize: 'xl',
		overflow: 'hidden',
	}),
	input: css({
		pl: '10',
		pr: '4',
		py: '2',
		border: '1px solid token(colors.gray.200)',
		rounded: 'full',
		width: '200px',
		transition: 'all 0.3s',
		_focus: {
			outline: 'none',
			borderColor: 'blue.500',
			width: '250px',
			boxShadow: '0 0 0 3px token(colors.blue.100)',
		},
	}),
	login: flex({
		align: 'center',
		gap: '2',
		px: '4',
		py: '2',
		bg: 'gray.50',
		rounded: 'lg',
		border: '1px solid token(colors.gray.200)',
		_hover: {
			bg: 'gray.100',
			transform: 'translateY(-1px)',
		},
		transition: 'all 0.2s',
	}),
};
