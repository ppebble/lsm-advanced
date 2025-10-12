import { ErrorBoundary, Suspense } from '@suspensive/react';

import type { CategoryMainType } from '@/assets/data/type';
import { useFetchQuery } from '@/hooks/query/useFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import { portfolioStyles } from './styles';

interface CategoryTabFolderProps {
	onCategoryChange: (category: string) => void;
}

const CategoryTabFolder = ({ onCategoryChange }: CategoryTabFolderProps) => {
	const { data: categories } = useFetchQuery<CategoryMainType[]>({
		url: SERVICE_URLS.mainCategories,
	});
	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<div className={portfolioStyles.mainContainer}>
				{categories &&
					categories.map((tab: CategoryMainType) => {
						return (
							<button
								type='button'
								key={tab}
								onClick={() => onCategoryChange(tab)}
								className={portfolioStyles.tabfolderContainer}
							>
								{tab}
							</button>
						);
					})}
			</div>
		</ErrorBoundary>
	);
};

export default CategoryTabFolder;
