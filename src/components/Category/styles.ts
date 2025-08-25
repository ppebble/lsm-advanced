import { css } from 'styled-system/css';
import { Category } from '.';

export const categoryStyles = {
	categoryContainer: css({
		display: { base: 'none', md: 'grid' },
		gridTemplateColumns: {
			base: 'repeat(auto-fit, minmax(100px, 1fr))', // 모바일: 더 작은 최소값
			md: 'repeat(auto-fit, minmax(120px, 1fr))', // 태블릿
			lg: 'repeat(auto-fit, minmax(140px, 1fr))', // 데스크탑
			'2xl': 'repeat(7, minmax(140px, 1fr))', // 2xl
		},
		gridAutoFlow: 'row',
		overflow: 'visible',
		justifyItems: 'stretch',
		gap: {
			base: '16px',
			md: '24px',
			lg: '32px', // 원하는 간격으로 조정
		},
		width: '100%',
		maxWidth: {
			base: '100%',
			lg: '1440px',
		},
		margin: {
			base: '0',
			lg: '0 auto',
		},
		padding: {
			base: '12px 16px',
			md: '20px 24px',
			lg: '20px 32px', // 좌우 패딩 증가
		},
	}),

	itemContainer: (options: { isActive?: boolean } = {}) =>
		css({
			perspective: {
				base: '500px', // 모바일: 약한 3D 효과
				md: '800px', // 태블릿: 기본 효과
				lg: '1000px', // 데스크톱: 강한 효과
			},
			position: 'relative',
			aspectRatio: '1/1',
			// minWidth: {
			// 	base: '140px',
			// 	md: '160px',
			// 	lg: '180px',
			// },
			width: '100%',
			zIndex: options.isActive ? '20' : 'auto',
			transform: 'none',
		}),
	cardContainer: css({
		transformStyle: 'preserve-3d',
		transition: 'transform 0.4s ease',
		height: '100%',
		position: 'relative',
		// transform: isActive ? 'translateZ(-20px)' : 'none',
		transform: 'none',
	}),
	card: css({
		backfaceVisibility: 'hidden',
		position: 'absolute',
		width: '100%',
		height: '100%',
		bg: 'white',
		borderRadius: 'lg',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: 'md',
		zIndex: 10,
	}),
	main: css({
		width: { base: '44px', md: '52px' },
		height: { base: '44px', md: '52px' },
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		bg: 'blue.50',
		borderRadius: 'full',
		p: '2',
	}),
	dropdown: (options: { isActive?: boolean; category?: Category } = {}) =>
		css({
			position: 'absolute',
			width: '101%',
			minH: '200px',
			height: `calc(${options.category?.subCategories ? options.category.subCategories.length : 0} * 48px + 80px)`, // 동적 높이 계산
			maxHeight: {
				base: '60vh',
				md: 'none',
			},
			bg: 'white',
			borderRadius: 'lg',
			boxShadow: '2xl',
			// transform: isActive
			// 	? 'rotateX(0deg) translateZ(20px)'
			// 	: 'rotateX(-90deg) translateZ(-50px)',
			transform: 'none',
			opacity: options.isActive ? 1 : 0,
			transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			marginTop: '8px',
			isolation: 'isolate',
			zIndex: 9999,
			padding: '16px',
			overflowY: {
				base: 'auto',
				md: 'visible',
			},
			gap: '8px',
		}),
	mainCategory: css({
		display: 'flex',
		alignItems: 'center',
		_hover: { bg: 'gray.100' },
		gap: '12px',
		pb: '8px',
		borderBottom: '1px solid #f3f4f6',
	}),
	mainIcon: css({
		width: '32px',
		height: '32px',
		bg: 'blue.50',
		borderRadius: 'full',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
	subCategory: css({
		padding: '8px 12px',
		borderRadius: 'md',
		_hover: { bg: 'gray.100' },
	}),
};
