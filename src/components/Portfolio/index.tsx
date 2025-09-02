import { css } from 'styled-system/css';
import { portfolioStyles } from './styles';
import { useEffect, useState } from 'react';
import { PortfolioDesc } from './PortfolioDesc';
import { Link } from 'react-router-dom';
import { ApiResponse, CategoryType, PortfolioItem } from '@/assets/data/type';
import CategoryItem from '../Category/CategoryItem';

function Portfolio() {
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
					console.log(result);
					setCategories(result.data);
				}
			} catch (err: any) {
				setError(err.messsage);
			}
		};
		fetchCategories();
	}, []);

	return (
		<>
			<div className={portfolioStyles.container}>
				<div className={portfolioStyles.mainContainer}>
					{categories.map((tab) => {
						return (
							<button key={tab} className={portfolioStyles.tabfolderContainer}>
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
										className={css({
											height: '100%',
											width: '100%',
											objectFit: 'cover',
											borderRadius: 'xl',
										})}
										src={item.images[0].url}
										alt={item.images[0].alt}
									/>
								</div>

								<div
									className={css({
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: activeItem === i ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
										transition: 'background-color 0.3s ease',
										pointerEvents: 'none',
									})}
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
