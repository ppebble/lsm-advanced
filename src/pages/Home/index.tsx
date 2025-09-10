import Banner from '@/components/Banner';
import Category from '@/components/Category';
import Portfolio from '@/components/Portfolio';
import Trend from '@/components/Trend';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

const Home = () => {
	return (
		<div
			className={css({
				display: 'grid',
				gridTemplateRows: 'auto auto auto auto',
				maxWidth: '100vw',
				gap: '24px',
				overflowX: 'hidden',
				bgColor: 'gray.50',
			})}
		>
			{/* <section
				className={css({
					height: { base: '300px', md: '500px' },
				})}
			>
				<Banner />
			</section>
			<section
				className={flex({
					flexDirection: 'column',
					position: 'relative',
				})}
			>
				<Trend />
			</section>
			<section
				className={flex({
					height: '240px',
					py: { base: '12', md: '20' },
					px: { base: '4', md: '6' },
					justifyContent: 'center',
				})}
			>
				<Category />
			</section> */}
			<section>
				<Portfolio />
			</section>
		</div>
	);
};

export default Home;
