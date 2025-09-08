import { portfolioStyles } from './styles';

interface PortfolioProps {
	id: string;
	title: string;
	desc: string;
	isActive: boolean;
}

export const PortfolioDesc = ({ id, title, desc, isActive }: PortfolioProps) => {
	return (
		<div className={portfolioStyles.descCard(isActive)}>
			<p className={portfolioStyles.title}>{title}</p>
			<p className={portfolioStyles.desc}>{desc}</p>
		</div>
	);
};
