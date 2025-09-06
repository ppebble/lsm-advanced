import { ApiResponse, CategoryProps } from '@/assets/data/type';
import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';
import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
function Category() {
	const { data: categories, loading, error } = useFetch<CategoryProps[]>('/api/categories');
	return (
		<>
			<div className={categoryStyles.categoryContainer}>
				{categories &&
					categories.map((category) => <CategoryItem key={category.id} category={category} />)}
			</div>
		</>
	);
}

export default Category;
