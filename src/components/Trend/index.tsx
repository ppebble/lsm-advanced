import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Link, useNavigate } from 'react-router-dom';
import { trendPatterns, trendStyles } from './styles';
import { trends } from '@/assets/data/psudoData';

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
