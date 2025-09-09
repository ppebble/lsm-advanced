import { css } from 'styled-system/css';

export const LoadingFallback = () => {
	return (
		<div
			className={css({
				padding: '1rem',
				color: 'gray.800',
				w: '100vw',
				bgColor: 'gray.400',
			})}
		>
			⏳ 로딩 중...
		</div>
	);
};

export const ErrorFallback = ({ error }: { error: Error }) => {
	return (
		<div
			className={css({
				padding: '1rem',
				color: 'red',
				w: '100vw',
				bgColor: 'gray.400',
			})}
		>
			⚠️ 오류 발생: {error.message}
		</div>
	);
};
