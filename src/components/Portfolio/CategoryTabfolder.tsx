import { ErrorBoundary, Suspense } from '@suspensive/react';

import type { CategoryMainType } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import { portfolioStyles } from './styles';

interface CategoryTabFolderProps {
	onCategoryChange: (category: string) => void;
}

const CategoryTabFolder = ({ onCategoryChange }: CategoryTabFolderProps) => {
	const categories = useFetch<CategoryMainType[]>({ url: SERVICE_URLS.mainCategories });
	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<Skeleton className={portfolioStyles.mainContainer} />}>
				<div className={portfolioStyles.mainContainer}>
					{categories.data &&
						categories.data.map((tab: CategoryMainType) => {
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
			</Suspense>
		</ErrorBoundary>
	);
};

export default CategoryTabFolder;
