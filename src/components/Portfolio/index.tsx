import { css } from 'styled-system/css';
import { portfolioStyles } from './styles';
import { useEffect, useState } from 'react';
import { PortfolioDesc } from './PortfolioDesc';
import { Link } from 'react-router-dom';
import { ApiResponse, CategoryMainType, PortfolioItem } from '@/assets/data/type';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useFetch } from '@/hooks/useFetch';

function Portfolio() {
	// const { ref } = useIntersectionObserver();
	const refCallback = useIntersectionObserver();
	const [activeItem, setActiveItem] = useState<number | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<CategoryMainType>('all');
	const [url, setUrl] = useState<string>('');

	const {
		data: categories,
		loading: categoryLoading,
		error: categoryError,
	} = useFetch<CategoryMainType[]>({ url: '/api/main-categories' });
	const {
		data: portfolioItems,
		loading: portfolioLoading,
		error: portfolioError,
	} = useFetch<PortfolioItem[]>({ url: url });
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
			<div className={portfolioStyles.container}>
				<div className={portfolioStyles.mainContainer}>
					{categories &&
						categories.map((tab) => {
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
						portfolioItems.map((item, i) => (
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
		</>
	);
}
export default Portfolio;
