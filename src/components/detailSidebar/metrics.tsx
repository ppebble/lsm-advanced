import { Bookmark, Calendar, Eye, Heart, Share } from 'lucide-react';
import { useState } from 'react';

import type { PortfolioItem } from '@/assets/data/type';
import { usePostMutation } from '@/hooks/query/usePostMutation';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { METRIC_ACTION, METRIC_TYPE, type MetricAction, type MetricType } from './meticConst';
import { detailSidebarStyles } from './styles';

interface MetricsProps {
	data: PortfolioItem | null;
}

interface MetricsParams {
	itemId: string;
	metricType: MetricType;
	action: MetricAction;
}

interface MetricsResponse {
	success: boolean;
	newCount: number;
}

const Metrics = ({ data }: MetricsProps) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	const { mutate: postMetric } = usePostMutation<MetricsResponse, MetricsParams>({
		url: SERVICE_URLS.metricUpdate(data?.id || ''),
	});

	const handleMeticsClick = (metricType: MetricType, currentState: boolean) => {
		if (!data) return;

		const action = currentState ? METRIC_ACTION.DEC : METRIC_ACTION.INC;
		if (metricType === METRIC_TYPE.LIKE) {
			setIsLiked(!currentState);
			postMetric({
				itemId: data.id,
				metricType,
				action,
			});
		}
		if (metricType === METRIC_TYPE.SAVE) {
			setIsSaved(!currentState);
		}
	};

	return (
		<div className={detailSidebarStyles.metricsCard}>
			{data && (
				<>
					<div className={detailSidebarStyles.metricsButtons}>
						<button
							type='button'
							onClick={() => handleMeticsClick(METRIC_TYPE.LIKE, isLiked)}
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
							onClick={() => handleMeticsClick(METRIC_TYPE.SAVE, isSaved)}
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
