import { css } from 'styled-system/css';

export const Skeleton = ({ className }: { className?: string }) => (
	<div
		className={
			css({
				backgroundColor: 'gray.200',
				borderRadius: 'xl',
				zIndex: 10,
				animation: 'pulse 1.5s ease-in-out infinite',
			}) + (className ? ` ${className}` : '')
		}
	/>
);
