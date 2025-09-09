import { ErrorBoundary, Suspense } from '@suspensive/react';

import type { BannerItems } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback, LoadingFallback } from '../common/fallback';

import Slider from './Slider';

const Banner = () => {
	const bannerItems = useFetch<BannerItems[]>({ url: SERVICE_URLS.banners });

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<LoadingFallback />}>
				{bannerItems.data && <Slider bannerItems={bannerItems.data} />}
			</Suspense>
		</ErrorBoundary>
	);
};
export default Banner;
