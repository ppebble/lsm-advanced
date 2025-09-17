import type { PortfolioItem } from '@/assets/data/type';
import DetailBoard from '@/components/detailBoard';
import DetailSidebar from '@/components/detailSidebar';
import DetailSlider from '@/components/detailSlider';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { detailPageStyles } from './styles';

export const DetailContent = ({ id }: { id: string }) => {
	const { data } = useSuspenseFetchQuery<PortfolioItem>({
		url: SERVICE_URLS.portfolioItem(id),
	});

	return (
		<div className={detailPageStyles.container}>
			<DetailSlider imageDatas={data.images} />
			<div className={detailPageStyles.contentGrid}>
				<DetailBoard data={data} />
				<DetailSidebar data={data} />
			</div>
		</div>
	);
};
