import { css } from 'styled-system/css';
import { portfolioStyles } from './styles';
import { category, portfolioItems } from '@/assets/data/psudoData';

function Portfolio() {
	return (
		<>
			<div className={portfolioStyles.container}>
				<div className={portfolioStyles.mainContainer}>
					{category.map((tab) => {
						return (
							<button key={tab} className={portfolioStyles.tabfolderContainer}>
								{tab}
							</button>
						);
					})}
				</div>
			</div>
			<div className={portfolioStyles.itemContainer}>
				{portfolioItems.map((item, i) => (
					<div key={i} className={portfolioStyles.item}>
						<img src={item.images[0].url} alt={item.images[0].alt} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</>
	);
}
export default Portfolio;
