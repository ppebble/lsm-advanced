import { Archive, Bath, Blinds, CookingPot, Grid2x2Plus, LampFloor, Sofa } from 'lucide-react';
import { css } from 'styled-system/css';
import CategoryItem from './CategoryItem';
import { categoryStyles } from './styles';
import { CategoryProps } from '@/assets/data/type';
// import { categories } from '@/assets/data/psudoData';
function Category() {
	const categories: CategoryProps[] = [
		{
			id: 'bathroom',
			name: '욕실',
			route: '/category/bathroom',
			icon: <Bath className={categoryStyles.icon} />,
			subCategories: [
				{ id: 'tile', name: '타일', route: '/category/bathroom/tile' },
				{ id: 'sink', name: '세면대', route: '/category/bathroom/sink' },
				{ id: 'bathtub', name: '욕조', route: '/category/bathroom/bathtub' },
				{ id: 'plumbing', name: '수도 배관', route: '/category/bathroom/plumbing' },
			],
		},
		{
			id: 'kitchen',
			name: '주방',
			icon: <CookingPot className={categoryStyles.icon} />,
			route: '/category/kitchen',
			subCategories: [
				{ id: 'sink', name: '싱크대', route: '/category/kitchen/sink' },
				{ id: 'counter', name: '조리대', route: '/category/kitchen/counter' },
				{ id: 'hood', name: '후드', route: '/category/kitchen/hood' },
			],
		},
		{
			id: 'living',
			name: '주거공간',
			route: '/category/living',
			icon: <Sofa className={categoryStyles.icon} />,
			subCategories: [
				{ id: 'wallpaper', name: '벽지/도배', route: '/category/living/wallpaper' },
				{ id: 'flooring', name: '장판/마루', route: '/category/living/flooring' },
				{ id: 'lighting', name: '조명', route: '/category/living/lighting' },
				{ id: 'window', name: '창호(샷시)', route: '/category/living/window' },
			],
		},
		{
			id: 'entrance',
			name: '현관/창호',
			route: '/category/entrance',
			icon: <Blinds className={categoryStyles.icon} />,
			subCategories: [
				{ id: 'door', name: '도어', route: '/category/entrance/door' },
				{ id: 'sash', name: '샷시', route: '/category/entrance/sash' },
				{ id: 'design', name: '출입구 디자인', route: '/category/entrance/design' },
			],
		},
		{
			id: 'floor',
			name: '바닥재',
			route: '/category/floor',
			icon: <Grid2x2Plus className={categoryStyles.icon} />,
			subCategories: [
				{ id: 'laminate', name: '장판', route: '/category/floor/laminate' },
				{ id: 'wood', name: '마루', route: '/category/floor/wood' },
				{ id: 'tile', name: '타일', route: '/category/floor/tile' },
				{ id: 'deco-tile', name: '데코타일', route: '/category/floor/deco-tile' },
			],
		},
		{
			id: 'lighting',
			name: '조명',
			icon: <LampFloor className={categoryStyles.icon} />,
			route: '/category/lighting',
			subCategories: [
				{ id: 'main', name: '메인 조명', route: '/category/lighting/main' },
				{ id: 'ambient', name: '분위기 등', route: '/category/lighting/ambient' },
				{ id: 'stand', name: '스탠드', route: '/category/lighting/stand' },
			],
		},
		{
			id: 'storage',
			name: '수납공간',
			icon: <Archive className={categoryStyles.icon} />,
			route: '/category/storage',
			subCategories: [
				{ id: 'closet', name: '붙박이장', route: '/category/storage/closet' },
				{ id: 'shoe', name: '신발장', route: '/category/storage/shoe' },
				{ id: 'wall', name: '벽수납', route: '/category/storage/wall' },
			],
		},
	];
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
