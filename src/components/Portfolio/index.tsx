import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useState } from 'react';

import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { ErrorFallback, LoadingFallback } from '../common/fallback';

import CategoryTabFolder from './CategoryTabfolder';
import PortfolioItems from './PortfolioItems';
import { portfolioStyles } from './styles';

const Portfolio = () => {
	const [url, setUrl] = useState<string>(SERVICE_URLS.portfolioThumbnails);

	const handleCategoryChange = (category: string) => {
		setUrl(`${SERVICE_URLS.portfolioThumbnails}?category=${category}`);
	};

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<LoadingFallback />}>
				<div className={portfolioStyles.container}>
					<CategoryTabFolder onCategoryChange={handleCategoryChange} />
					<PortfolioItems url={url} />
				</div>
			</Suspense>
		</ErrorBoundary>
	);
};
export default Portfolio;
