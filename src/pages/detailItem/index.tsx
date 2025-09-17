import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useParams } from 'react-router-dom';

import type { PortfolioItem } from '@/assets/data/type';
import { ErrorFallback } from '@/components/common/fallback';
import DetailBoard from '@/components/detailBoard';
import DetailSidebar from '@/components/detailSidebar';
import DetailSlider from '@/components/detailSlider';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { detailPageStyles } from './styles';

const DetailItem = () => {
	const { id } = useParams();

	const { data } = useSuspenseFetchQuery<PortfolioItem>({
		url: SERVICE_URLS.portfolioItem(id || ''),
	});

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense>
				{data && (
					<div className={detailPageStyles.container}>
						<DetailSlider imageDatas={data.images} />
						<div className={detailPageStyles.contentGrid}>
							<DetailBoard data={data} />
							<DetailSidebar data={data} />
						</div>
					</div>
				)}
			</Suspense>
		</ErrorBoundary>
	);
};
export default DetailItem;
