import { ApiResponse, CategoryProps } from '@/assets/data/type';
import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';
import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
function Category() {
	const categories = useFetch<CategoryProps[]>({ url: '/api/categories' });
	return (
		<>
			<div className={categoryStyles.categoryContainer}>
				{categories.data &&
					categories.data.map((category: CategoryProps) => (
						<CategoryItem key={category.id} category={category} />
					))}
			</div>
		</>
	);
}

export default Category;
