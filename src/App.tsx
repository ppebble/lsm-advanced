import React from 'react';
import logo from './logo.svg';

function App() {
	const url = import.meta.env.VITE_TEST_URL1;
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> a nd save to reload. {url}
					한국어 한국어
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
