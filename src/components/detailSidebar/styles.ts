import { css } from 'styled-system/css';

export const detailSidebarStyles = {
	sidebar: css({
		spaceY: '6',
	}),
	companyCard: css({
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'lg',
		p: '5',
	}),
	companyInfo: css({
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
	companyName: css({
		fontWeight: 'semibold',
	}),
	companyRating: css({
		display: 'flex',
		alignItems: 'center',
	}),
	ratingStar: css({
		color: 'yellow.500',
	}),
	ratingValue: css({
		color: 'gray.700',
		ml: '1',
	}),
	ratingCount: css({
		color: 'gray.500',
		ml: '2',
	}),
	inquiryButton: css({
		w: 'full',
		py: '2',
		bg: 'blue.600',
		color: 'white',
		borderRadius: 'lg',
		fontWeight: 'medium',
		_hover: {
			bg: 'blue.700',
		},
	}),
	metricsCard: css({
		bg: 'white',
		border: '1px solid',
		borderColor: 'gray.200',
		borderRadius: 'lg',
		p: '5',
	}),
	metricsButtons: css({
		display: 'flex',
		justifyContent: 'space-between',
		mb: '4',
	}),
	metricButton: css({
		display: 'flex',
		alignItems: 'center',
	}),
	metricIcon: css({
		mr: '2',
	}),
	dateInfo: css({
		fontSize: 'sm',
		color: 'gray.500',
	}),
	dateIcon: css({
		display: 'inline',
		mr: '1',
	}),
	relatedContent: css({
		bg: 'gray.100',
		borderRadius: 'lg',
		p: '5',
	}),
	relatedTitle: css({
		fontWeight: 'semibold',
		mb: '3',
	}),
	relatedList: css({
		spaceY: '3',
	}),
	relatedItem: css({
		display: 'flex',
	}),
	relatedImage: css({
		w: '16',
		h: '16',
		bg: 'gray.300',
		borderRadius: 'md',
		flexShrink: '0',
	}),
	relatedContentInfo: css({
		ml: '3',
	}),
	relatedContentTitle: css({
		fontSize: 'sm',
		fontWeight: 'medium',
	}),
	relatedContentViews: css({
		fontSize: 'xs',
		color: 'gray.500',
	}),
};
