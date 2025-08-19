import { css } from 'styled-system/css';
function Banner() {
	return (
		<>
			<div
				className={css({
					// bgImage: `url(${id01})`,
					bgImage: `url(@assets/img/id01.jpg)`,
					bgSize: 'cover',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					textAlign: 'center',
					height: { base: '300px', md: '500px' },
				})}
			>
				<div>
					<h1
						className={css({
							fontSize: { base: '3xl', md: '5xl' },
							fontWeight: 'bold',
							textShadow: '0 2px 4px rgba(0,0,0,0.5)',
							color: 'gray.200',
						})}
					>
						당신의 공간을 변화시키세요
					</h1>
					<p className={css({ fontSize: 'xl', mt: '4' })}>
						300+ 전문 업체와 연결되는 인테리어 플랫폼
					</p>
					<button
						className={css({
							mt: '6',
							px: '6',
							py: '3',
							bg: 'orange.500',
							color: 'white',
							rounded: 'md',
							_hover: { bg: 'orange.600' },
						})}
					>
						무료 상담 신청
					</button>
				</div>
			</div>
		</>
	);
}
export default Banner;
