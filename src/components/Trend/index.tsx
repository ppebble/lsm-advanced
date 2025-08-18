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
		title: '소형 원룸을 넓어 보이게 리모델링',
		color: 'gray.800',
		img: bed02,
		likes: 15,
		company: '',
	},
	{
		id: '123',
		title: '소형 원룸을 넓어 보이게 리모델링',
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
					fontSize: '2xl',
					fontWeight: 'bold',
					mb: '8',
					textAlign: 'center',
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
						xl: 'repeat(auto-fit, minmax(320px, 1fr))',
					},
					gap: '6',
					width: '100%',
					maxWidth: '1440px',
					height: '400px',
					mx: 'auto',
					overflowX: 'hidden',
					overflowY: { base: 'auto', md: 'hidden' }, // 모바일에서 스크롤 가능
				})}
			>
				{trends.map((item) => (
					<div
						key={item.id}
						className={css({
							bg: 'white',
							minH: '350px',
							width: { base: '100vw', md: 'calc(100% - 12px)' },
							height: { base: '400px', md: '360px' },
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
