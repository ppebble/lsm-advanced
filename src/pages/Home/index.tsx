import { ErrorBoundary, Suspense } from '@suspensive/react';

import Banner from '@/components/Banner';
import { bannerStyles } from '@/components/Banner/styles';
import Category from '@/components/Category';
import { categoryStyles } from '@/components/Category/styles';
import { ErrorFallback } from '@/components/common/fallback';
import { Skeleton } from '@/components/common/skeleton';
import Portfolio from '@/components/Portfolio';
import { portfolioStyles } from '@/components/Portfolio/styles';
import Trend from '@/components/Trend';
import { trendStyles } from '@/components/Trend/styles';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

const Home = () => {
	return (
		<div
			className={css({
				display: 'grid',
				gridTemplateRows: 'auto auto auto auto',
				maxWidth: '100vw',
				gap: '24px',
				overflowX: 'hidden',
				bgColor: 'gray.50',
			})}
		>
			<ErrorBoundary fallback={ErrorFallback}>
				<Suspense fallback={<Skeleton className={bannerStyles.mainImage} />}>
					<section
						className={css({
							height: { base: '300px', md: '500px' },
						})}
					>
						<Banner />
					</section>
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallback={ErrorFallback}>
				<Suspense fallback={<Skeleton className={trendStyles.card} />}>
					<section
						className={flex({
							flexDirection: 'column',
							position: 'relative',
						})}
					>
						<Trend />
					</section>
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallback={ErrorFallback}>
				<Suspense fallback={<Skeleton className={categoryStyles.categoryContainer} />}>
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
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallback={ErrorFallback}>
				<Suspense fallback={<Skeleton className={portfolioStyles.container} />}>
					<section>
						<Portfolio />
					</section>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default Home;
