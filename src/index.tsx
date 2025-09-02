import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import { worker } from '../mocks/browser';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('../mocks/browser');
	return worker.start();
}
enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);
});
