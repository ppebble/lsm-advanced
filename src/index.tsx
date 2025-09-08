import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/fonts.css';

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
			<BrowserRouter>
				<App />
			</BrowserRouter>,
		);
	} else {
		console.error('Root element not found');
	}
});
