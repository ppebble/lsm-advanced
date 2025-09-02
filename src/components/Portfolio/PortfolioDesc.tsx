import { portfolioStyles } from './styles';
import { css } from 'styled-system/css';

interface PortfolioProps {
	id: String;
	title: String;
	desc: String;
	isActive: boolean;
}

export function PortfolioDesc({ id, title, desc, isActive }: PortfolioProps) {
	return (
		<div className={portfolioStyles.descContainer(isActive)}>
			<p className={portfolioStyles.title}>{title}</p>
			<p className={portfolioStyles.desc}>{desc}</p>
		</div>
	);
}
