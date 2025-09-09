/* eslint-disable @typescript-eslint/no-shadow */
// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse, delay } from 'msw';

import { categories } from '@/assets/data/categories';
import { bannerItems, mainCategory, portfolioItems, trends } from '@/assets/data/psudoData';

export const handlers = [
	// 1. 포트폴리오 목록 조회
	http.get('/api/portfolio', async ({ request }) => {
		const url = new URL(request.url);
		const category = url.searchParams.get('category');

		// 네트워크 지연 설정
		await delay(Math.random() * 1 + 100);

		const filteredItems =
			category && category !== 'all'
				? portfolioItems.filter((item) => item.category === category)
				: portfolioItems;
		return HttpResponse.json({
			success: true,
			data: filteredItems,
			total: filteredItems.length,
		});
	}),
	// 메인 페이지의 포트폴리오 목록 간소화하여 return
	http.get('/api/portfolio/thumbnails', async ({ request }) => {
		const url = new URL(request.url);
		const category = url.searchParams.get('category');

		// 네트워크 지연 설정
		await delay(Math.random() * 1 + 30000);

		const filteredItems =
			category && category !== 'all'
				? portfolioItems.filter((item) => item.category === category)
				: portfolioItems;
		const data = filteredItems.map((e) => ({
			id: e.id,
			title: e.title,
			description: e.description,
			images: e.images[0].url,
		}));

		return HttpResponse.json({
			success: true,
			data,
			total: data.length,
		});
	}),

	// 2. 특정 포트폴리오 상세 조회
	http.get('/api/portfolio/:id', async ({ params }) => {
		await delay(800);

		const { id } = params;
		const item = portfolioItems.find((item) => item.id === id);

		if (!item) {
			return HttpResponse.json({ success: false, error: 'Not found' }, { status: 404 });
		}

		return HttpResponse.json({
			success: true,
			data: item,
		});
	}),

	// 3. 트렌드 목록 조회
	http.get('/api/trends', async () => {
		await delay(200);

		return HttpResponse.json({
			success: true,
			data: trends,
		});
	}),

	// 4. 좋아요 증가
	http.post('/api/portfolio/:id/like', async ({ params }) => {
		await delay(300);

		const { id } = params;
		// 실제로는 DB update, 여기서는 mock 데이터 수정
		const item = portfolioItems.find((item) => item.id === id);

		if (item && item.metrics) {
			item.metrics.likes += 1;
		}

		return HttpResponse.json({
			success: true,
			newLikes: item?.metrics.likes,
		});
	}),

	// 5. 메인카테고리 목록
	http.get('/api/main-categories', async () => {
		await delay(200);

		return HttpResponse.json({
			success: true,
			data: mainCategory,
		});
	}),
	// 5. 전체카테고리 목록
	http.get('/api/categories', async () => {
		await delay(200);

		return HttpResponse.json({
			success: true,
			data: categories,
		});
	}),
	// 6. 배너 이미지
	http.get('/api/banners', async () => {
		await delay(200);

		return HttpResponse.json({
			success: true,
			data: bannerItems,
		});
	}),
];
