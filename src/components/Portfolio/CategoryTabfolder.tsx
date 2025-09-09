import type { CategoryMainType } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { portfolioStyles } from './styles';

interface CategoryTabFolderProps {
	onCategoryChange: (category: string) => void;
}

const CategoryTabFolder = ({ onCategoryChange }: CategoryTabFolderProps) => {
	const categories = useFetch<CategoryMainType[]>({ url: SERVICE_URLS.mainCategories });
	return (
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
	);
};

export default CategoryTabFolder;
