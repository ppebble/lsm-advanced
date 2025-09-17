import type { CategoryProps } from '@/assets/data/type';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';

const Category = () => {
	const { data: categories } = useSuspenseFetchQuery<CategoryProps[]>({
		url: SERVICE_URLS.categories,
	});
	return (
		<div className={categoryStyles.categoryContainer}>
			{categories &&
				categories.map((category: CategoryProps) => (
					<CategoryItem key={category.id} category={category} />
				))}
		</div>
	);
};

export default Category;
