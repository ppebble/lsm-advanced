import { useMemo } from 'react';

import type { CategoryProps } from '@/assets/data/type';
import { useFetchQuery } from '@/hooks/query/useFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';
import { css } from 'styled-system/css';

import { Skeleton } from '../common/skeleton';

import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';

const Category = () => {
	const { data: categories, isLoading } = useFetchQuery<CategoryProps[]>({
		url: SERVICE_URLS.categories,
	});
	const skeletonIds = useMemo(() => {
		return Array.from({ length: 7 }, () => `skeleton-${crypto.randomUUID()}`);
	}, []);

	return (
		<div className={categoryStyles.categoryContainer}>
			{isLoading
				? Array.from({ length: 7 }).map((_, index) => (
						<div
							key={skeletonIds[index]}
							className={css({
								position: 'relative',
								overflow: 'hidden',
								borderRadius: 'xl',
								height: '120px',
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
				: categories &&
					categories.map((category: CategoryProps) => (
						<CategoryItem key={category.id} category={category} />
					))}
		</div>
	);
};

export default Category;
