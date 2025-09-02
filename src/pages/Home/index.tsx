import Banner from '@/components/Banner';
import Category from '@/components/Category';
import Portfolio from '@/components/Portfolio';
import Trend from '@/components/Trend';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

function Home() {
	return (
		<>
			<div
				className={css({
					display: 'grid',
					gridTemplateRows: 'auto auto auto auto', // 4개 섹션 명시
					maxWidth: '100vw',
					gap: '24px', // 섹션 간 간격 고정
					overflowX: 'hidden',
					bgColor: 'gray.50',
				})}
			>
				{/* 메인 배너 섹션 */}
				<section
					className={css({
						// mt: { base: '60px', md: '80px' },
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
				<section>
					<Portfolio />
				</section>

				{/* 푸터 섹션 */}
			</div>
		</>
	);
}

export default Home;
