import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import type { PortfolioItem } from '@/assets/data/type';
import { ErrorFallback } from '@/components/common/fallback';
import DetailBoard from '@/components/detailBoard';
import DetailSidebar from '@/components/detailSidebar';
import Metrics from '@/components/detailSidebar/metrics';
import { useFetch } from '@/hooks/useFetch';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { detailPageStyles } from './styles';

const DetailItem = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const { id } = useParams();

	const { data } = useFetch<PortfolioItem>({ url: SERVICE_URLS.portfolioItem(id || '') });

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense>
				{data && (
					<div className={detailPageStyles.container}>
						<div className={detailPageStyles.imageContainer}>
							{data.images.length > 0 && (
								<img
									src={data.images[currentImageIndex].url}
									alt={data.images[currentImageIndex].alt}
									className={detailPageStyles.image}
								/>
							)}
						</div>
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
