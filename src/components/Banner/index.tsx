import { ErrorBoundary, Suspense } from '@suspensive/react';

import type { BannerItems } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import Slider from './Slider';
import { bannerStyles } from './styles';

const Banner = () => {
	return <Slider />;
};
export default Banner;
