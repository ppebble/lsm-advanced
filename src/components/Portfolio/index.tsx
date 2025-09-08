import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { CategoryMainType, PortfolioItem } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { css } from 'styled-system/css';

import { ErrorFallback, LoadingFallback } from '../common/fallback';

import { PortfolioDesc } from './PortfolioDesc';
import { portfolioStyles } from './styles';

const Portfolio = () => {
	// const { ref } = useIntersectionObserver();
	const refCallback = useIntersectionObserver();
	const [activeItem, setActiveItem] = useState<number | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<CategoryMainType>('all');
	const [url, setUrl] = useState<string>('/api/portfolio/thumbnails');

	// const categories = useFetch2<CategoryMainType[]>({ url: '/api/main-categories' });
	// const portfolioItems = useFetch2<PortfolioItem[]>({ url: url });
	const categories = useFetch<CategoryMainType[]>({ url: '/api/main-categories' });
	const portfolioItems = useFetch<PortfolioItem[]>({ url });

	// const [categories, setCategories] = useState<CategoryMainType[]>([]);
	// const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

	useEffect(() => {
		setUrl(
			selectedCategory === 'all'
				? '/api/portfolio/thumbnails'
				: `/api/portfolio/thumbnails?category=${encodeURIComponent(selectedCategory)}`,
		);
	}, [selectedCategory]);

	const handleCategoryChange = (category: CategoryMainType) => {
		setSelectedCategory(category);
	};

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<LoadingFallback />}>
				<div className={portfolioStyles.container}>
					<div className={portfolioStyles.mainContainer}>
						{categories.data &&
							// categories.map((tab: CategoryMainType) => {
							categories.data.map((tab: CategoryMainType) => {
								return (
									<button
										type='button'
										key={tab}
										onClick={() => handleCategoryChange(tab)}
										className={portfolioStyles.tabfolderContainer}
									>
										{tab}
									</button>
								);
							})}
					</div>
					<div className={portfolioStyles.itemContainer}>
						{/* {portfolioItems && */}
						{portfolioItems.data &&
							portfolioItems.data.map((item: PortfolioItem, i: number) => (
								// portfolioItems.map((item: PortfolioItem, i: number) => (
								<div
									key={item.id}
									className={css({
										position: 'relative',
										overflow: 'hidden',
										borderRadius: 'xl',
										height: '300px',
									})}
									onMouseEnter={() => setActiveItem(i)}
									onMouseLeave={() => setActiveItem(null)}
								>
									<Link to={`/work/${item.id}`}>
										<div
											className={css({
												position: 'relative',
												height: '100%',
												width: '100%',
												transition: 'all 0.3s ease',
												opacity: activeItem === i ? 0.3 : 1,
												filter: activeItem === i ? 'blur(2px)' : 'none',
											})}
										>
											<img
												// ref={ref}
												ref={refCallback}
												className={portfolioStyles.image}
												data-src={item.images}
												alt='Loading . . .'
											/>
										</div>
										<div
											className={portfolioStyles.descContainer.concat(
												"backgroundColor: activeItem === i ? 'rgba(255, 255, 255, 0.9)' : 'transparent',",
											)}
										>
											{activeItem === i && (
												<PortfolioDesc
													id={item.id}
													desc={item.description}
													title={item.title}
													isActive={activeItem === i}
												/>
											)}
										</div>
									</Link>
								</div>
							))}
					</div>
				</div>
			</Suspense>
		</ErrorBoundary>
	);
};
export default Portfolio;
