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

		await delay(200);

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

		await delay(200);

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
		await delay(200);

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

	// 4.메트릭 업데이트
	http.post('/api/portfolio/:id/metrics', async ({ params, request }) => {
		await delay(200);

		const { id } = params;
		const body = await request.json();
		const { metricType, action } = body as {
			metricType: string;
			action: 'increment' | 'decrement';
		};

		const item = portfolioItems.find((item) => item.id === id);

		if (!item || !item.metrics) {
			return HttpResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
		}

		// metricType에 따라 분기 처리
		if (metricType === 'like') {
			if (action === 'increment') {
				item.metrics.likes += 1;
			} else if (action === 'decrement' && item.metrics.likes > 0) {
				item.metrics.likes -= 1;
			}
			return HttpResponse.json({
				success: true,
				newCount: item.metrics.likes,
			});
		}

		if (metricType === 'save') {
			if (action === 'increment') {
				item.metrics.saves += 1;
			} else if (action === 'decrement' && item.metrics.saves > 0) {
				item.metrics.saves -= 1;
			}
			return HttpResponse.json({
				success: true,
				newCount: item.metrics.saves,
			});
		}

		if (metricType === 'share') {
			if (action === 'increment') {
				item.metrics.shares += 1;
			}
			return HttpResponse.json({
				success: true,
				newCount: item.metrics.shares,
			});
		}

		if (metricType === 'view') {
			if (action === 'increment') {
				item.metrics.views += 1;
			}
			return HttpResponse.json({
				success: true,
				newCount: item.metrics.views,
			});
		}

		return HttpResponse.json({ success: false, message: 'Unknown metric type' }, { status: 400 });
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
