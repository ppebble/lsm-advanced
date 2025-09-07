import { css } from 'styled-system/css';
import { portfolioStyles } from './styles';
import { useEffect, useState } from 'react';
import { PortfolioDesc } from './PortfolioDesc';
import { Link } from 'react-router-dom';
import { ApiResponse, CategoryMainType, PortfolioItem } from '@/assets/data/type';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useFetch, useFetch2 } from '@/hooks/useFetch';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import { ErrorFallback, LoadingFallback } from '../common/fallback';

function Portfolio() {
	// const { ref } = useIntersectionObserver();
	const refCallback = useIntersectionObserver();
	const [activeItem, setActiveItem] = useState<number | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<CategoryMainType>('all');
	const [url, setUrl] = useState<string>('');

	const fetchCategories = useFetch2<CategoryMainType[]>({ url: '/api/main-categories' });
	const fetchPortfolio = useFetch2<PortfolioItem[]>({ url: url });

	const [categories, setCategories] = useState<CategoryMainType[]>([]);
	const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

	// 카테고리 fetch
	useEffect(() => {
		if (!fetchCategories) return;

		fetchCategories
			.then((data) => setCategories(data))
			.catch((err) => console.error('Category fetch error:', err));
	}, [fetchCategories]);

	// 포트폴리오 fetch
	useEffect(() => {
		if (!fetchPortfolio) return;

		fetchPortfolio
			.then((data) => setPortfolioItems(data))
			.catch((err) => console.error('Portfolio fetch error:', err));
	}, [fetchPortfolio]);

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
		<>
			<ErrorBoundary fallback={ErrorFallback}>
				<Suspense fallback={<LoadingFallback />}>
					<div className={portfolioStyles.container}>
						<div className={portfolioStyles.mainContainer}>
							{categories &&
								categories.map((tab: CategoryMainType) => {
									return (
										<button
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
							{portfolioItems &&
								portfolioItems.map((item: PortfolioItem, i: number) => (
									<div
										key={i}
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
													alt={'Loading . . .'}
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
		</>
	);
}
export default Portfolio;
