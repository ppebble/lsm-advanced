import { useState } from 'react';

import { SERVICE_URLS } from '@/utils/ServiceUrls';

import CategoryTabFolder from './CategoryTabfolder';
import PortfolioItems from './PortfolioItems';
import { portfolioStyles } from './styles';

const Portfolio = () => {
	const [url, setUrl] = useState<string>(SERVICE_URLS.portfolioThumbnails);

	const handleCategoryChange = (category: string) => {
		setUrl(`${SERVICE_URLS.portfolioThumbnails}?category=${category}`);
	};

	return (
		<div className={portfolioStyles.container}>
			<CategoryTabFolder onCategoryChange={handleCategoryChange} />
			<PortfolioItems url={url} />
		</div>
	);
};
export default Portfolio;
