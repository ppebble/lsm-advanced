import { Clock, DollarSign, MapPin } from 'lucide-react';

import type { PortfolioItem } from '@/assets/data/type';

import { detailBoardStyles } from './styles';

interface DetailBoardProps {
	data: PortfolioItem | null;
}

const DetailBoard = ({ data }: DetailBoardProps) => {
	return (
		<div className={detailBoardStyles.mainContent}>
			{data && (
				<>
					<h1 className={detailBoardStyles.title}>{data.title}</h1>
					<p className={detailBoardStyles.description}>{data.description}</p>
					<div className={detailBoardStyles.tagContainer}>
						{data.tags.map((tag, index) => (
							<span key={`${data.tags[index]}tags`} className={detailBoardStyles.tag}>
								#{tag}
							</span>
						))}
					</div>
					<div className={detailBoardStyles.detailCard}>
						<h2 className={detailBoardStyles.detailTitle}>상세 정보</h2>
						<div className={detailBoardStyles.detailGrid}>
							<div className={detailBoardStyles.detailItem}>
								<MapPin size={20} className={detailBoardStyles.detailIcon} />
								<span>{data.details.location}</span>
							</div>
							<div className={detailBoardStyles.detailItem}>
								<div className={detailBoardStyles.detailIcon}>㎡</div>
								<span>{data.details.area}평</span>
							</div>
							<div className={detailBoardStyles.detailItem}>
								<Clock size={20} className={detailBoardStyles.detailIcon} />
								<span>{data.details.period}</span>
							</div>
							<div className={detailBoardStyles.detailItem}>
								<DollarSign size={20} className={detailBoardStyles.detailIcon} />
								<span>{data.details.budget.toLocaleString()}만원</span>
							</div>
						</div>
						<div className={detailBoardStyles.materialsContainer}>
							<h3 className={detailBoardStyles.materialsTitle}>사용 재료</h3>
							<div className={detailBoardStyles.materialsList}>
								{data.details.materials.map((material, index) => (
									<span
										key={`${data.details.materials[index]}mat`}
										className={detailBoardStyles.materialTag}
									>
										{material}
									</span>
								))}
							</div>
						</div>
					</div>
					<div className={detailBoardStyles.storySection}>
						<h2 className={detailBoardStyles.storyTitle}>리모델링 스토리</h2>
						<p className={detailBoardStyles.storyText}>게시글 게시글 게시글</p>
					</div>
				</>
			)}
		</div>
	);
};
export default DetailBoard;
