import { ApiResponse, CategoryProps } from '@/assets/data/type';
import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';
import { useEffect, useState } from 'react';
function Category() {
	const [categories, setCategories] = useState<CategoryProps[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<String | null>(null);
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await fetch('/api/categories');
				if (!res.ok) {
					throw new Error('카테고리를 불러오는데 실패했습니다.');
				}
				const result: ApiResponse<CategoryProps[]> = await res.json();
				if (result) {
					setCategories(result.data);
				}
			} catch (err: any) {
				setError(err.messsage);
			}
		};
		fetchCategories();
	}, []);
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
