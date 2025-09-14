import type { PortfolioItem } from '@/assets/data/type';

import CompanyCard from './companyCard';
import Metrics from './metrics';
import Relate from './relate';
import { detailSidebarStyles } from './styles';

interface DetailSidebarProps {
	data: PortfolioItem | null;
}

const DetailSidebar = ({ data }: DetailSidebarProps) => {
	return (
		<div className={detailSidebarStyles.sidebar}>
			{data && (
				<>
					<CompanyCard data={data} />
					<Metrics data={data} />
					<Relate />
				</>
			)}
		</div>
	);
};
export default DetailSidebar;
