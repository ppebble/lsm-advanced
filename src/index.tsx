import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/fonts.css';

// QueryClient 생성
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,

			retry: false, // 선택: 개발 중엔 자동 재시도 끄면 디버깅 편해요
		},
	},
});

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('../mocks/browser');
	return worker.start();
}

enableMocking().then(() => {
	const rootElement = document.getElementById('root');
	if (rootElement) {
		ReactDOM.createRoot(rootElement).render(
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</QueryClientProvider>,
		);
	} else {
		console.error('Root element not found');
	}
});
