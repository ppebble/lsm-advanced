import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

export const trendStyles = {
	// 타이틀 스타일
	title: css({
		fontSize: { base: 'xl', md: '2xl' },
		fontWeight: 'bold',
		mb: '4',
		textAlign: { base: 'start', md: 'center' },
		ml: { base: '2' },
		height: '30px',
	}),

	// 그리드 컨테이너
	gridContainer: css({
		display: 'grid',
		gridTemplateColumns: {
			base: 'repeat(1, minmax(100vw, 1fr))',
			md: 'repeat(2, minmax(320px, 1fr))',
			xl: 'repeat(2, minmax(480px, 1fr))',
			'2xl': 'repeat(3, minmax(480px, 1fr))',
		},
		gap: { base: '0', md: '4', '2xl': '2' },
		width: { base: '100%', md: 'calc(100% - 24px)', '2xl': 'calc(100% - 12px)' },
		justifyItems: { base: 'flex-start', md: 'center' },
		justifyContent: { base: 'flex-start', '2xl': 'space-evenly' },
		alignSelf: 'center',
		maxWidth: { base: '100vw', md: '80vw', '2xl': '90vw' },
		height: '400px',
		mx: { base: '0, 6px', md: 'auto' },
		overflowX: 'hidden',
		overflowY: { base: 'auto', '2xl': 'hidden' },
		scrollbar: 'hidden',
		WebkitOverflowScrolling: 'touch',
		scrollSnapType: 'none',
		willChange: 'transform',
		scrollBehavior: 'smooth',
	}),

	// 카드 스타일
	card: css({
		ml: { base: '3', md: '0' },
		bg: 'white',
		mt: '4',
		mb: '4',
		minH: '350px',
		width: { base: '80vw', md: 'calc(100% - 24px)', '2xl': 'calc(100% - 12px)' },
		maxWidth: '80vw',
		height: { base: '350px', md: '360px' },
		borderRadius: 'xl',
		overflow: 'hidden',
		border: '1px solid token(colors.gray.200)',
		boxShadow: 'md',
		transition: 'transform 0.2s',
		_hover: { transform: 'translateY(-4px)' },
	}),

	// 이미지 스타일
	image: css({
		width: '100%',
		bgSize: 'cover',
		height: 'calc(58% - 2px)',
		objectFit: 'cover',
	}),

	// 버튼 스타일
	detailButton: css({
		px: '3',
		py: '1',
		bg: 'blue.500',
		color: 'white',
		borderRadius: 'full',
		border: 'none',
		fontSize: 'sm',
		_hover: { bg: 'blue.600', cursor: 'pointer' },
	}),

	// 더보기 버튼
	moreButton: css({
		px: '6',
		border: '1px solid token(colors.gray.300)',
		borderRadius: 'full',
		fontWeight: 'medium',
		_hover: { bg: 'gray.100', cursor: 'pointer' },
		height: '40px',
	}),
};

export const trendPatterns = {
	// Flex 패턴
	flexCenter: flex({ justify: 'center' }),
	flexBetween: flex({ justifyContent: 'space-between' }),
	flexGap2: flex({ gap: '2', alignItems: 'center', mb: '2' }),
};
