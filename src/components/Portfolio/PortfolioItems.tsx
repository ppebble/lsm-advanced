import { ErrorBoundary } from '@suspensive/react';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

import type { PortfolioItem } from '@/assets/data/type';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { css } from 'styled-system/css';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import { PortfolioDesc } from './PortfolioDesc';
import { portfolioStyles } from './styles';

interface PortfolioItemProps {
	url: string;
}

const PortfolioItems = ({ url }: PortfolioItemProps) => {
	const refCallback = useIntersectionObserver();
	const [isLoading, setIsLoading] = useState(true);
	const { data: portfolioItems } = useSuspenseFetchQuery<PortfolioItem[]>({ url });
	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<Skeleton className={portfolioStyles.itemContainer} />}>
				<div className={portfolioStyles.itemContainer}>
					{portfolioItems &&
						portfolioItems.map((item: PortfolioItem) => (
							<div
								key={item.id}
								className={css({
									position: 'relative',
									overflow: 'hidden',
									borderRadius: 'xl',
									height: '300px',
									'&:hover img': {
										opacity: 0.3,
										filter: 'blur(2px)',
										transition: 'all 0.3s ease',
									},
									'&:hover .desc': {
										opacity: 1,
									},
								})}
							>
								<Link to={`/work/${item.id}`}>
									<div className={css({ position: 'relative', height: '100%', width: '100%' })}>
										{isLoading && (
											<Skeleton
												className={css({
													position: 'absolute',
													inset: 0,
												})}
											/>
										)}
										<img
											ref={refCallback}
											onLoad={() => setIsLoading(false)}
											data-src={item.images}
											alt={item.title}
											className={portfolioStyles.image(isLoading)}
										/>
									</div>
									<div
										className={`${css({
											position: 'absolute',
											inset: 0,
											opacity: 0,
											transition: 'opacity 0.3s ease',
										})} desc`}
									>
										<PortfolioDesc desc={item.description} title={item.title} isActive />
									</div>
								</Link>
							</div>
						))}
				</div>
			</Suspense>
		</ErrorBoundary>
	);
};
export default PortfolioItems;
