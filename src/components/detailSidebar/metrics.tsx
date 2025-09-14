import { Bookmark, Calendar, Eye, Heart, Share } from 'lucide-react';
import { useState } from 'react';

import type { PortfolioItem } from '@/assets/data/type';

import { detailSidebarStyles } from './styles';

interface MetricsProps {
	data: PortfolioItem | null;
}

const Metrics = ({ data }: MetricsProps) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	return (
		<div className={detailSidebarStyles.metricsCard}>
			{data && (
				<>
					<div className={detailSidebarStyles.metricsButtons}>
						<button
							type='button'
							onClick={() => setIsLiked(!isLiked)}
							className={detailSidebarStyles.metricButton}
							style={{ color: isLiked ? '#ef4444' : '#6b7280' }}
						>
							<Heart
								size={20}
								fill={isLiked ? 'currentColor' : 'none'}
								className={detailSidebarStyles.metricIcon}
							/>
							<span>{data.metrics.likes + (isLiked ? 1 : 0)}</span>
						</button>
						<button type='button' className={detailSidebarStyles.metricButton}>
							<Eye size={20} className={detailSidebarStyles.metricIcon} />
							<span>{data.metrics.views}</span>
						</button>
						<button type='button' className={detailSidebarStyles.metricButton}>
							<Share size={20} className={detailSidebarStyles.metricIcon} />
							<span>{data.metrics.shares}</span>
						</button>
						<button
							type='button'
							onClick={() => setIsSaved(!isSaved)}
							className={detailSidebarStyles.metricButton}
							style={{ color: isSaved ? '#3b82f6' : '#6b7280' }}
						>
							<Bookmark
								size={20}
								fill={isSaved ? 'currentColor' : 'none'}
								className={detailSidebarStyles.metricIcon}
							/>
							<span>{data.metrics.saves + (isSaved ? 1 : 0)}</span>
						</button>
					</div>

					<div className={detailSidebarStyles.dateInfo}>
						<Calendar size={16} className={detailSidebarStyles.dateIcon} />
						{new Date(data.createdAt).toLocaleDateString('ko-KR')} 게시됨
					</div>
				</>
			)}
		</div>
	);
};

export default Metrics;
