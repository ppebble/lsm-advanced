export const BASE_URL = '/api/';
export const SERVICE_URLS = {
	banners: `${BASE_URL}banners`,
	categories: `${BASE_URL}categories`,
	mainCategories: `${BASE_URL}main-categories`,
	portfolioThumbnails: `${BASE_URL}portfolio/thumbnails`,
	portfolioItem: (id: string) => `${BASE_URL}portfolio/${id}`,
	trends: `${BASE_URL}trends`,
	metricLike: (id: string) => `${BASE_URL}portfolio/${id}/like`,
};
