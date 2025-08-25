import { css } from 'styled-system/css';
import { bannerStyles } from './styles';
function Banner() {
	return (
		<>
			<div className={bannerStyles.mainImage}>
				<div>
					<h1 className={bannerStyles.mainPhrase}>당신의 공간을 변화시키세요</h1>
					<p className={css({ fontSize: 'xl', mt: '4' })}>
						300+ 전문 업체와 연결되는 인테리어 플랫폼
					</p>
					<button className={bannerStyles.btnInquiry}>무료 상담 신청</button>
				</div>
			</div>
		</>
	);
}
export default Banner;
