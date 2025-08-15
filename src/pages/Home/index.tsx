import Banner from '@/components/Banner';
import { css } from 'styled-system/css';

function Home() {
	const category = ['All', 'bed', 'bath', 'kitchen', 'living'];
	return (
		<>
			<div>
				{/* 네비바 섹션 */}
				<nav
					className={css({
						position: 'fixed',
						top: '0',
						width: '100%',
						height: '80px',
						bg: 'white',
						boxShadow: 'sm',
						display: 'flex',
						alignItems: 'center',
						px: '6',
						zIndex: '1000',
					})}
				>
					네비바
				</nav>
			</div>
			{/* 메인 배너 섹션 */}
			<section
				className={css({
					mt: '80px',
					height: '500px',
				})}
			>
				<Banner />
			</section>
			{/* 카테고리 섹션 */}
			<section
				className={css({
					height: '450px',
					px: '6',
					py: '20',
				})}
			>
				카테고리 섹션
			</section>
			{/* 작업물 탭폴더 섹션 */}
			<section
				className={css({
					py: '16',
					bg: 'gray.50',
					mx: 'auto',
					px: '6',
				})}
			>
				<div
					className={css({
						borderBottom: '1px solid token(colors.gray.200)',
						display: 'flex',
						gap: '6',
						mb: '8',
					})}
				>
					{category.map((tab) => {
						return (
							<button
								key={tab}
								className={css({
									padding: '12px 24px',
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
						gap: '6',
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
							})}
						/>
					))}
				</div>
			</section>

			{/* 푸터 섹션 */}
		</>
	);
}

export default Home;
