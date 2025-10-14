import { ErrorBoundary } from '@suspensive/react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import type { PortfolioItem } from '@/assets/data/type';
import { useFetchQuery } from '@/hooks/query/useFetchQuery';
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
	const [isImgLoading, setIsImgLoading] = useState(true);

	const { data: portfolioItems, isLoading } = useFetchQuery<PortfolioItem[]>({ url });

	const skeletonIds = useMemo(() => {
		return Array.from({ length: 8 }, () => `skeleton-${crypto.randomUUID()}`);
	}, []);
	// useEffect(() => {
	// 	setIsLoading(false);
	// }, [portfolioItems]);
	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<div className={portfolioStyles.itemContainer}>
				{isLoading
					? Array.from({ length: 8 }).map((_, index) => (
							<div
								key={skeletonIds[index]}
								className={css({
									position: 'relative',
									overflow: 'hidden',
									borderRadius: 'xl',
									height: '300px',
								})}
							>
								<div className={css({ position: 'relative', height: '100%', width: '100%' })}>
									<Skeleton
										className={css({
											position: 'absolute',
											inset: 0,
											height: '100%',
											width: '100%',
										})}
									/>
								</div>
							</div>
						))
					: portfolioItems &&
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
										{isImgLoading && (
											<Skeleton
												className={css({
													position: 'absolute',
													inset: 0,
												})}
											/>
										)}
										<img
											ref={refCallback}
											onLoad={() => setIsImgLoading(false)}
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
		</ErrorBoundary>
	);
};
export default PortfolioItems;
