import { detailSidebarStyles } from './styles';

const Relate = () => {
	return (
		<div className={detailSidebarStyles.relatedContent}>
			<h3 className={detailSidebarStyles.relatedTitle}>비슷한 인테리어</h3>
			<div className={detailSidebarStyles.relatedList}>
				<div className={detailSidebarStyles.relatedItem}>
					<div className={detailSidebarStyles.relatedImage} />
					<div className={detailSidebarStyles.relatedContentInfo}>
						<p className={detailSidebarStyles.relatedContentTitle}>소형 주방 공간 활용법</p>
						<p className={detailSidebarStyles.relatedContentViews}>n,nnnn views</p>
					</div>
				</div>
				<div className={detailSidebarStyles.relatedItem}>
					<div className={detailSidebarStyles.relatedImage} />
					<div className={detailSidebarStyles.relatedContentInfo}>
						<p className={detailSidebarStyles.relatedContentTitle}>원룸 수납 아이디어</p>
						<p className={detailSidebarStyles.relatedContentViews}>987 views</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Relate;
