import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import { worker } from '../mocks/browser';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (process.env.NODE_ENV === 'development') {
	worker.start({
		onUnhandledRequest: 'bypass', // MSW가 처리하지 않은 요청은 그대로 통과
	});
}
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
