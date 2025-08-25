import { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-system/css';
import { Category } from '.';
import { categoryStyles } from './styles';

function CategoryItem({ category }: { category: Category }) {
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			className={categoryStyles.itemContainer({ isActive })}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<div className={categoryStyles.cardContainer}>
				{/* 카테고리 카드 (앞면) */}
				<div className={categoryStyles.card}>
					<div className={categoryStyles.mainIcon}>{category.icon}</div>
					<span
						className={css({
							fontSize: { base: 'md', md: 'lg' },
							fontWeight: 'medium',
							textAlign: 'center',
							color: 'gray.800',
						})}
					>
						{category.name}
					</span>
				</div>
				{/* 드롭다운 (뒷면) */}
				{isActive && category.subCategories && (
					<div className={categoryStyles.dropdown({ isActive, category })}>
						<Link to={category.route} className={categoryStyles.main}>
							<div className={categoryStyles.mainIcon}>{category.icon}</div>
							<span
								className={css({
									fontWeight: 'bold',
									color: 'gray.800',
								})}
							>
								{category.name}
							</span>
						</Link>
						{category.subCategories.map((sub) => (
							<Link key={sub.id} to={sub.route} className={categoryStyles.subCategory}>
								<span
									className={css({
										fontSize: { base: 'md', md: 'lg' },
										fontWeight: 'medium',
										textAlign: 'center',
										color: 'gray.800',
									})}
								>
									{sub.name}
								</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
export default CategoryItem;
