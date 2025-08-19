import { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-system/css';
import { Category } from '.';

function CategoryItem({ category }: { category: Category }) {
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			className={css({
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
				zIndex: isActive ? '20' : 'auto',
				transform: 'none',
			})}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<div
				className={css({
					transformStyle: 'preserve-3d',
					transition: 'transform 0.4s ease',
					height: '100%',
					position: 'relative',
					// transform: isActive ? 'translateZ(-20px)' : 'none',
					transform: 'none',
				})}
			>
				{/* 카테고리 카드 (앞면) */}
				<div
					className={css({
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
					})}
				>
					<div
						className={css({
							width: { base: '44px', md: '52px' },
							height: { base: '44px', md: '52px' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							bg: 'blue.50',
							borderRadius: 'full',
							p: '2',
						})}
					>
						{category.icon}
					</div>
					<span
						className={css({
							fontSize: { base: 'md', md: 'lg' },
							fontWeight: 'medium',
							textAlign: 'center',
							color: 'gray.800',
						})}
					>
						{category.name}
					</span>
				</div>
				{/* 드롭다운 (뒷면) */}
				{isActive && category.subCategories && (
					<div
						className={css({
							position: 'absolute',
							width: '101%',
							minH: '200px',
							height: `calc(${category.subCategories.length} * 48px + 80px)`, // 동적 높이 계산
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
							opacity: isActive ? 1 : 0,
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
						})}
					>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '12px',
								pb: '8px',
								borderBottom: '1px solid #f3f4f6', // 구분선
							})}
						>
							<div
								className={css({
									width: '32px',
									height: '32px',
									bg: 'blue.50',
									borderRadius: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								})}
							>
								{category.icon}
							</div>
							<span
								className={css({
									fontWeight: 'bold',
									color: 'gray.800',
								})}
							>
								{category.name}
							</span>
						</div>
						{category.subCategories.map((sub) => (
							<Link
								key={sub.id}
								to={sub.route}
								className={css({
									padding: '8px 12px',
									borderRadius: 'md',
									_hover: { bg: 'gray.100' },
								})}
							>
								<span
									className={css({
										fontSize: { base: 'md', md: 'lg' },
										fontWeight: 'medium',
										textAlign: 'center',
										color: 'gray.800',
									})}
								>
									{sub.name}
								</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
export default CategoryItem;
