import { useEffect } from 'react';

import type { PortfolioItem } from '@/assets/data/type';
import DetailBoard from '@/components/detailBoard';
import DetailSidebar from '@/components/detailSidebar';
import type { MetricAction, MetricType } from '@/components/detailSidebar/meticConst';
import { METRIC_ACTION, METRIC_TYPE } from '@/components/detailSidebar/meticConst';
import DetailSlider from '@/components/detailSlider';
import { usePostMutation } from '@/hooks/query/usePostMutation';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { SERVICE_URLS } from '@/utils/ServiceUrls';

import { detailPageStyles } from './styles';

interface ViewPostResponse {
	success: boolean;
	newCount: number;
}
interface ViewPostParams {
	itemId: string;
	metricType: MetricType;
	action: MetricAction;
}

export const DetailContent = ({ id }: { id: string }) => {
	const { data } = useSuspenseFetchQuery<PortfolioItem>({
		url: SERVICE_URLS.portfolioItem(id),
	});
	const { mutate: postView } = usePostMutation<ViewPostResponse, ViewPostParams>({
		url: SERVICE_URLS.metricUpdate(data?.id),
	});
	useEffect(() => {
		if (data?.id) {
			const viewed = `viewed+${data.id}`;
			const hasViewed = sessionStorage.getItem(viewed);
			if (!hasViewed) {
				postView({
					itemId: data.id,
					metricType: METRIC_TYPE.VIEW,
					action: METRIC_ACTION.INC,
				});
			}
			sessionStorage.setItem(viewed, 'true');
		}
	}, [data?.id, postView]);

	return (
		<div className={detailPageStyles.container}>
			<DetailSlider imageDatas={data.images} />
			<div className={detailPageStyles.contentGrid}>
				<DetailBoard data={data} />
				<DetailSidebar data={data} />
			</div>
		</div>
	);
};
