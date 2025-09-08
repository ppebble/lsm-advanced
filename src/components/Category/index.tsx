import type { CategoryProps } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';

import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';

const Category = () => {
	const categories = useFetch<CategoryProps[]>({ url: '/api/categories' });
	return (
		<div className={categoryStyles.categoryContainer}>
			{categories.data &&
				categories.data.map((category: CategoryProps) => (
					<CategoryItem key={category.id} category={category} />
				))}
		</div>
	);
};

export default Category;
