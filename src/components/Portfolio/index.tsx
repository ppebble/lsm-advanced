import { css } from 'styled-system/css';
import { portfolioStyles } from './styles';
import { useEffect, useState } from 'react';
import { PortfolioDesc } from './PortfolioDesc';
import { Link } from 'react-router-dom';
import { ApiResponse, CategoryType, PortfolioItem } from '@/assets/data/type';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function Portfolio() {
	// const { ref } = useIntersectionObserver();
	const refCallback = useIntersectionObserver();
	const [activeItem, setActiveItem] = useState<number | null>(null);

	const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<String | null>(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await fetch('/api/categories');
				if (!res.ok) {
					throw new Error('카테고리를 불러오는데 실패했습니다.');
				}
				const result: ApiResponse<CategoryType[]> = await res.json();
				if (result) {
					setCategories(result.data);
				}
			} catch (err: any) {
				setError(err.messsage);
			}
		};
		fetchCategories();
	}, []);
	useEffect(() => {
		const fetchPortfolioItems = async () => {
			setLoading(true);
			setError(null);

			try {
				const url =
					selectedCategory === 'all'
						? '/api/portfolio/thumbnails'
						: `/api/portfolio/thumbnails?category=${encodeURIComponent(selectedCategory)}`;
				const res = await fetch(url);

				const result: ApiResponse<PortfolioItem[]> = await res.json();

				if (result.success) {
					setPortfolioItems(result.data);
				} else {
					throw new Error('포트폴리오 조회에 실패했습니다.');
				}
			} catch (err) {
				setError('PortfolioItem Error');
				console.error('포트폴리오 조회 중 오류:', err);
			} finally {
				setLoading(false);
			}
		};
		fetchPortfolioItems();
	}, [selectedCategory]);

	const handleCategoryChange = (category: CategoryType) => {
		setSelectedCategory(category);
	};

	return (
		<>
			<div className={portfolioStyles.container}>
				<div className={portfolioStyles.mainContainer}>
					{categories.map((tab) => {
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
					{portfolioItems.map((item, i) => (
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
