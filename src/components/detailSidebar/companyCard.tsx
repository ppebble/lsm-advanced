import type { PortfolioItem } from '@/assets/data/type';

import { detailSidebarStyles } from './styles';

interface CompanyCardProps {
	data: PortfolioItem | null;
}

const CompanyCard = ({ data }: CompanyCardProps) => {
	return (
		<div className={detailSidebarStyles.companyCard}>
			{data && (
				<>
					<div className={detailSidebarStyles.companyInfo}>
						<img
							src={data.company.logo}
							alt={data.company.name}
							className={detailSidebarStyles.companyLogo}
						/>
						<div>
							<h3 className={detailSidebarStyles.companyName}>{data.company.name}</h3>
							<div className={detailSidebarStyles.companyRating}>
								<span className={detailSidebarStyles.ratingStar}>★</span>
								<span className={detailSidebarStyles.ratingValue}>{data.company.rating}</span>
								<span className={detailSidebarStyles.ratingCount}>
									({data.company.reviewCount} reviews)
								</span>
							</div>
						</div>
					</div>
					<button type='button' className={detailSidebarStyles.inquiryButton}>
						문의하기
					</button>
				</>
			)}
		</div>
	);
};
export default CompanyCard;
