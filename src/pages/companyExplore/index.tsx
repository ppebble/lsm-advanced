import { Calendar, ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

import { companies } from '@/assets/data/psudoData';
import type { CategoryMainType } from '@/assets/data/type';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { companyExplorerStyles } from './style';

const CompanyExplorer = () => {
	const { data: categories } = useSuspenseFetchQuery<CategoryMainType[]>({
		url: SERVICE_URLS.mainCategories,
	});
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextCompany = () => {
		if (currentIndex < companies.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prevCompany = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const currentCompany = companies[currentIndex];
	return (
		<div className={companyExplorerStyles.container}>
			<div className={companyExplorerStyles.header}>
				<h1 className={companyExplorerStyles.title}>인테리어 업체 탐색</h1>
				<p className={companyExplorerStyles.subtitle}>다양한 스타일의 업체들을 만나보세요</p>
			</div>
			{companies.length > 0 ? (
				<>
					<div className={companyExplorerStyles.cardContainer}>
						<div className={companyExplorerStyles.card}>
							<img
								src={currentCompany.recentWork.images[0].url}
								alt={currentCompany.recentWork.images[0].alt}
								className={companyExplorerStyles.cardImage}
							/>
							<div className={companyExplorerStyles.cardContent}>
								<div className={companyExplorerStyles.companyHeader}>
									<img
										src={currentCompany.logo}
										alt={currentCompany.name}
										className={companyExplorerStyles.companyLogo}
									/>
									<div className={companyExplorerStyles.companyInfo}>
										<h3 className={companyExplorerStyles.companyName}>{currentCompany.name}</h3>
										<div className={companyExplorerStyles.rating}>
											<Star size={16} className={companyExplorerStyles.ratingStar} />
											<span>{currentCompany.rating}</span>
											<span>({currentCompany.reviewCount} reviews)</span>
										</div>
									</div>
								</div>

								<div className={companyExplorerStyles.stats}>
									<div className={companyExplorerStyles.statItem}>
										<Calendar size={16} />
										<span>작업물 {currentCompany.portfolioCount}개</span>
									</div>
									<div className={companyExplorerStyles.statItem}>
										<MapPin size={16} />
										<span>전국</span>
									</div>
								</div>

								<h4 className={companyExplorerStyles.workTitle}>
									{currentCompany.recentWork.title}
								</h4>
								<p className={companyExplorerStyles.workDescription}>
									{currentCompany.recentWork.description}
								</p>

								<div className={companyExplorerStyles.tags}>
									{currentCompany.tags.slice(0, 4).map((tag) => (
										<span key={tag} className={companyExplorerStyles.tag}>
											#{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className={companyExplorerStyles.navigation}>
						<button
							type='button'
							className={companyExplorerStyles.navButton}
							onClick={prevCompany}
							disabled={currentIndex === 0}
						>
							<ChevronLeft size={24} />
						</button>
						<span>
							{currentIndex + 1} / {companies.length}
						</span>
						<button
							type='button'
							className={companyExplorerStyles.navButton}
							onClick={nextCompany}
							disabled={currentIndex === companies.length - 1}
						>
							<ChevronRight size={24} />
						</button>
					</div>
				</>
			) : (
				<div className={companyExplorerStyles.emptyState}>
					<p>선택한 카테고리에 해당하는 업체가 없습니다.</p>
				</div>
			)}
		</div>
	);
};
export default CompanyExplorer;
