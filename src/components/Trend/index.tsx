import { Link } from 'react-router-dom';

import type { TrendProps } from '@/assets/data/type';
import { useFetch } from '@/hooks/useFetch';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { css } from 'styled-system/css';

import { trendPatterns, trendStyles } from './styles';

const Trend = () => {
	const refCallback = useIntersectionObserver();
	const trendItems = useFetch<TrendProps[]>({ url: '/api/trends' });

	return (
		<>
			<h2 className={trendStyles.title}>🏆 실시간 인기 시공 사례</h2>

			<div className={trendStyles.gridContainer}>
				{trendItems.data &&
					trendItems.data.map((item) => (
						<div key={item.id} className={trendStyles.card}>
							<img
								ref={refCallback}
								data-src={item.img}
								className={trendStyles.image}
								alt='Loading . . .'
							/>
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
									<Link className={trendStyles.detailButton} to={`/trend/${item.id}`}>
										상세보기
									</Link>
								</div>
							</div>
						</div>
					))}
			</div>

			<div className={trendPatterns.flexCenter}>
				<Link className={trendStyles.moreButton} to='/trends'>
					더 많은 사례 보기 →
				</Link>
			</div>
		</>
	);
};

export default Trend;
