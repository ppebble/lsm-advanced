import { css } from 'styled-system/css';

export const ErrorFallback = ({ error }: { error: Error }) => {
	return (
		<div
			className={css({
				padding: '1rem',
				w: '100vw',
				bgColor: 'gray.400',
			})}
		>
			⏳ 로딩 중: {error.message}
		</div>
	);
};
