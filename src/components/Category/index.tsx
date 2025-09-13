import { ErrorBoundary, Suspense } from '@suspensive/react';

import type { CategoryProps } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';

const Category = () => {
	const categories = useFetch<CategoryProps[]>({ url: SERVICE_URLS.categories });
	return (
		<div className={categoryStyles.categoryContainer}>
			<ErrorBoundary fallback={ErrorFallback}>
				{categories.data &&
					categories.data.map((category: CategoryProps) => (
						<Suspense
							key={category.id}
							fallback={<Skeleton className={categoryStyles.cardContainer} />}
						>
							<CategoryItem key={category.id} category={category} />
						</Suspense>
					))}
			</ErrorBoundary>
		</div>
	);
};

export default Category;
