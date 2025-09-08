export const LoadingFallback = () => {
	return <div style={{ padding: '1rem' }}>⏳ 로딩 중...</div>;
};

export const ErrorFallback = ({ error }: { error: Error }) => {
	return <div style={{ padding: '1rem', color: 'red' }}>⚠️ 오류 발생: {error.message}</div>;
};
