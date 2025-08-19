import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import bed01 from '@assets/img/bed01.jpg';
import bed02 from '@assets/img/bed02.jpg';
import bed03 from '@assets/img/bed03.jpg';

export type TrendProps = {
	id: string;
	title: string;
	likes: number;
	company: string;
	location?: string;
	color: string;
	img?: string;
};

const trends: TrendProps[] = [
	{
		id: 'modern',
		title: '소형 원룸을 넓어 보이게 리모델링',
		color: 'gray.800',
		img: bed01,
		likes: 15,
		company: '',
	},
	{
		id: '123',
		title: '트렌드 아이템 2',
		color: 'gray.800',
		img: bed02,
		likes: 15,
		company: '',
	},
	{
		id: '456',
		title: '트렌드 아이템 3',
		color: 'gray.800',
		img: bed03,
		likes: 15,
		company: '',
	},
];

function Trend() {
	return (
		<>
			<h2
				className={css({
					fontSize: { base: 'xl', md: '2xl' },
					fontWeight: 'bold',
					mb: '8',
					textAlign: { base: 'start', md: 'center' },
					ml: { base: '8' },
					height: '30px',
				})}
			>
				🏆 실시간 인기 시공 사례
			</h2>

			<div
				className={css({
					display: 'grid',
					gridTemplateColumns: {
						base: 'repeat(1, minmax(280px, 1fr))', // 모바일: 1줄에 1-2개
						md: 'repeat(2, minmax(320px, 1fr))',
						xl: 'repeat(2, minmax(480px, 1fr))',
						'2xl': 'repeat(3, minmax(480px, 1fr))',
					},
					gap: { base: '2', md: '4', lg: '6' },
					width: 'calc(100% + 12px)',
					marginLeft: '-6px',
					justifyItems: 'center',
					justifyContent: 'space-evenly',
					// justifyItems: 'start',

					// alignItems: 'center',
					// alignContent: 'center',
					maxWidth: '1580px',
					height: '600px',
					// mx: 'auto',
					mx: { base: '0, 6px', md: 'auto' },
					overflowX: 'hidden',
					overflowY: { base: 'auto', '2xl': 'hidden' }, // 모바일에서 스크롤 가능
					scrollbar: 'hidden',
					WebkitOverflowScrolling: 'touch',
					scrollSnapType: 'none',
					willChange: 'transform',
					scrollBehavior: 'smooth',
				})}
			>
				{trends.map((item) => (
					<div
						key={item.id}
						className={css({
							bg: 'white',
							minH: '350px',
							width: { base: '350px', md: 'calc(100% - 24px)', lg: 'calc(100% - 12px)' },
							maxWidth: '480px',
							height: { base: '350px', md: '360px' },
							borderRadius: 'xl',
							overflow: 'hidden',
							border: '1px solid token(colors.gray.200)',
							boxShadow: 'md',
							transition: 'transform 0.2s',
							_hover: { transform: 'translateY(-4px)' },
						})}
					>
						<img
							src={item.img}
							className={css({
								width: '100%',
								bgSize: 'cover',
								height: '200px',
								objectFit: 'cover',
							})}
						/>
						<div className={css({ p: '4' })}>
							<h3
								className={css({
									fontSize: 'lg',
									fontWeight: 'bold',
									mb: '2',
									lineClamp: 2, // 2줄 이상 말줄임
								})}
							>
								{item.title}
							</h3>
							<div className={flex({ gap: '2', alignItems: 'center', mb: '2' })}>
								<span className={css({ color: 'gray.600', fontSize: 'sm' })}>
									{item.company} · {item.location}
								</span>
							</div>
							<div className={flex({ justifyContent: 'space-between' })}>
								<span className={css({ color: 'amber.600', fontWeight: 'bold' })}>
									♥ {item.likes}
								</span>
								<button
									className={css({
										px: '3',
										py: '1',
										bg: 'blue.500',
										color: 'white',
										borderRadius: 'full',
										fontSize: 'sm',
										_hover: { bg: 'blue.600' },
									})}
								>
									상세보기
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={flex({ justify: 'center', mt: '6' })}>
				<button
					className={css({
						px: '6',
						border: '1px solid token(colors.gray.300)',
						borderRadius: 'full',
						fontWeight: 'medium',
						_hover: { bg: 'gray.100' },
						height: '40px',
					})}
				>
					더 많은 사례 보기 →
				</button>
			</div>
		</>
	);
}
export default Trend;
