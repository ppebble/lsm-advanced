import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Link, useNavigate } from 'react-router-dom';
import { trendPatterns, trendStyles } from './styles';
import { trends } from '@/assets/data/psudoData';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';
import { ApiResponse, TrendProps } from '@/assets/data/type';

function Trend() {
	// const { ref } = useIntersectionObserver();
	const refCallback = useIntersectionObserver();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<String | null>(null);
	const [trendItems, setTrendItems] = useState<TrendProps[]>([]);
	useEffect(() => {
		const fetchTrends = async () => {
			try {
				const res = await fetch('/api/trends');
				if (!res.ok) {
					throw new Error('실시간 트렌드 조회에 실패했습니다');
				}
				const result: ApiResponse<TrendProps[]> = await res.json();
				if (result) {
					setTrendItems(result.data);
				}
			} catch (err: any) {
				setError(err.messsage);
			}
		};
		fetchTrends();
	}, []);

	return (
		<>
			<h2 className={trendStyles.title}>🏆 실시간 인기 시공 사례</h2>

			<div className={trendStyles.gridContainer}>
				{trendItems.map((item) => (
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
				<Link className={trendStyles.moreButton} to={'/trends'}>
					더 많은 사례 보기 →
				</Link>
			</div>
		</>
	);
}

export default Trend;
