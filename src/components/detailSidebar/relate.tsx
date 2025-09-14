import { detailPageStyles } from '@/pages/detailItem/styles';

const Relate = () => {
	return (
		<div className={detailPageStyles.relatedContent}>
			<h3 className={detailPageStyles.relatedTitle}>비슷한 인테리어</h3>
			<div className={detailPageStyles.relatedList}>
				<div className={detailPageStyles.relatedItem}>
					<div className={detailPageStyles.relatedImage} />
					<div className={detailPageStyles.relatedContentInfo}>
						<p className={detailPageStyles.relatedContentTitle}>소형 주방 공간 활용법</p>
						<p className={detailPageStyles.relatedContentViews}>n,nnnn views</p>
					</div>
				</div>
				<div className={detailPageStyles.relatedItem}>
					<div className={detailPageStyles.relatedImage} />
					<div className={detailPageStyles.relatedContentInfo}>
						<p className={detailPageStyles.relatedContentTitle}>원룸 수납 아이디어</p>
						<p className={detailPageStyles.relatedContentViews}>987 views</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Relate;
