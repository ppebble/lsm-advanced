import { css } from 'styled-system/css';

export const detailBoardStyles = {
	mainContent: css({
		spaceY: '6',
	}),
	title: css({
		fontSize: '3xl',
		fontWeight: 'bold',
	}),
	description: css({
		color: 'gray.600',
	}),
	tagContainer: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
	}),
	tag: css({
		px: '3',
		py: '1',
		bg: 'gray.100',
		color: 'gray.700',
		borderRadius: 'full',
		fontSize: 'sm',
	}),
	detailCard: css({
		bg: 'gray.50',
		p: '6',
		borderRadius: 'lg',
	}),
	detailTitle: css({
		fontSize: 'xl',
		fontWeight: 'semibold',
		mb: '4',
	}),
	detailGrid: css({
		display: 'grid',
		gridTemplateColumns: {
			base: '1fr',
			md: '1fr 1fr',
		},
		gap: '4',
	}),
	detailItem: css({
		display: 'flex',
		alignItems: 'center',
	}),
	detailIcon: css({
		color: 'gray.500',
		mr: '2',
	}),
	materialsContainer: css({
		mt: '4',
	}),
	materialsTitle: css({
		fontWeight: 'medium',
		color: 'gray.700',
		mb: '2',
	}),
	materialsList: css({
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2',
	}),
	materialTag: css({
		px: '3',
		py: '1',
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'full',
		fontSize: 'sm',
	}),
	storySection: css({
		maxW: 'none',
	}),
	storyTitle: css({
		fontSize: 'xl',
		fontWeight: 'semibold',
		mb: '4',
	}),
	storyText: css({
		color: 'gray.700',
		mb: '4',
	}),
};
