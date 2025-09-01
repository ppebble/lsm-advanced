import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
	return (
		<Routes>
			<Route element={<Navigation />}>
				<Route path='/' element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
