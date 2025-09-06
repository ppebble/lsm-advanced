export interface PortfolioItem {
	id: string;
	title: string;
	description: string;
	category: CategoryMainType;
	style: InteriorStyle;
	images: ImageData[];
	details: ItemDetails;
	metrics: Metrics;
	company: CompanyInfo;
	createdAt: string;
	tags: string[];
}
export type CategoryProps = {
	id: string;
	name: string;
	subCategories?: SubCategoryType[];
	route: string;
	icon?: string;
};
export type SubCategoryType = {
	id: string;
	name: string;
	route: string;
};
export interface ItemDetails {
	location: string;
	area: number; // 평수 또는 m²
	period: string; // 시공 기간
	budget: number; // 예산 (만원 단위)
	materials: string[]; // 사용 재료
}

export interface Metrics {
	likes: number;
	views: number;
	shares: number;
	saves: number;
}

export interface CompanyInfo {
	id: string;
	name: string;
	logo?: string;
	rating: number;
	reviewCount: number;
}
export interface ImageData {
	id: string;
	url: string;
	alt: string;
	isPrimary: boolean;
	type: 'before' | 'after' | 'process' | 'detail';
}

export interface ApiResponse<T> {
	success: boolean;
	data: T;
	total?: number;
}

export type TrendProps = {
	id: string;
	title: string;
	likes: number;
	company: string;
	location?: string;
	color: string;
	img?: string;
};
// 타입 정의
export type CategoryMainType =
	| 'all'
	| 'bed'
	| 'bath'
	| 'kitchen'
	| 'living'
	| 'entrance'
	| 'floor'
	| 'lighting'
	| 'storage';

export type InteriorStyle =
	| 'modern'
	| 'minimal'
	| 'scandinavian'
	| 'industrial'
	| 'vintage'
	| 'natural'
	| 'classic'
	| 'contemporary';
