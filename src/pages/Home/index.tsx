import Banner from '@/components/Banner';
import Category from '@/components/Category';
import Trend from '@/components/Trend';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

function Home() {
	const category = ['All', 'bed', 'bath', 'kitchen', 'living'];
	return (
		<>
			<div
				className={css({
					display: 'grid',
					gridTemplateRows: 'auto auto auto auto', // 4개 섹션 명시
					maxWidth: '100vw',
					gap: '24px', // 섹션 간 간격 고정
					overflowX: 'hidden',
				})}
			>
				{/* 메인 배너 섹션 */}
				<section
					className={css({
						mt: { base: '60px', md: '80px' },
						height: { base: '300px', md: '500px' },
					})}
				>
					<Banner />
				</section>
				{/* 트렌드 섹션 ( 추가 ) */}
				<section
					className={flex({
						flexDirection: 'column',
						position: 'relative', // 자식 요소 제어용
					})}
				>
					<Trend />
				</section>
				{/* 카테고리 섹션 */}
				<section
					className={flex({
						height: '240px',
						py: { base: '12', md: '20' },
						px: { base: '4', md: '6' },
						justifyContent: 'center',
					})}
				>
					<Category />
				</section>
				{/* 작업물 탭폴더 섹션 */}
				<section
					className={css({
						mx: 'auto',
						py: { base: '8', md: '16' },
						width: '100vw',
						px: { base: '4', md: '6' },
					})}
				>
					<div
						className={css({
							borderBottom: '1px solid token(colors.gray.200)',
							'&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
							display: 'flex',
							gap: '6',
							mb: '8',
							pb: '2',
						})}
					>
						{category.map((tab) => {
							return (
								<button
									key={tab}
									className={css({
										flexShrink: '0',
										padding: { base: '8px 16px', md: '12px 24px' },
										borderBottom: '2px solid transparent',
										_hover: { borderColor: 'gray.400' },
										_selected: { borderColor: 'amber.500', fontWeight: 'bold' },
									})}
								>
									{tab}
								</button>
							);
						})}
					</div>
					<div
						className={css({
							display: 'grid',
							gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
							gap: { base: '4', md: '6' },
						})}
					>
						{/* 추후 <PortfolioCard /> 컴포넌트로 교체 예정 */}
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className={css({
									height: '300px',
									bg: 'white',
									rounded: 'xl',
									boxShadow: 'md',
									width: '100%',
								})}
							/>
						))}
					</div>
				</section>

				{/* 푸터 섹션 */}
			</div>
		</>
	);
}

export default Home;
