import type { BannerItems } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';

import Slider from './Slider';

const Banner = () => {
	const bannerItems = useFetch<BannerItems[]>({ url: '/api/banners' });

	return <div>{bannerItems.data && <Slider bannerItems={bannerItems.data} />}</div>;
};
export default Banner;
