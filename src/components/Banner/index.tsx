import type { BannerItems } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import Slider from './Slider';

const Banner = () => {
	const bannerItems = useFetch<BannerItems[]>({ url: SERVICE_URLS.banners });

	return <div>{bannerItems.data && <Slider bannerItems={bannerItems.data} />}</div>;
};
export default Banner;
