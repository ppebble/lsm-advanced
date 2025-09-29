import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useParams } from 'react-router-dom';

import { ErrorFallback } from '@/components/common/fallback';
import { Skeleton } from '@/components/common/skeleton';

import { DetailContent } from './detailContents';
import { detailPageStyles } from './styles';

const DetailItem = () => {
	const { id } = useParams();

	return (
		<ErrorBoundary fallback={ErrorFallback}>
			<Suspense fallback={<Skeleton className={detailPageStyles.container} />}>
				<DetailContent id={id || ''} />
			</Suspense>
		</ErrorBoundary>
	);
};
export default DetailItem;
