import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/fonts.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			retry: false,
		},
	},
});

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('../mocks/browser.js');
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
