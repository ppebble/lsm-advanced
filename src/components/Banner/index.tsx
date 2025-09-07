import { useRef, useState } from 'react';
import { css } from 'styled-system/css';
import { bannerStyles } from './styles';
import { BannerItems } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import Slider from './Slider';

function Banner() {
	const bannerItems = useFetch<BannerItems[]>({ url: '/api/banners' });

	return <>{bannerItems && <Slider bannerItems={bannerItems} />}</>;
}
export default Banner;
