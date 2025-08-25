import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import bed01 from '@assets/img/bed01.jpg';
import bed02 from '@assets/img/bed02.jpg';
import bed03 from '@assets/img/bed03.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { trendPatterns, trendStyles } from './styles';

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
		company: 'A',
		location: '서울 광진구',
	},
	{
		id: '123',
		title: '트렌드 아이템 2',
		color: 'gray.800',
		img: bed02,
		likes: 15,
		company: 'B',
		location: '경기도 수원시',
	},
	{
		id: '456',
		title: '트렌드 아이템 3',
		color: 'gray.800',
		img: bed03,
		likes: 15,
		company: 'C',
		location: '전라북도 전주시',
	},
];

function Trend() {
	const navigate = useNavigate();

	return (
		<>
			<h2 className={trendStyles.title}>🏆 실시간 인기 시공 사례</h2>

			<div className={trendStyles.gridContainer}>
				{trends.map((item) => (
					<div key={item.id} className={trendStyles.card}>
						<img src={item.img} className={trendStyles.image} />
						<div className={css({ p: '4' })}>
							<h3 className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '2', lineClamp: 2 })}>
								{item.title}
							</h3>
							<div className={trendPatterns.flexGap2}>
								<span className={css({ color: 'gray.600', fontSize: 'sm' })}>
									{item.company} · {item.location}
								</span>
							</div>
							<div className={trendPatterns.flexBetween}>
								<span className={css({ color: 'amber.600', fontWeight: 'bold' })}>
									♥ {item.likes}
								</span>
								<button
									className={trendStyles.detailButton}
									onClick={() => navigate(`/trend/${item.id}`)}
								>
									상세보기
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className={trendPatterns.flexCenter}>
				<button className={trendStyles.moreButton} onClick={() => navigate('/trends')}>
					더 많은 사례 보기 →
				</button>
			</div>
		</>
	);
}

export default Trend;
