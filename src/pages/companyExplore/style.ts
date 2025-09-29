import { css } from 'styled-system/css';

export const companyExplorerStyles = {
	container: css({
		maxW: '1200px',
		mx: 'auto',
		px: '4',
		py: '8',
	}),
	header: css({
		textAlign: 'center',
		mb: '8',
	}),
	title: css({
		fontSize: '3xl',
		fontWeight: 'bold',
		mb: '2',
	}),
	subtitle: css({
		color: 'gray.600',
		fontSize: 'lg',
	}),
	filters: css({
		display: 'flex',
		gap: '4',
		justifyContent: 'center',
		mb: '8',
		flexWrap: 'wrap',
	}),
	filterButton: css({
		px: '4',
		py: '2',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'full',
		fontSize: 'sm',
		cursor: 'pointer',
		transition: 'all 0.2s',
		_hover: {
			bg: 'gray.50',
		},
		_selected: {
			bg: 'blue.600',
			color: 'white',
			borderColor: 'blue.600',
		},
	}),
	cardContainer: css({
		position: 'relative',
		maxW: '400px',
		mx: 'auto',
		h: '500px',
	}),
	card: css({
		w: 'full',
		h: 'full',
		bg: 'white',
		borderRadius: 'xl',
		boxShadow: 'lg',
		overflow: 'hidden',
		position: 'absolute',
		transition: 'transform 0.3s ease-out',
	}),
	cardImage: css({
		w: 'full',
		h: '200px',
		objectFit: 'cover',
	}),
	cardContent: css({
		p: '6',
	}),
	companyHeader: css({
		display: 'flex',
		alignItems: 'center',
		mb: '4',
	}),
	companyLogo: css({
		w: '12',
		h: '12',
		borderRadius: 'full',
		objectFit: 'cover',
		mr: '3',
	}),
	companyInfo: css({
		flex: '1',
	}),
	companyName: css({
		fontSize: 'xl',
		fontWeight: 'bold',
		mb: '1',
	}),
	rating: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1',
	}),
	ratingStar: css({
		color: 'yellow.500',
	}),
	stats: css({
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: '3',
		mb: '4',
	}),
	statItem: css({
		display: 'flex',
		alignItems: 'center',
		gap: '2',
		fontSize: 'sm',
		color: 'gray.600',
	}),
	workTitle: css({
		fontSize: 'lg',
		fontWeight: 'semibold',
		mb: '2',
	}),
	workDescription: css({
		color: 'gray.600',
		fontSize: 'sm',
		mb: '4',
		lineClamp: 2,
	}),
	tags: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
	}),
	tag: css({
		px: '2',
		py: '1',
		bg: 'gray.100',
		color: 'gray.700',
		borderRadius: 'md',
		fontSize: 'xs',
	}),
	navigation: css({
		display: 'flex',
		justifyContent: 'center',
		gap: '4',
		mt: '6',
	}),
	navButton: css({
		w: '12',
		h: '12',
		borderRadius: 'full',
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		transition: 'all 0.2s',
		_hover: {
			bg: 'gray.50',
		},
		_disabled: {
			opacity: 0.5,
			cursor: 'not-allowed',
		},
	}),
	emptyState: css({
		textAlign: 'center',
		py: '20',
		color: 'gray.500',
	}),
};
