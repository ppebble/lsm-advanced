import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';
import { categories } from '@/assets/data/categories';
function Category() {
	return (
		<>
			<div className={categoryStyles.categoryContainer}>
				{categories.map((category) => (
					<CategoryItem key={category.id} category={category} />
				))}
			</div>
		</>
	);
}

export default Category;
